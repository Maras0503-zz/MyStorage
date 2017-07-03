<?php
    $userId = $_POST['userId'];
    $pass = $_POST['pass'];

    $query = "select checkOldPass('".$userId."','".$pass."') as correct";
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
        while($row = $fetch->fetch_array()) {
            $rowArray['correct'] = $row['correct'];
            array_push($returnArray,$rowArray);
        }
        $mysqli->close();
        return $returnArray;
    }
    echo json_encode(select($query));