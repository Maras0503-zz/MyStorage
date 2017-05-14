<?php
$docId = $_POST['docId'];

    $query = "call getDocumentRecords('".$docId."')";        
    
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
            while ($row = $fetch->fetch_array()) {
                
                $rowArray['document_records_id'] = $row['document_records_id'];
                $rowArray['document_records_product_id'] = $row['document_records_product_id'];
                $rowArray['product_name'] = $row['product_name'];
                $rowArray['product_unit_short'] = $row['product_unit_short'];
                $rowArray['document_records_product_number'] = $row['document_records_product_number'];
                $rowArray['vat_value'] = $row['document_records_vat'];
                $rowArray['document_records_price'] = $row['document_records_price'];
                $rowArray['document_records_discount'] = $row['document_records_discount'];
                array_push($returnArray,$rowArray);
            }
            $mysqli->close();
        return $returnArray;
    }   
    
    echo json_encode(select($query));