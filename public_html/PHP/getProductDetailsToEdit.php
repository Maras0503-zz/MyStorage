<?php
$parameter = $_POST['parameter'];

//SELECT INFORMATION ABOUT PRODUCTS TO ADD
$query = "call getProductDetailsToEdit('".$parameter."')";
function select($query){
    include('connect.php');
    $returnArray = array();
    $fetch = $mysqli->query($query);
    while ($row = $fetch->fetch_array()) {
        $rowArray['product_name'] = $row['product_name'];
        $rowArray['product_producer'] = $row['product_producer'];
        $rowArray['product_group'] = $row['product_group'];
        $rowArray['product_vat'] = $row['product_vat'];
        $rowArray['product_unit'] = $row['product_unit'];
        $rowArray['product_price'] = $row['product_price'];
        $rowArray['product_ean'] = $row['product_ean'];
        array_push($returnArray,$rowArray);
    }
    $mysqli->close();
    return $returnArray;
}

echo json_encode(select($query));