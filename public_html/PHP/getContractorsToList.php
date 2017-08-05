<?php
$pageNo = $_POST['pageNo'];
$ord = $_POST['ord'];
$id = $_POST['id'];
$conName = $_POST['conName'];
$conCity = $_POST['conCity'];
$conNIP = $_POST['conNIP'];

$query = "call getContractorsToList('".$pageNo."','".$ord."','".$id."','".$conName."','".$conCity."','".$conNIP."')";        

function select($query){
    include('connect.php');
    $returnArray = array();
    $fetch = $mysqli->query($query); 
        while ($row = $fetch->fetch_array()) {
            $rowArray['contractor_id'] = $row['contractor_id'];
            $rowArray['contractor_name'] = $row['contractor_name'];
            $rowArray['contractor_nip'] = $row['contractor_nip'];
            $rowArray['contractor_postal'] = $row['contractor_postal_code'];
            $rowArray['contractor_city'] = $row['contractor_city'];
            $rowArray['contractor_street'] = $row['contractor_street'];
            $rowArray['contractor_tel'] = $row['contractor_phone'];
            $rowArray['contractor_email'] = $row['contractor_email'];
            array_push($returnArray,$rowArray);
        }
        $mysqli->close();
    return $returnArray;
}   

echo json_encode(select($query));