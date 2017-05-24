<?php
$parameter = $_POST['parameter'];

//SELECT INFORMATION ABOUT PRODUCTS TO ADD
$query = "call getRecordDetailByRecordId('".$parameter."')";

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
        $rowArray['product_divider'] = $row['product_divider'];
        $rowArray['vat_value'] = $row['vat_value'];
        $rowArray['product_unit'] = $row['product_unit_short'];
        $rowArray['document_records_product_number'] = $row['document_records_product_number'];
        $rowArray['discount'] = $row['document_records_discount'];
        array_push($returnArray,$rowArray);
    }
    $mysqli->close();
    return $returnArray;
}

echo json_encode(select($query));