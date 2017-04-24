<?php
echo('<center>');
$max_rozmiar = 4194304;
//echo($_FILES['plik']['tmp_name']);
if (is_uploaded_file($_FILES['plik']['tmp_name'])) {
    if ($_FILES['plik']['size'] > $max_rozmiar) {
        echo 'Błąd! Plik jest za duży!';
    } else {
        echo 'Odebrano plik: '.$_FILES['plik']['name'];
        echo '<br/>';
        if (isset($_FILES['plik']['type'])) {
            echo 'Typ: '.$_FILES['plik']['type'].'<br/>';
        }
        move_uploaded_file($_FILES['plik']['tmp_name'],'productPhotos/'.$_POST['id'].'.jpg');
        echo ('Zapisano jako: productPhotos/'.$_POST["id"].'.jpg');
    }
} else {
   echo 'Błąd przy przesyłaniu danych!';
   if($_FILES['plik']['error'] == 1){
     echo('<font color="red">Plik jest za duży</font>');
   } else if($_FILES['plik']['error'] == 4){
     echo('<font color="red"> Nie wybrano pliku</font>');  
   }
   
}
echo('<br>Aktualny obraz:');
echo('<br><img src="productPhotos/'.$_POST['id'].'.jpg" width="500px">');
echo('<br><a href="#" onclick="javascript:window.close();opener.window.focus();" >Zamknij okno</a>');
echo('</center>');
?>