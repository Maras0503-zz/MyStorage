<?php
    $id = $_POST['docId'];
    $contractorId = $_POST['conId'];
    $conName = $_POST['conName'];
    $no = $_POST['docNo'];
    $docType = $_POST['docType'];

    $query = "select getDocumentsCount('".$docType."','".$no."','".$id."','".$contractorId."','".$conName."') as count";
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