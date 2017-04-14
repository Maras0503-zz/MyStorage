<?php
$target_dir = "../productPhotos/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$target_file = $target_dir . $_POST['id'].".jpg";
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo " Plik jest obrazem - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo " Plik nie jest obrazem bądź jest zbyt duży. (.jpg max 2mb)";
        $uploadOk = 0;
    }
}
/* Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
*/
// Check file size
if ($_FILES["fileToUpload"]["size"] > 2097152) {
    echo " Plik jest zbyt duży! (Limit 2MB)";
    $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg") {
    echo " Tylko pliki .jpg są dozwolone.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo " Plik nie został załadowany.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo " Plik ". basename( $_FILES["fileToUpload"]["name"]). " został załadowany.";
    } else {
        echo " Wystąpił błąd podczas ładowania obrazu.";
    }
}
echo('<br><img src="../productPhotos/'.$_POST['id'].'.jpg">');
echo('<br><a href="#" onclick="javascript:window.close();opener.window.focus();" >Zamknij okno</a>');
?>