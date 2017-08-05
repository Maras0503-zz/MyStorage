<?php
/*
  $serwer = "localhost:3306";
  $user = "marek";
  $password = "marek";
  $db = "storage";
*/
  $serwer = "mpiesik.pl";
  $user = "marek050_storage";
  $password = "marek123";
  $db = "marek050_storage";
  
  // Create connection
  $mysqli = new mysqli($serwer, $user, $password, $db);
  $mysqli->set_charset("utf8");