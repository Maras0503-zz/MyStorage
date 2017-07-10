<?php
    $prodId = $_POST['prodId'];
    $query = "call getPriceHistory('".$prodId."')";    
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
            while ($row = $fetch->fetch_array()) {             
                $rowArray['price_history_price'] = $row['price_history_price'];
                $rowArray['price_history_change_date'] = $row['price_history_change_date'];
                array_push($returnArray,$rowArray);
            }
            $mysqli->close();
        return $returnArray;
    }   
    
    echo json_encode(select($query));