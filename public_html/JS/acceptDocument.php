<?php
    $docId = $_POST['docId'];

    $query = "select acceptDocument('".$docId."')";
    function select($query){
        include('connect.php');
        $returnArray = array();
        $mysqli->query($query);
        $mysqli->close();
        return $returnArray;
    }
    echo json_encode(select($query));