<?php
    $name = $_POST['name'];
    $nip = $_POST['nip'];

    $query = "select checkContractorNameAndNip('".$name."','".$nip."') as isExists";
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
        while($row = $fetch->fetch_array()) {
            $rowArray['isExists'] = $row['isExists'];
            array_push($returnArray,$rowArray);
        }
        $mysqli->close();
        return $returnArray;
    }
    echo json_encode(select($query));