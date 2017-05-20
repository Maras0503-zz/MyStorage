<?php
    $docId = $_POST['docId'];
    $prodId = $_POST['prodId'];
    $qty = $_POST['qty'];
    $discount = $_POST['discount'];

    $query = "select addPosToWZ('".$docId."','".$prodId."','".$qty."','".$discount."')";
    function select($query){
        include('connect.php');
        $returnArray = array();
        $mysqli->query($query);
        $mysqli->close();
        return $returnArray;
    }
echo json_encode(select($query));