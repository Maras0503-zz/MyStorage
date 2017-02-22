<?php
    $id = $_POST['id'];
    $token = $_POST['token'];
    $valid = $_POST['valid'];

    //CHECK IS SESSION IS ACTIVE
    $query = "select isTokenValid('".$id."','".$token."','".$valid."') as isValid";
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
        while($row = $fetch->fetch_array()) {
            $rowArray['isValid'] = $row['isValid'];
            array_push($returnArray,$rowArray);
        }
        $mysqli->close();
        return $returnArray;
    }
    echo json_encode(select($query));