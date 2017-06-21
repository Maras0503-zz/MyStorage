<?php
    $query = "call getProductsGroups()";    
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
            while ($row = $fetch->fetch_array()) {
                
                $rowArray['product_group_id'] = $row['product_group_id'];
                $rowArray['product_group_name'] = $row['product_group_name'];
                $rowArray['product_group_short'] = $row['product_group_short'];
                array_push($returnArray,$rowArray);
            }
            $mysqli->close();
        return $returnArray;
    }   
    
    echo json_encode(select($query));