<?php
if(isset($_POST['login']) && isset($_POST['pass'])){
    $login = $_POST['login'];
    $md5 = $_POST['pass'];
    $token = $_POST['token'];
    $valid = $_POST['valid'];

    //CHECK IS USER EXIST AND RETURN TOKEN
    $query = "select checkPassword('".$login."','".$md5."') as userId";
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
        while($row = $fetch->fetch_array()) {
            $rowArray['userId'] = $row['userId'];
            array_push($returnArray,$rowArray);
        }
        
        if($returnArray[0]['userId'] != null){
            $query1 = "select saveNewToken('".$returnArray[0]['userId']."','".$_POST['token']."','".$_POST['valid']."')";
            $mysqli->query($query1);
        }
        $mysqli->close();
        return $returnArray;
    }
    echo json_encode(select($query));
}