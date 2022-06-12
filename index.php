<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>

<form action="includes/submit.inc.php" method="POST">
    <input id="usernameInput" type="text" name="username" onchange='localStorage.setItem("username", document.getElementById("usernameInput").value)' placeholder="Потребителско име">
    <br>
    <button type="submit" name="submit">Въведи</button>
</form>



</body>
</html>