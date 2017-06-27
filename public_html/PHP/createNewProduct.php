<?php
$prodName = $_POST['prodName'];
$prodProducer = $_POST['prodProducer'];
$prodGroup = $_POST['prodGroup'];
$prodVAT = $_POST['prodVAT'];
$prodUnit = $_POST['prodUnit'];
$prodPrice = $_POST['prodPrice'];
$prodBar = $_POST['prodBar'];

$query = "select createNewProduct('".$prodName."','".$prodProducer."','".$prodGroup."','".$prodVAT."','".$prodUnit."','".$prodPrice."','".$prodBar."')";        

function select($query){
    include('connect.php');
    $returnArray = array();
    $fetch = $mysqli->query($query); 
    $mysqli->close();
    return $returnArray;
}   

echo json_encode(select($query));