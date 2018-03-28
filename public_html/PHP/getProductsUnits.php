<?php
    $query = "call getProductsUnits()";    
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
            while ($row = $fetch->fetch_array()) {
                
                $rowArray['product_unit_id'] = $row['product_unit_id'];
                $rowArray['product_unit_name'] = $row['product_unit_name'];
                $rowArray['product_unit_short'] = $row['product_unit_short'];
                $rowArray['product_unit_en'] = $row['product_unit_en'];
                array_push($returnArray,$rowArray);
            }
            $mysqli->close();
        return $returnArray;
    }   
    
    echo json_encode(select($query));