<?php
$docId = $_POST['docId'];

    $query = "call getDocumentInfo('".$docId."')";        
    
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
            while ($row = $fetch->fetch_array()) {
                $rowArray['document_number'] = $row['document_number'];
                $rowArray['contractor_id'] = $row['contractor_id'];
                $rowArray['contractor_name'] = $row['contractor_name'];
                $rowArray['document_accept_date'] = $row['document_accept_date'];
                $rowArray['contractor_postal_code'] = $row['contractor_postal_code'];
                $rowArray['contractor_city'] = $row['contractor_city'];
                $rowArray['contractor_street'] = $row['contractor_street'];
                $rowArray['contractor_nip'] = $row['contractor_nip'];
                $rowArray['contractor_phone'] = $row['contractor_phone'];
                $rowArray['contractor_email'] = $row['contractor_email'];
                array_push($returnArray,$rowArray);
            }
            $mysqli->close();
        return $returnArray;
    }   
    
    echo json_encode(select($query));