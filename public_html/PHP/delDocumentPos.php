<?php
    $id = $_POST['posId'];

    $query = "select delDocumentPos('".$id."')";
    function select($query){
        include('connect.php');
        $returnArray = array();
        $mysqli->query($query);
        $mysqli->close();
        return $returnArray;
    }
    echo json_encode(select($query));