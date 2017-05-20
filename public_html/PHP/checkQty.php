<?php
    $prodId = $_POST['prodId'];
    $qty = $_POST['qty'];

    $query = "select checkQty('".$prodId."','".$qty."') as answer";
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