<?php
    $userId = $_POST['userId'];
    $newPass = $_POST['newPass'];

    $query = "select changePassword('".$userId."','".$newPass."')";
    function select($query){
        include('connect.php');
        $returnArray = array();
        $mysqli->query($query);
        $mysqli->close();
        return $returnArray;
    }
    echo json_encode(select($query));