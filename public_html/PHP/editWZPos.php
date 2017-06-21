<?php
    $posId = $_POST['posId'];
    $disc = $_POST['disc'];
    $qty = $_POST['qty'];

    $query = "select editWZPos('".$posId."','".$qty."','".$disc."')";
    function select($query){
        include('connect.php');
        $returnArray = array();
        $mysqli->query($query);
        $mysqli->close();
        return $returnArray;
    }
    echo json_encode(select($query));