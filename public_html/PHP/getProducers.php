<?php
    $query = "call getProducers()";    
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
            while ($row = $fetch->fetch_array()) {
                
                $rowArray['contractor_id'] = $row['contractor_id'];
                $rowArray['contractor_name'] = $row['contractor_name'];
                array_push($returnArray,$rowArray);
            }
            $mysqli->close();
        return $returnArray;
    }   
    
    echo json_encode(select($query));