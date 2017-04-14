<!DOCTYPE html>
<html>
    <head>
        <title>Wybór obrazu</title>
        <link rel="icon" href="IMG/favicon.ico">
    </head>
<body>


<form action="PHP/upload.php" method="post" enctype="multipart/form-data">
    Wybierz plik do wczytania (.jpg max 2mb):
    <input type="hidden" name="id" value="<?php echo($_GET['prodId']) ?>">
    <input type="file" accept="image/jpeg" name="fileToUpload" id="fileToUpload">
    <input type="submit" value="Wczytaj" name="submit">
</form>

</body>
</html>