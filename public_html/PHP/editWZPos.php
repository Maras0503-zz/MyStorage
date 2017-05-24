<?php
    $posId = $_POST['posId'];
    $disc = $_POST['disc'];
    $qty = $_POST['qty'];

    $query = "select editWZPos('".$posId."','".$qty."','".$disc."')";
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