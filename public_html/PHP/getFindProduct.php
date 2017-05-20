<?php
$pageNo = $_POST['pageNo'];
$ord = $_POST['ord'];
$parameter = $_POST['parameter'];

    //SELECT INFORMATION ABOUT PRODUCTS TO ADD
    $query = "call findProductToAdd('".$pageNo."','".$ord."','".$parameter."')";

    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
            while ($row = $fetch->fetch_array()) {
                $rowArray['product_id'] = $row['product_id'];
                $rowArray['product_name'] = $row['product_name'];
                $rowArray['contractor_name'] = $row['contractor_name'];
                $rowArray['product_number'] = $row['product_number'];
                $rowArray['product_price'] = $row['product_price'];
                array_push($returnArray,$rowArray);
            }
            $mysqli->close();
        return $returnArray;
    }   
    
    echo json_encode(select($query));