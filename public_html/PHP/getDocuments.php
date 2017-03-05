<?php
$pageNo = $_POST['page'];
$ord = $_POST['ord'];
$docType = $_POST['docType'];
$id = $_POST['docId'];
$no = $_POST['docNo'];
$contractorId = $_POST['conId'];
$conName = $_POST['conName'];

    $query = "call getDocuments('".$pageNo."','".$no."','".$ord."','".$docType."','".$id."','".$contractorId."','".$conName."')";        
    
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
            while ($row = $fetch->fetch_array()) {
                $rowArray['document_id'] = $row['document_id'];
                $rowArray['document_number'] = $row['document_number'];
                $rowArray['document_year'] = $row['document_year'];
                $rowArray['document_type_short'] = $row['document_type_short'];
                $rowArray['document_date'] = $row['document_date'];
                $rowArray['document_accept_date'] = $row['document_accept_date'];
                $rowArray['document_contractor_id'] = $row['document_contractor_id'];
                $rowArray['contractor_name'] = $row['contractor_name'];
                array_push($returnArray,$rowArray);
            }
            $mysqli->close();
        return $returnArray;
    }   
    
    echo json_encode(select($query));