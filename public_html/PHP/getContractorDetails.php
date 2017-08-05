<?php
$parameter = $_POST['parameter'];

$query = "call getContractorDetails('".$parameter."')";
function select($query){
    include('connect.php');

    $returnArray = array();
    $fetch = $mysqli->query($query);
    while ($row = $fetch->fetch_array()) {
        $rowArray['contractor_id'] = $row['contractor_id'];
        $rowArray['contractor_name'] = $row['contractor_name'];
        $rowArray['contractor_street'] = $row['contractor_street'];
        $rowArray['contractor_postal_code'] = $row['contractor_postal_code'];
        $rowArray['contractor_city'] = $row['contractor_city'];
        $rowArray['contractor_nip'] = $row['contractor_nip'];
        $rowArray['contractor_phone'] = $row['contractor_phone'];
        $rowArray['contractor_email'] = $row['contractor_email'];
        $rowArray['contractor_provider'] = $row['contractor_provider'];
        array_push($returnArray,$rowArray);
    }
    $mysqli->close();
    return $returnArray;
}

echo json_encode(select($query));