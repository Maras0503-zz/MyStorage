<?php
    $noMin = $_POST['noMin'];
    $noMax = $_POST['noMax'];
    $minPrice = $_POST['minPrice'];
    $maxPrice = $_POST['maxPrice'];
    $id = $_POST['id'];
    $prodName = $_POST['name'];

    //CHECK IS USER EXIST AND RETURN TOKEN
    $query = "select getProductCount('".$noMin."','".$noMax."','".$minPrice."','".$maxPrice."','".$id."','".$prodName."') as count";
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
        while($row = $fetch->fetch_array()) {
            $rowArray['count'] = $row['count'];
            array_push($returnArray,$rowArray);
        }
        $mysqli->close();
        return $returnArray;
    }
    echo json_encode(select($query));