<?php
    $prodId = $_POST['prodId'];
    $prodName = $_POST['prodName'];
    $prodProducer = $_POST['prodProducer'];
    $prodGroup = $_POST['prodGroup'];
    $prodVat = $_POST['prodVat'];
    $prodUnit = $_POST['prodUnit'];
    $prodPrice = $_POST['prodPrice'];
    $prodEan = $_POST['prodEan'];

    $query = "select editProduct('".$prodId."','".$prodName."','".$prodProducer."','".$prodGroup."','".$prodVat."','".$prodUnit."','".$prodPrice."','".$prodEan."')";
    function select($query){
        include('connect.php');
        $returnArray = array();
        $mysqli->query($query);
        $mysqli->close();
        return $returnArray;
    }
    echo json_encode(select($query));