<?php
$pageNo = $_POST['page'];
$ord = $_POST['ord'];
$noMin = $_POST['noMin'];
$noMax = $_POST['noMax'];
$minPrice = $_POST['minPrice'];
$maxPrice = $_POST['maxPrice'];
$id = $_POST['id'];
$prodName = $_POST['name'];

    //SELECT INFORMATION ABOUT PRODUCTS
    $query = "call getProducts('".$pageNo."','".$ord."','".$noMin."','".$noMax."','".$minPrice."','".$maxPrice."','".$id."','".$prodName."')";        
    
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
                $rowArray['vat_value'] = $row['vat_value'];
                $rowArray['product_group_name'] = $row['product_group_name'];
                $rowArray['product_status_name'] = $row['product_status_name'];
                $rowArray['product_unit_short'] = $row['product_unit_short'];
                array_push($returnArray,$rowArray);
            }
            $mysqli->close();
        return $returnArray;
    }   
    
    echo json_encode(select($query));