<?php
    $parameter = $_POST['parameter'];

    $query = "select getFindProductToAddCount('".$parameter."') as count";
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