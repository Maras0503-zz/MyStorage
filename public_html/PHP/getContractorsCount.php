<?php
    $id = $_POST['id'];
    $conName = $_POST['conName'];
    $conCity = $_POST['conCity'];
    $conNIP = $_POST['conNIP'];

    $query = "select getContractorsCount('".$id."','".$conName."','".$conCity."','".$conNIP."') as count";
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
        while($row = $fetch->fetch_array()) {
            $rowArray['count'] = $row['count'];
            array_push($returnArray,$rowArray);
        }
        $mysqli->close();
        return $returnArray;
    }
    echo json_encode(select($query));