<?php
    $year = $_POST['year'];
    $prodId = $_POST['prodId'];
    $query = "call getSellByMonth('".$prodId."','".$year."')";    
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
            while ($row = $fetch->fetch_array()) {
                $rowArray['month'] = $row['month'];
                $rowArray['sold'] = $row['sold'];
                array_push($returnArray,$rowArray);
            }
            $mysqli->close();
        return $returnArray;
    }   
    
    echo json_encode(select($query));