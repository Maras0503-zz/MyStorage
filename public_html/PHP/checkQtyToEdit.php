<?php
$posId = $_POST['posId'];
$qty = $_POST['qty'];

$query = "select checkQtyToEdit('".$posId."','".$qty."') as answer";
function select($query){
    include('connect.php');
    $returnArray = array();
    $fetch = $mysqli->query($query);
    while($row = $fetch->fetch_array()) {
        $rowArray['answer'] = $row['answer'];
        array_push($returnArray,$rowArray);
    }
    $mysqli->close();
    return $returnArray;
}
echo json_encode(select($query));