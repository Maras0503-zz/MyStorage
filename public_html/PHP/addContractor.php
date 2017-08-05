<?php
    $conName = $_POST['conName'];
    $conStreet = $_POST['conStreet'];
    $conPostalCode = $_POST['conPostalCode'];
    $conCity = $_POST['conCity'];
    $conNip = $_POST['conNip'];
    $conPhone = $_POST['conPhone'];
    $conEmail = $_POST['conEmail'];
    $conIsProvider = $_POST['conIsProvider'];

    $query = "select addContractor('".$conName."','".$conStreet."','".$conPostalCode."','".$conCity."','".$conNip."','".$conPhone."','".$conEmail."','".$conIsProvider."')";
    function select($query){
        include('connect.php');
        $returnArray = array();
        $mysqli->query($query);
        $mysqli->close();
        return $returnArray;
    }
echo json_encode(select($query));