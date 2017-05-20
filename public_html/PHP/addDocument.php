<?php
$docType = $_POST['docType'];
$docDate = $_POST['docDate'];
$docCon = $_POST['docCon'];
$docYear = $_POST['docYear'];
$docCreator = $_POST['docCreator'];

$query = "select addDocument('".$docType."','".$docDate."','".$docCon."','".$docYear."','".$docCreator."')";        

function select($query){
    include('connect.php');
    $returnArray = array();
    $fetch = $mysqli->query($query); 
    $mysqli->close();
    return $returnArray;
}   

echo json_encode(select($query));