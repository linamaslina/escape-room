const workerCache = "escape-room-v1"
const assets = [
  "/",
  "/main.php",
  "/ranking.php",
  "/saveRanking.php",
  "/database.sql",
  "/css/style.css",
  "/game.html",
  "/css/game.css",
  "/includes/dbh.inc.php",
  "/includes/submit.inc.php",
  "/graphics/exit.svg",
  "/graphics/room_template.svg",
  "/graphics/room_template_mirrored.svg",
  "/graphics/media/1.png",
  "/graphics/rooms/bedroom/bed-teddy-zoom.png",
  "/graphics/rooms/bedroom/bed-teddy.png",
  "/graphics/rooms/bedroom/bed.png",
  "/graphics/rooms/bedroom/cabinet-open.png",,
  "/graphics/rooms/bedroom/cabinet.svg",
  "/graphics/rooms/bedroom/candle2.svg",
  "/graphics/rooms/bedroom/candle2.png",
  "/graphics/rooms/bedroom/candle.svg",
  "/graphics/rooms/bedroom/chair.png",
  "/graphics/rooms/bedroom/fire-extinguisher.svg",
  "/graphics/rooms/bedroom/key.svg",
  "/graphics/rooms/bedroom/lamp.png",
  "/graphics/rooms/bedroom/tshirt.png",
  "/graphics/rooms/bedroom/wateringcan.png",
  "/graphics/rooms/bedroom/window1.png",
  "/graphics/rooms/congrats/ballons.svg",
  "/graphics/rooms/exit/door2-lock.png",
  "/graphics/rooms/exit/door2.png",
  "/graphics/rooms/exit/hanger.png",
  "/graphics/rooms/exit/shoe1.svg",
  "/graphics/rooms/exit/shoe2.svg",
  "/graphics/rooms/kitchen/calendar-correct.png",
  "/graphics/rooms/kitchen/calendar.png",
  "/graphics/rooms/kitchen/calendar2.png",
  "/graphics/rooms/kitchen/chair.png",
  "/graphics/rooms/kitchen/fire.svg",
  "/graphics/rooms/kitchen/fruitbowl.png",
  "/graphics/rooms/kitchen/fruitbowl1.png",
  "/graphics/rooms/kitchen/fruitbowl2.png",
  "/graphics/rooms/kitchen/fruitbowl3.png",
  "/graphics/rooms/kitchen/fruitbowl4.png",
  "/graphics/rooms/kitchen/oven.png",
  "/graphics/rooms/kitchen/pan.png",
  "/graphics/rooms/kitchen/table.svg",
  "/graphics/rooms/kitchen/teddy.png",
  "/graphics/rooms/kitchen/teddy2.png",
  "/graphics/rooms/office/apple.png",
  "/graphics/rooms/office/code.png",
  "/graphics/rooms/office/desk.png",
  "/graphics/rooms/office/europe-map.png",
  "/graphics/rooms/office/flower.png",
  "/graphics/rooms/office/flower2.png",
  "/graphics/rooms/office/letter.png",
  "/graphics/rooms/office/lightbulb.png",
  "/graphics/rooms/office/london-picture.png",
  "/graphics/rooms/office/map.svg",
  "/graphics/rooms/office/office_chair.png",
  "/graphics/rooms/office/office_chair2.png",
  "/graphics/rooms/office/pocketlighter.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(workerCache).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
