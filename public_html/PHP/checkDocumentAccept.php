<?php
    $id = $_POST['docId'];

    $query = "select checkDocumentAccept('".$id."') as accept";
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
        while($row = $fetch->fetch_array()) {
            $rowArray['accept'] = $row['accept'];
            array_push($returnArray,$rowArray);
        }
        $mysqli->close();
        return $returnArray;
    }
    echo json_encode(select($query));