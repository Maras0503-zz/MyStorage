<?php
    $query = "call getProductsVat()";    
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
            while ($row = $fetch->fetch_array()) {
                
                $rowArray['vat_id'] = $row['vat_id'];
                $rowArray['vat_value'] = $row['vat_value'];
                array_push($returnArray,$rowArray);
            }
            $mysqli->close();
        return $returnArray;
    }   
    
    echo json_encode(select($query));