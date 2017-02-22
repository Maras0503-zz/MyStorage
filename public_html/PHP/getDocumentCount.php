<?php
    $pageNo = $_POST['page'];
    $ord = $_POST['ord'];
    $id = $_POST['id'];
    $contractorId = $_POST['conId'];
    $conName = $_POST['condName'];
    $docType = $_POST['docType'];

    //CHECK IS USER EXIST AND RETURN TOKEN
    $query = "select getDocuments('".$pageNo."','".$ord."','".$id."','".$contractorId."','".$conName."') as count";
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