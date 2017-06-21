-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: storage
-- ------------------------------------------------------
-- Server version	5.7.12-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contractor_tab`
--

DROP TABLE IF EXISTS `contractor_tab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contractor_tab` (
  `contractor_id` int(11) NOT NULL AUTO_INCREMENT,
  `contractor_name` varchar(45) DEFAULT NULL,
  `contractor_nip` varchar(45) DEFAULT NULL,
  `contractor_postal_code` varchar(45) DEFAULT NULL,
  `contractor_city` varchar(45) DEFAULT NULL,
  `contractor_street` varchar(45) DEFAULT NULL,
  `contractor_provider` int(11) DEFAULT NULL,
  `contractor_phone` varchar(45) DEFAULT NULL,
  `contractor_email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`contractor_id`),
  UNIQUE KEY `producer_id_UNIQUE` (`contractor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contractor_tab`
--

LOCK TABLES `contractor_tab` WRITE;
/*!40000 ALTER TABLE `contractor_tab` DISABLE KEYS */;
INSERT INTO `contractor_tab` VALUES (1,'BRINTONS AGNELLA SA','542-02-0-498','15-113','BIAŁYSTOK','GEN. WŁADYSŁAWA ANDERSA 42',1,'52352352','biuro@agnella.pl'),(2,'DYWILAN SA','725-14-86-179','90-212','ŁÓDŹ','STERLINGA 27/29',1,'32523532','biuro@dywilan.pl'),(3,'ALSTAL','12345','02-201','WARSZAWA','TESTOWA 1/23',0,'42634632','biuro@alstal.pl'),(4,'BIUROSTYL','14214235','85-231','BYDGOSZCZ','SPRAWDZONA 21/3',0,'26364322','biuro@biurostyl.pl'),(5,'TEST 1','11111111111','11-111','ATEST','TESTOWA',1,'34636423','biuro@testowo1.pl'),(6,'TEST 2','22222222222','22-222','BTEST','TESTOWA',0,'53453462','biurotestowe@gmail.com'),(7,'TEST 3','33333333333','33-333','CTEST','TESTOWA',1,'53462671','testowy123@gmail.com'),(8,'TEST 4','44444444444','44-444','DTEST','TESTOWA',1,'56272143','biuro123@testowo.com'),(9,'TEST 5','55555555555','55-555','ETEST','TESTOWA',0,'56335256','office@wp.pl'),(10,'MyStorage s.c.','452-52-53-253','89-504','LEGBĄD','ŻWIROWA 1',1,'886612432','office@mystorage.com');
/*!40000 ALTER TABLE `contractor_tab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `document_records`
--

DROP TABLE IF EXISTS `document_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `document_records` (
  `document_records_id` int(11) NOT NULL AUTO_INCREMENT,
  `document_records_document_id` int(11) DEFAULT NULL,
  `document_records_product_id` int(11) DEFAULT NULL,
  `document_records_product_number` int(11) DEFAULT NULL,
  `document_records_discount` int(11) DEFAULT NULL,
  `document_records_price` int(11) DEFAULT NULL,
  `document_records_vat` int(11) DEFAULT NULL,
  PRIMARY KEY (`document_records_id`),
  UNIQUE KEY `document_rekords_id_UNIQUE` (`document_records_id`)
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `document_records`
--

LOCK TABLES `document_records` WRITE;
/*!40000 ALTER TABLE `document_records` DISABLE KEYS */;
INSERT INTO `document_records` VALUES (1,9,3,200,1000,9999,23),(2,9,5,100,0,999,23),(3,9,6,300,0,1999,23),(4,10,10,400,0,1299,23),(5,10,11,200,0,15999,23),(6,10,12,500,0,25699,23),(7,41,3,1000,0,54899,23),(11,41,15,100,0,1899,23),(12,9,1,100,0,5230,23),(14,9,3,300,0,300,23),(16,124,5,500,0,5200,23),(17,9,6,600,0,300,23),(18,126,31,200,1000,500,23),(19,9,32,100,0,2300,23),(21,9,25,200,0,399,23),(22,52,40,5000,5,5299,23),(34,142,71,500,0,42400,8),(35,142,57,1500,0,1,5),(37,144,31,100,1000,89990,23),(38,144,61,300,0,1,0),(39,144,63,100,220,199900,0),(43,144,67,500,0,1,0),(70,149,71,100,0,42400,8),(71,68,100,0,0,NULL,NULL),(72,68,100,0,0,NULL,NULL),(73,68,100,0,0,NULL,NULL),(74,68,100,0,0,NULL,NULL),(76,149,45,700,0,6990,23),(77,150,63,100,500,199900,0),(79,150,67,100,0,1,0),(85,150,62,200,500,200000,0),(87,140,70,200,9000,123,0),(88,155,63,100,0,199900,0),(115,159,71,500,0,42400,8),(116,159,70,500,0,123,0),(117,158,71,1000,0,42400,8),(118,158,70,1000,0,123,0),(119,160,70,500,0,123,0),(120,160,71,500,0,42400,8),(124,162,71,1600,0,0,0),(126,169,67,5300,0,0,0),(127,169,71,200,0,0,0),(128,169,62,2500,0,0,0),(129,170,32,1000,0,0,0),(130,170,31,1000,0,0,0),(131,170,19,1000,0,0,0),(132,170,5,3000,0,0,0),(133,170,45,1000,0,0,0),(134,170,71,5000,0,0,0),(135,170,40,10000,0,0,0),(136,171,28,600,0,3,0),(137,171,31,400,0,89990,23),(138,171,32,700,0,129990,23),(139,171,71,5700,0,42400,8),(140,171,62,200,0,200000,0),(141,171,67,600,0,1,0),(142,171,58,200,0,1,0),(143,171,56,6300,0,1,5),(144,171,40,2000,0,123,23),(145,171,29,300,0,2,5),(146,171,25,500,0,16,0),(147,171,71,500,0,42400,8),(148,171,71,500,0,42400,8),(149,171,62,300,0,200000,0),(150,171,62,600,0,200000,0),(151,171,67,600,0,1,0),(152,171,70,600,0,123,0),(153,171,70,300,0,123,0),(154,171,62,500,0,200000,0);
/*!40000 ALTER TABLE `document_records` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`marek`@`%`*/ /*!50003 TRIGGER `document_records_AFTER_DELETE` AFTER DELETE ON `document_records`
 FOR EACH ROW BEGIN
	declare old_qty int;
    declare old_prod_id int;
    declare current_qty int;
    declare new_qty int;
    declare old_doc_type int;
    select document_type from document_tab where document_id = old.document_records_document_id into old_doc_type;
    set old_qty = old.document_records_product_number;
    set old_prod_id = old.document_records_product_id;
    if old_doc_type != 4 then
		select product_number from product_tab where product_id = old_prod_id into current_qty;
        set new_qty = old_qty + current_qty;
		UPDATE product_tab SET product_tab.product_number = new_qty where product_id = old_prod_id;
	end if;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `document_tab`
--

DROP TABLE IF EXISTS `document_tab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `document_tab` (
  `document_id` int(11) NOT NULL AUTO_INCREMENT,
  `document_type` int(11) DEFAULT NULL,
  `document_date` bigint(20) DEFAULT NULL,
  `document_accept_date` bigint(20) DEFAULT NULL,
  `document_sale_date` bigint(20) DEFAULT NULL,
  `document_contractor_id` int(11) DEFAULT NULL,
  `document_number` int(11) DEFAULT NULL,
  `document_year` int(11) DEFAULT NULL,
  `document_creator` int(11) DEFAULT NULL,
  PRIMARY KEY (`document_id`),
  UNIQUE KEY `document_id_UNIQUE` (`document_id`)
) ENGINE=InnoDB AUTO_INCREMENT=174 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `document_tab`
--

LOCK TABLES `document_tab` WRITE;
/*!40000 ALTER TABLE `document_tab` DISABLE KEYS */;
INSERT INTO `document_tab` VALUES (9,1,1475246968624,1475246969999,1475246969999,1,1,2016,1),(10,1,1475249574990,1475249574990,1475249574990,2,2,2016,11),(41,1,1481836495874,1481836700000,1481836700000,2,3,2016,48),(42,1,1481836650569,1481183750000,1481183750000,1,4,2016,48),(46,1,1482020036559,1482020036559,1482020036559,2,5,2016,48),(47,1,1482020047401,1482020047401,1482020047401,2,6,2016,11),(49,1,1482020066061,1482020066061,1482020066061,1,7,2016,11),(50,1,1482020075150,1482020075150,1482020075150,2,8,2016,1),(51,1,1482020083185,1482020083185,1482020083185,2,9,2016,1),(52,1,1482020092356,1482020092356,1482020092356,2,10,2016,1),(112,1,1483722516315,1490484856000,1490484856000,4,11,2017,48),(123,5,1483722683837,1482020066061,1482020066061,1,0,2017,1),(124,1,1483722691371,1490542641000,1490542641000,2,18,2017,48),(126,1,1483722730923,1490487175000,1490487175000,3,17,2017,48),(127,1,1483722741530,1490486898000,1490486898000,4,16,2017,1),(132,1,1489098142592,1490486367000,1490486367000,4,14,2017,1),(133,1,1489098236573,1490486356000,1490486356000,3,13,2017,50),(135,1,1489100541952,1490486332000,1490486332000,2,12,2017,1),(140,5,1489924761066,1495837950000,1495837950000,2,1,2017,1),(142,1,1494801778595,1494801945000,1494801945000,1,19,2017,1),(144,1,1494878817486,1494967371000,1494967371000,6,20,2017,50),(149,1,1495470685391,1495655872000,1495655872000,9,21,2017,1),(155,5,1495838392270,1495838434000,1495838434000,9,2,2017,1),(158,4,1495980786291,1495994357000,1495994357000,5,4,2017,1),(159,4,1495992929454,1495993798000,1495993798000,8,3,2017,1),(160,4,1495994595377,1495994627000,1495994627000,5,5,2017,1),(162,4,1495997001099,1495998403000,1495998403000,2,6,2017,1),(169,4,1496092938317,1496097847000,1496097847000,1,7,2017,1),(170,4,1496132722529,1496132899000,1496132899000,4,8,2017,1),(171,1,1496439889338,1496440113000,1496440113000,7,22,2017,1),(173,1,1496585148997,0,NULL,9,0,2017,50);
/*!40000 ALTER TABLE `document_tab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `document_type_tab`
--

DROP TABLE IF EXISTS `document_type_tab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `document_type_tab` (
  `document_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `document_type_name` varchar(45) DEFAULT NULL,
  `document_type_short` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`document_type_id`),
  UNIQUE KEY `document_type_id_UNIQUE` (`document_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `document_type_tab`
--

LOCK TABLES `document_type_tab` WRITE;
/*!40000 ALTER TABLE `document_type_tab` DISABLE KEYS */;
INSERT INTO `document_type_tab` VALUES (1,'wydanie zewnętrzne','WZ'),(2,'zmiana dodatnia','MI+'),(3,'zmiana ujemna','MI-'),(4,'przyjęcie z zewnątrz','PZ'),(5,'faktura vat','FV'),(6,'przyjęcie wewnętrzne','PW'),(7,'rozchód wewnętrzny','RW');
/*!40000 ALTER TABLE `document_type_tab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fd_to_wz`
--

DROP TABLE IF EXISTS `fd_to_wz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fd_to_wz` (
  `fd_id` int(11) DEFAULT NULL,
  `wz_id` varchar(45) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fd_to_wz`
--

LOCK TABLES `fd_to_wz` WRITE;
/*!40000 ALTER TABLE `fd_to_wz` DISABLE KEYS */;
/*!40000 ALTER TABLE `fd_to_wz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `price_history`
--

DROP TABLE IF EXISTS `price_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `price_history` (
  `price_history_id` int(11) NOT NULL AUTO_INCREMENT,
  `price_history_product_id` int(11) DEFAULT NULL,
  `price_history_price` int(11) DEFAULT NULL,
  `price_history_change_date` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`price_history_id`),
  UNIQUE KEY `price_history_id_UNIQUE` (`price_history_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `price_history`
--

LOCK TABLES `price_history` WRITE;
/*!40000 ALTER TABLE `price_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `price_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_group_tab`
--

DROP TABLE IF EXISTS `product_group_tab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_group_tab` (
  `product_group_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_group_name` varchar(45) DEFAULT NULL,
  `product_group_short` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`product_group_id`),
  UNIQUE KEY `product_group_id_UNIQUE` (`product_group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_group_tab`
--

LOCK TABLES `product_group_tab` WRITE;
/*!40000 ALTER TABLE `product_group_tab` DISABLE KEYS */;
INSERT INTO `product_group_tab` VALUES (1,'WYKŁADZINY DYWANOWE','WD'),(2,'WYKŁADZINY ELASTYCZNE','WE'),(3,'DYWANY','DW'),(5,'PANELE','PA'),(6,'CHEMIA','CH'),(10,'DREWNO','DR');
/*!40000 ALTER TABLE `product_group_tab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_price_hist`
--

DROP TABLE IF EXISTS `product_price_hist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_price_hist` (
  `price_hist_product_id` int(11) DEFAULT NULL,
  `price_hist_price` float DEFAULT NULL,
  `price_hist_change_date` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_price_hist`
--

LOCK TABLES `product_price_hist` WRITE;
/*!40000 ALTER TABLE `product_price_hist` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_price_hist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_status_tab`
--

DROP TABLE IF EXISTS `product_status_tab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_status_tab` (
  `product_status_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_status_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`product_status_id`),
  UNIQUE KEY `product_status_id_UNIQUE` (`product_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_status_tab`
--

LOCK TABLES `product_status_tab` WRITE;
/*!40000 ALTER TABLE `product_status_tab` DISABLE KEYS */;
INSERT INTO `product_status_tab` VALUES (1,'AKTYWNY'),(2,'WYCOFANY');
/*!40000 ALTER TABLE `product_status_tab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_tab`
--

DROP TABLE IF EXISTS `product_tab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_tab` (
  `product_id` int(11) unsigned NOT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `product_producer` int(11) DEFAULT NULL,
  `product_number` int(11) DEFAULT NULL,
  `product_price` int(11) DEFAULT NULL,
  `product_vat` int(11) DEFAULT NULL,
  `product_ean` varchar(15) DEFAULT NULL,
  `product_group` int(11) DEFAULT NULL,
  `product_status` int(11) DEFAULT NULL,
  `product_unit` int(11) DEFAULT NULL,
  `product_divider` int(11) DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `product_id_UNIQUE` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_tab`
--

LOCK TABLES `product_tab` WRITE;
/*!40000 ALTER TABLE `product_tab` DISABLE KEYS */;
INSERT INTO `product_tab` VALUES (1,'DDDD',2,400,1999,4,'44444',4,1,2,0),(3,'DYWAN DAFNE SAHARA 200X300',1,900,129990,4,'123456789',3,1,2,1),(5,'CHODNIK ARALIA C.BRĄZ 100',1,6000,9550,4,'123456789',3,1,5,0),(6,'DYWAN ARALIA BORDO 150X250',1,500,49990,3,'123456789',3,1,2,1),(10,'TEST 1',1,100,1,4,'1',1,1,1,0),(11,'TEST 2',1,200,2,4,'2',1,1,1,1),(12,'TEST 3',1,300,3,4,'3',1,1,1,0),(13,'TEST 4',1,400,4,4,'4',1,1,1,0),(14,'TEST 5 SSŚ',1,500,5,4,'5',1,1,1,0),(15,'TEST 6',1,600,6,1,'6',1,1,1,1),(16,'TEST 7',1,700,7,1,'7',1,1,1,1),(17,'TEST 8',1,800,8,3,'8',1,1,1,1),(18,'TEST 9',1,900,9,2,'9',1,1,1,0),(19,'DYWAN PLURAL IMBIR 120X170',1,2200,39990,4,'123456789',3,1,2,1),(20,'TEST 11',1,1100,11,1,'11',1,1,1,0),(21,'TEST 12',1,1200,12,1,'12',1,1,1,0),(22,'TEST 13',1,1300,13,1,'13',1,1,1,1),(23,'TEST 14',1,1400,14,1,'14',1,1,1,1),(24,'TEST 15',1,1500,15,1,'15',1,1,1,1),(25,'TEST 16',1,1100,16,1,'16',1,1,1,0),(26,'TEST 17',1,1700,5,1,'17171717',1,1,1,0),(27,'TEST 18',1,0,4,1,'18',1,1,1,0),(28,'TEST 19',1,1300,3,1,'19',1,1,1,1),(29,'TESTOWY 22',1,1900,2,2,'22',4,2,3,0),(31,'DYWAN STOLNIK RUBIN 200X300',2,1000,89990,4,'123456789',3,1,2,1),(32,'DYWAN WIOSNA BORDO 160X230',1,700,129990,4,'123456789',3,1,2,1),(40,'DDDDDDDDDDX',2,8000,123,4,'44444',4,1,2,0),(45,'DYWAN SHEEPSKIN 60X110',1,1400,6990,4,'525235235',3,1,2,1),(52,'COŚ NOWEGO 123',2,0,2432,4,'123456789102',2,1,4,1),(53,'TEST 1234567',1,0,1243,1,'213124124',3,1,3,0),(54,'SDASDASDASDAS',2,0,4124,2,'21212122112',3,1,5,1),(55,'SDASDASDASDAS',2,600,1,2,'21212122112',3,1,5,0),(56,'SDASDASDASDAS',2,34300,1,2,'1234124124',3,1,5,0),(57,'SDASDASDASDAS',2,300,1,2,'1234124124',1,1,5,1),(58,'SDASDASDASDAS',2,2800,1,1,'1234124124',1,1,5,0),(59,'SDASDASDASDAS',2,400,1,1,'1234124124',1,1,1,1),(60,'SDASDASDASDAS',2,400,1,1,'1234124124',1,1,1,0),(61,'SDASDASDASDAS',2,100,1,1,'1234124124',1,1,2,1),(62,'SDASDASDASDAS',2,54500,200000,1,'1234124124',1,1,3,0),(63,'SDASDASDASDAS',2,0,199900,1,'1234124124',1,1,4,1),(67,'ZIELONA ZABAWKA',2,4100,1,1,'1234124124',1,1,2,0),(70,'NOŻYCZKI',2,600,123,1,'12412412412',3,1,1,1),(71,'ZŁOTA OZDOBA',2,1600,42400,3,'124124142',3,1,3,1);
/*!40000 ALTER TABLE `product_tab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_unit_tab`
--

DROP TABLE IF EXISTS `product_unit_tab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_unit_tab` (
  `product_unit_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_unit_name` varchar(45) DEFAULT NULL,
  `product_unit_short` varchar(45) DEFAULT NULL,
  `product_unit_en` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`product_unit_id`),
  UNIQUE KEY `product_unit_id_UNIQUE` (`product_unit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_unit_tab`
--

LOCK TABLES `product_unit_tab` WRITE;
/*!40000 ALTER TABLE `product_unit_tab` DISABLE KEYS */;
INSERT INTO `product_unit_tab` VALUES (1,'KILOGRAM','kg','kg'),(2,'SZTUKA','szt.','pcs.'),(3,'KOMPLET','kpl.','set'),(4,'METR KWADRATOWY','m2','sqm'),(5,'METR BIEŻĄCY','mb','m'),(6,'METR SZEŚCIENNY','m3','cbm'),(7,'LITR','l','l');
/*!40000 ALTER TABLE `product_unit_tab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_session`
--

DROP TABLE IF EXISTS `user_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_session` (
  `session_id` int(11) NOT NULL AUTO_INCREMENT,
  `session_user_id` int(11) DEFAULT NULL,
  `session_token` varchar(50) DEFAULT NULL,
  `session_valid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`session_id`),
  UNIQUE KEY `session_id_UNIQUE` (`session_id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_session`
--

LOCK TABLES `user_session` WRITE;
/*!40000 ALTER TABLE `user_session` DISABLE KEYS */;
INSERT INTO `user_session` VALUES (1,50,'994849ff943b782e6b3a2afebbedb51b',1496613696400),(2,1,'339d6c46c47317ae84f475212a42b09a',1498108211325),(3,0,'905a28b5b7e70cbf394f3ed26a66021a',1494895507138),(4,1,'35e6f2a481b4ca1d3da36d6aaac57368',1498108674015),(5,1,'bcbace515630040967294b0a7d4ef9a3',1498108697256),(6,1,'315c09d260345b4d693a079a1b8b2c49',1498108861378),(7,1,'98495b2905763d381576db012d8ae974',1498108942417),(8,1,'610e0df8209c6399b7c5905d2d6ce1a0',1498109042770),(9,1,'1528c798f6c6fc58f994b283dbe998c1',1498109069178),(10,1,'d683da3e4220f5a4223fe34bd07c3067',1498109180913),(11,1,'8c722ffc1291145772fb1ea61ba7b112',1498109361147),(12,1,'b869fc5f1c7792b53c3ab0cbea758980',1498109367257);
/*!40000 ALTER TABLE `user_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_tab`
--

DROP TABLE IF EXISTS `user_tab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_tab` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_fname` varchar(45) DEFAULT NULL,
  `user_lname` varchar(45) DEFAULT NULL,
  `user_login` varchar(45) DEFAULT NULL,
  `user_pass` varchar(45) DEFAULT NULL,
  `user_type` varchar(45) DEFAULT NULL,
  `user_pass_expiration` bigint(20) DEFAULT NULL,
  `user_company` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `USER_ID_UNIQUE` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tab`
--

LOCK TABLES `user_tab` WRITE;
/*!40000 ALTER TABLE `user_tab` DISABLE KEYS */;
INSERT INTO `user_tab` VALUES (1,'Marek','Piesik','marekpiesik1@gmail.com','4694ec14a36f7db8964cfdef8c3cd1c9','1',1488679665272,10),(50,'hash','hash','test@mystorage.pl','0800fc577294c34e0b28ad2839435945','1',1490000000000,2);
/*!40000 ALTER TABLE `user_tab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_type_tab`
--

DROP TABLE IF EXISTS `user_type_tab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_type_tab` (
  `user_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_type_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_type_id`),
  UNIQUE KEY `user_type_id_UNIQUE` (`user_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_type_tab`
--

LOCK TABLES `user_type_tab` WRITE;
/*!40000 ALTER TABLE `user_type_tab` DISABLE KEYS */;
INSERT INTO `user_type_tab` VALUES (1,'administrators'),(2,'workers'),(3,'cataloguer');
/*!40000 ALTER TABLE `user_type_tab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vat_tab`
--

DROP TABLE IF EXISTS `vat_tab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vat_tab` (
  `vat_id` int(11) NOT NULL AUTO_INCREMENT,
  `vat_value` int(11) DEFAULT NULL,
  PRIMARY KEY (`vat_id`),
  UNIQUE KEY `vat_id_UNIQUE` (`vat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vat_tab`
--

LOCK TABLES `vat_tab` WRITE;
/*!40000 ALTER TABLE `vat_tab` DISABLE KEYS */;
INSERT INTO `vat_tab` VALUES (1,0),(2,5),(3,8),(4,23);
/*!40000 ALTER TABLE `vat_tab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'storage'
--

--
-- Dumping routines for database 'storage'
--
/*!50003 DROP FUNCTION IF EXISTS `acceptDocument` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `acceptDocument`(docId INT) RETURNS int(11)
BEGIN
	declare tm bigint;
    declare docType INT;
    declare docNo INT;
    select unix_timestamp() into tm;
    set tm = tm*1000;
    select document_type from document_tab where document_id = docId into docType;
    select document_number from document_tab where document_type=docType order by document_number desc limit 1 into docNo;
    set docNo = docNo + 1;
    update document_tab set document_accept_date = tm, document_number=docNo where document_id=docId;
RETURN 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `acceptDocumentPZ` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `acceptDocumentPZ`(docId INT) RETURNS int(11)
BEGIN
	declare tm bigint;
    declare docType INT;
    declare docNo INT;
    declare i int;
    declare qty int;
    declare oldQty int;
    declare prodId int;
    declare isExist int;
    set i=0;
    select unix_timestamp() into tm;
    set tm = tm*1000;
    select document_type from document_tab where document_id = docId into docType;
    select document_number from document_tab where document_type=docType order by document_number desc limit 1 into docNo;
    set docNo = docNo + 1;
    update document_tab set document_accept_date = tm, document_number=docNo where document_id=docId;
    if EXISTS(select document_records_id from document_records where document_records_document_id = docId order by document_records_id limit 1 offset i)then
		select document_records_product_id from document_records
		where document_records_document_id = docId
		order by document_records_id
		limit 1
		offset i
		into prodId;
		select document_records_product_number from document_records
		where document_records_document_id = docId
		order by document_records_id
		limit 1
		offset i
		into qty;
        select product_number from product_tab where product_id = prodId into oldQty;
        update product_tab set product_number=qty+oldQty where product_id = prodId;
        set isExist = true;
        set i=i+1;
	else
		set isExist = false;
	end if;
    
    label1: WHILE isExist=true DO
		if EXISTS(select document_records_id from document_records where document_records_document_id = docId order by document_records_id limit 1 offset i)then
			select document_records_product_id from document_records
			where document_records_document_id = docId
			order by document_records_id
			limit 1
			offset i
			into prodId;

			select document_records_product_number from document_records
			where document_records_document_id = docId
			order by document_records_id
			limit 1
			offset i
			into qty;
            select product_number from product_tab where product_id = prodId into oldQty;
            update product_tab set product_number=qty+oldQty where product_id = prodId;
			set isExist = true;
            set i=i+1;
		else
			set isExist=false;
		end if;
	END WHILE label1;
RETURN 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `addDocument` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `addDocument`(docType INT, docDate BIGINT, docCon INT, docYear INT, docCreator INT) RETURNS int(11)
BEGIN
	INSERT INTO document_tab (document_type, document_date, document_accept_date, document_contractor_id, document_number, document_year, document_creator)
		 VALUES (docType, docDate, 0, docCon, 0, docYear, docCreator);
RETURN 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `addPosToPZ` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `addPosToPZ`(docId INT, prodId INT, prodQty INT, discount INT) RETURNS int(11)
BEGIN
	insert into document_records (document_records_document_id, document_records_product_id, document_records_product_number, document_records_discount, document_records_price, document_records_vat)
    values (docId, prodId, prodQty, 0, 0, 0);
RETURN 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `addPosToWZ` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `addPosToWZ`(docId INT, prodId INT, prodQty INT, discount INT) RETURNS int(11)
BEGIN
	declare qty int;
    declare price int;
    declare vat int;
    select product_price from product_tab 
		where product_id = prodId
        into price;
    select vat_value from product_tab
		join vat_tab on vat_tab.vat_id = product_tab.product_vat
		where product_id = prodId
		into vat;
	insert into document_records (document_records_document_id, document_records_product_id, document_records_product_number, document_records_discount, document_records_price, document_records_vat)
    values (docId, prodId, prodQty, discount, price, vat);
    select product_number from product_tab where product_id = prodId into qty;
    update product_tab set product_number = qty-prodQty where product_id = prodId;
RETURN 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `changePrice` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `changePrice`(productId INT, newPrice INT) RETURNS int(11)
BEGIN
	declare tm bigint;
    select unix_timestamp() into tm;
    set tm = tm*1000;
	insert into price_history (price_history_product_id, price_history_change_date, price_history_price)
		 values (productId, tm, newPrice);
	update product_tab set product_price = newPrice;
RETURN 1; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `checkDocumentAccept` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `checkDocumentAccept`(docId INT) RETURNS int(11)
BEGIN
	declare ans int;
	declare tm BIGINT;
	select document_accept_date from document_tab where document_id = docId into tm;
    if(tm<>0)then
		set ans = 1;
	else
		set ans = 0;
	end if;
	return ans;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `checkPassword` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `checkPassword`(login varchar(50), passMD5 varchar(50)) RETURNS varchar(20) CHARSET utf8
BEGIN
	declare ans varchar(20);
    declare userId int;
    declare userType int;
	if EXISTS(select user_id from user_tab where user_login = login and user_pass = passMD5)
	then
	  select user_id from user_tab where user_login = login and user_pass = passMD5 into userId;
      select user_type from user_tab where user_login = login and user_pass = passMD5 into userType;
	  set ans = userId;
	else
	  set ans = null;
	end if;
	return ans;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `checkQty` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `checkQty`(prodId int, qty int) RETURNS int(11)
BEGIN
	declare ans int;
	declare prodQty int;
    set ans=0;
    select product_number from product_tab where product_id = prodId into prodQty;
    if prodQty>=qty then
		set ans=1;
	else
		set ans=0;
	end if;
    return ans;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `checkQtyToEdit` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `checkQtyToEdit`(posId INT, prodNewQty INT) RETURNS int(11)
BEGIN
	DECLARE ans int;
	DECLARE prodId int;
    DECLARE oldQty int;
    DECLARE prodQty int;
	DECLARE diff int;
    select document_records_product_id from document_records where document_records_id = posId into prodId;
    select document_records_product_number from document_records where document_records_id = posId into oldQty;
	select product_number from product_tab where product_id = prodId into prodQty;
    set diff = (prodQty-(prodNewQty - oldQty));
    if diff >= 0 then
		set ans = 1;
    end if;
    if diff < 0 then
		set ans = 0;
    end if;
    return ans;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `delDocumentPos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `delDocumentPos`(posId int) RETURNS int(11)
BEGIN
	delete from document_records where document_records_id = posId;
RETURN 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `editWZPos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `editWZPos`(posId INT, posQty INT, posDisc INT) RETURNS int(11)
BEGIN
	declare qty int;
    declare id int;
    declare oldQty int;
    select document_records_product_number from document_records where document_records_id = posId into oldQty;
    select document_records_product_id from document_records where document_records_id = posId into id;
    select product_number from product_tab where product_id = id into qty;
    update product_tab set product_number = (qty-(posQty-oldQty)) where product_id = id;
	update document_records set document_records_product_number = posQty, document_records_discount = posDisc where document_records_id = posId;
	return 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getContractorsCount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `getContractorsCount`(id INT, conName varchar(20), conCity varchar(20), conNIP varchar(20)) RETURNS int(11)
BEGIN
	declare ans int;
	if(id=0)then
		select count(*) from contractor_tab where contractor_name like concat('%',conName,'%') and contractor_city like concat('%',conCity,'%') and replace(contractor_nip,'-', '') like concat('%',replace(conNIP,'-', ''),'%') into ans;
	end if;
	if(id<>0)then
		select count(*) from contractor_tab where contractor_id=id and contractor_name like concat('%',conName,'%') and contractor_city like concat('%',conCity,'%') and replace(contractor_nip,'-', '') like concat('%',replace(conNIP,'-', ''),'%') into ans;
	end if;
RETURN ans;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getDocumentRecordsCount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `getDocumentRecordsCount`(docId INT) RETURNS int(11)
BEGIN
	declare count int;
	select count(*) from document_records where document_records_document_id=docId into count;
RETURN count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getDocumentsCount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `getDocumentsCount`(docType INT, docNo INT, docId INT, conId INT,conName varchar(20)) RETURNS int(11)
BEGIN
	declare ans int;
    if(docNo = 0) then
		if(conId=0) then
			if(docId = 0) then
				set ans = (select count(*)
				from (select document_id, document_type ,contractor_name from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				where document_type = docType and contractor_name like concat('%',conName,'%')) answer);
			end if;
			if(docId <> 0) then
				set ans = (select count(*)
				from (select document_id, document_type ,contractor_name from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				where document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')) answer);
			end if;
		end if;
		if(conId<>0) then
			if(docId = 0) then
				set ans = (select count(*)
				from (select document_id, document_type ,contractor_name from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				where document_type = docType and document_contractor_id = conId and contractor_name like concat('%',conName,'%')) answer);
			end if;
			if(docId <> 0) then
				set ans = (select count(*)
				from (select document_id, document_type ,contractor_name from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				where document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')) answer);
			end if;
		end if;
    end if;
    
    if(docNo<>0)then
		if(conId=0) then
			if(docId = 0) then
				set ans = (select count(*)
				from (select document_id, document_type ,contractor_name from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				where document_type = docType and document_number = docNo and contractor_name like concat('%',conName,'%')) answer);
			end if;
			if(docId <> 0) then
				set ans = (select count(*)
				from (select document_id, document_type ,contractor_name from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				where document_type = docType and document_number = docNo and document_id=docId and contractor_name like concat('%',conName,'%')) answer);
			end if;
		end if;
		if(conId<>0) then
			if(docId = 0) then
				set ans = (select count(*)
				from (select document_id, document_type ,contractor_name from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				where document_type = docType and document_number = docNo and document_contractor_id = conId and contractor_name like concat('%',conName,'%')) answer);
			end if;
			if(docId <> 0) then
				set ans = (select count(*)
				from (select document_id, document_type ,contractor_name from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				where document_type = docType and document_number = docNo and document_id=docId and contractor_name like concat('%',conName,'%')) answer);
			end if;
		end if;
	end if;
    return ans;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getFindProductToAddCount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `getFindProductToAddCount`(parameter varchar(30)) RETURNS int(11)
BEGIN
	declare ans int;
    set ans =  
	(select count(*) from(select product_id, product_name, contractor_name, product_price, product_number from product_tab
		join contractor_tab on product_tab.product_producer = contractor_tab.contractor_id
		where product_id like parameter or product_name like concat('%', parameter, '%') or product_ean=parameter) answer);
	return ans;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getProductCount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `getProductCount`(noMin float,noMax float,minPrice float,maxPrice float,id int,prodName varchar(50)) RETURNS int(11)
BEGIN
	declare ans int;
	/*ORDER BY ID*/
		if (id = 0) then
		select count(*)
			from product_tab
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
                into ans;
		end if;
		if (id != 0) then
			select count(*)
					from product_tab
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
                        into ans;
		end if;
		if (id = 0) then
			select count(*)
			from product_tab
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
				into ans;
		end if;
		if (id != 0) then
			select count(*)
					from product_tab
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
                        into ans;
		end if;
    /*ORDER BY NAME*/
		if (id = 0) then
			select count(*)
			from product_tab
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
                into ans;
		end if;
		if (id != 0) then
			select count(*)
					from product_tab
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
                        into ans;
		end if;
		if (id = 0) then
			select count(*)
			from product_tab
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
                into ans;
		end if;
		if (id != 0) then
			select count(*)
					from product_tab
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
                        into ans;
		end if;
    /*ORDER BY PRICE*/
		if (id = 0) then
			select count(*)
			from product_tab
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
                into ans;
		end if;
		if (id != 0) then
			select count(*)
					from product_tab
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
                        into ans;
		end if;
		if (id = 0) then
			select count(*)
			from product_tab
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
                into ans;
		end if;
		if (id != 0) then
			select count(*)
					from product_tab
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
                        into ans;
		end if;
    /*ORDER BY NO*/
		if (id = 0) then
			select count(*)
			from product_tab
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
                into ans;
		end if;
		if (id != 0) then
			select count(*)
					from product_tab
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
                        into ans;
		end if;
		if (id = 0) then
			select count(*)
			from product_tab
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
                into ans;
		end if;
		if (id != 0) then
			select count(*)
					from product_tab
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
                        into ans;
		end if;
    
RETURN ans;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `isTokenValid` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `isTokenValid`(userId int, token varchar(50), valid bigint) RETURNS int(11)
BEGIN
	declare ans int;
    set ans = 0;
	if exists(select * from user_session where session_user_id=UserId and session_token=token and session_valid>valid)
    then
		if(userId>0) then
			set ans = 1;
        end if;
    end if;
RETURN ans;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `saveNewToken` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` FUNCTION `saveNewToken`(userId int, token varchar(50), valid bigint) RETURNS tinyint(1)
BEGIN

	insert into user_session (session_user_id, session_token, session_valid) values (userId, token, valid);
RETURN 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delDocument` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `delDocument`(IN docId INT)
BEGIN
	delete from document_tab where document_id = docId;
    delete from document_records where document_records_document_id=docId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `findProductToAdd` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `findProductToAdd`(IN pageNo INT, IN ord INT, IN parameter varchar(30))
BEGIN
	declare setOffset int;
    declare setLimit int;
    set setOffset = (pageNo * 5);
    set setLimit = 5;
	/*
		0-ID STD
        1-ID DESC
        2-NAME STD
        3-NAME DESC
        4-CONTRACTOR STD
        5-CONTRACTOR DESC
        6-PRICE STD
        7-PRICE DESC
        8-NUMBER STD
        9-NUMBER DESC
    */
	if (ord=0) then
		select product_id, product_name, contractor_name, product_price, product_number from product_tab
			join contractor_tab on product_tab.product_producer = contractor_tab.contractor_id
		where product_id like parameter or product_name like concat('%', parameter, '%') or product_ean=parameter
		order by product_id
        limit setLimit
		offset setOffset;
    end if;
    if (ord=1) then
		select product_id, product_name, contractor_name, product_price, product_number from product_tab
			join contractor_tab on product_tab.product_producer = contractor_tab.contractor_id
		where product_id like parameter or product_name like concat('%', parameter, '%') or product_ean=parameter
		order by product_id desc
        limit setLimit
		offset setOffset;
    end if;
    if (ord=2) then
		select product_id, product_name, contractor_name, product_price, product_number from product_tab
			join contractor_tab on product_tab.product_producer = contractor_tab.contractor_id
		where product_id like parameter or product_name like concat('%', parameter, '%') or product_ean=parameter
		order by product_name
        limit setLimit
		offset setOffset;
    end if;
    if (ord=3) then
		select product_id, product_name, contractor_name, product_price, product_number from product_tab
			join contractor_tab on product_tab.product_producer = contractor_tab.contractor_id
		where product_id like parameter or product_name like concat('%', parameter, '%') or product_ean=parameter
		order by product_name desc
        limit setLimit
		offset setOffset;
    end if;
    if (ord=4) then
		select product_id, product_name, contractor_name, product_price, product_number from product_tab
			join contractor_tab on product_tab.product_producer = contractor_tab.contractor_id
		where product_id like parameter or product_name like concat('%', parameter, '%') or product_ean=parameter
		order by contractor_name
        limit setLimit
		offset setOffset;
    end if;
    if (ord=5) then
		select product_id, product_name, contractor_name, product_price, product_number from product_tab
			join contractor_tab on product_tab.product_producer = contractor_tab.contractor_id
		where product_id like parameter or product_name like concat('%', parameter, '%') or product_ean=parameter
		order by contractor_name desc
        limit setLimit
		offset setOffset;
    end if;
    if (ord=6) then
		select product_id, product_name, contractor_name, product_price, product_number from product_tab
			join contractor_tab on product_tab.product_producer = contractor_tab.contractor_id
		where product_id like parameter or product_name like concat('%', parameter, '%') or product_ean=parameter
		order by product_price
        limit setLimit
		offset setOffset;
    end if;
    if (ord=7) then
		select product_id, product_name, contractor_name, product_price, product_number from product_tab
			join contractor_tab on product_tab.product_producer = contractor_tab.contractor_id
		where product_id like parameter or product_name like concat('%', parameter, '%') or product_ean=parameter
		order by product_price desc
        limit setLimit
		offset setOffset;
    end if;
    if (ord=8) then
		select product_id, product_name, contractor_name, product_price, product_number from product_tab
			join contractor_tab on product_tab.product_producer = contractor_tab.contractor_id
		where product_id like parameter or product_name like concat('%', parameter, '%') or product_ean=parameter
		order by product_number
        limit setLimit
		offset setOffset;
    end if;
    if (ord=9) then
		select product_id, product_name, contractor_name, product_price, product_number from product_tab
			join contractor_tab on product_tab.product_producer = contractor_tab.contractor_id
		where product_id like parameter or product_name like concat('%', parameter, '%') or product_ean=parameter
		order by product_number desc
        limit setLimit
		offset setOffset;
    end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContractors` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `getContractors`(IN pageNo INT, IN ord INT, IN id INT, IN conName varchar(20), IN conCity varchar(20), IN conNIP varchar(20))
BEGIN
	declare setOffset int;
    declare setLimit int;
    set setOffset = (pageNo * 5);
    set setLimit = 5;
    /*
		0 - ORDER BY ID STD
        1 - ORDER BY ID DESC
        2 - ORDER BY NAME STD
        3 - ORDER BY NAME DESC
        4 - ORDER BY CITY STD
        5 - ORDER BY CITY DESC
    */
    /* ORDER BY ID STD */
    if(ord=0)then
		if(id=0)then
			select * from contractor_tab where contractor_name like concat('%',conName,'%') and contractor_city like concat('%',conCity,'%') and replace(contractor_nip,'-', '') like concat('%',replace(conNIP,'-', ''),'%')
			order by contractor_id
			limit setLimit
			offset setOffset;
		end if;
		if(id<>0)then
			select * from contractor_tab where contractor_id=id and contractor_name like concat('%',conName,'%') and contractor_city like concat('%',conCity,'%') and replace(contractor_nip,'-', '') like concat('%',replace(conNIP,'-', ''),'%')
			order by contractor_id
			limit setLimit
			offset setOffset;
		end if;
	end if;
    /* ORDER BY ID DESC */
    if(ord=1)then
		if(id=0)then
			select * from contractor_tab where contractor_name like concat('%',conName,'%') and contractor_city like concat('%',conCity,'%') and replace(contractor_nip,'-', '') like concat('%',replace(conNIP,'-', ''),'%')
			order by contractor_id desc
			limit setLimit
			offset setOffset;
		end if;
		if(id<>0)then
			select * from contractor_tab where contractor_id=id and contractor_name like concat('%',conName,'%') and contractor_city like concat('%',conCity,'%') and replace(contractor_nip,'-', '') like concat('%',replace(conNIP,'-', ''),'%')
			order by contractor_id desc
			limit setLimit
			offset setOffset;
		end if;
	end if;
	/* ORDER BY NAME STD */
    if(ord=2)then
		if(id=0)then
			select * from contractor_tab where contractor_name like concat('%',conName,'%') and contractor_city like concat('%',conCity,'%') and replace(contractor_nip,'-', '') like concat('%',replace(conNIP,'-', ''),'%')
			order by contractor_name COLLATE utf8_polish_ci
			limit setLimit
			offset setOffset;
		end if;
		if(id<>0)then
			select * from contractor_tab where contractor_id=id and contractor_name like concat('%',conName,'%') and contractor_city like concat('%',conCity,'%') and replace(contractor_nip,'-', '') like concat('%',replace(conNIP,'-', ''),'%')
			order by contractor_name COLLATE utf8_polish_ci
			limit setLimit
			offset setOffset;
		end if;
	end if;
    /* ORDER BY NAME DESC */
    if(ord=3)then
		if(id=0)then
			select * from contractor_tab where contractor_name like concat('%',conName,'%') and contractor_city like concat('%',conCity,'%') and replace(contractor_nip,'-', '') like concat('%',replace(conNIP,'-', ''),'%')
			order by contractor_name COLLATE utf8_polish_ci desc
			limit setLimit
			offset setOffset;
		end if;
		if(id<>0)then
			select * from contractor_tab where contractor_id=id and contractor_name like concat('%',conName,'%') and contractor_city like concat('%',conCity,'%') and replace(contractor_nip,'-', '') like concat('%',replace(conNIP,'-', ''),'%')
			order by contractor_name COLLATE utf8_polish_ci desc
			limit setLimit
			offset setOffset;
		end if;
	end if;
    /* ORDER BY CITY STD */
    if(ord=4)then
		if(id=0)then
			select * from contractor_tab where contractor_name like concat('%',conName,'%') and contractor_city like concat('%',conCity,'%') and replace(contractor_nip,'-', '') like concat('%',replace(conNIP,'-', ''),'%')
			order by contractor_city COLLATE utf8_polish_ci
			limit setLimit
			offset setOffset;
		end if;
		if(id<>0)then
			select * from contractor_tab where contractor_id=id and contractor_name like concat('%',conName,'%') and contractor_city like concat('%',conCity,'%') and replace(contractor_nip,'-', '') like concat('%',replace(conNIP,'-', ''),'%')
			order by contractor_city COLLATE utf8_polish_ci
			limit setLimit
			offset setOffset;
		end if;
	end if;
    /* ORDER BY CITY DESC */
    if(ord=5)then
		if(id=0)then
			select * from contractor_tab where contractor_name like concat('%',conName,'%') and contractor_city like concat('%',conCity,'%') and replace(contractor_nip,'-', '') like concat('%',replace(conNIP,'-', ''),'%')
			order by contractor_city COLLATE utf8_polish_ci desc
			limit setLimit
			offset setOffset;
		end if;
		if(id<>0)then
			select * from contractor_tab where contractor_id=id and contractor_name like concat('%',conName,'%') and contractor_city like concat('%',conCity,'%') and replace(contractor_nip,'-', '') like concat('%',replace(conNIP,'-', ''),'%')
			order by contractor_city COLLATE utf8_polish_ci desc
			limit setLimit
			offset setOffset;
		end if;
	end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getDocumentInfo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `getDocumentInfo`(IN docId INT)
BEGIN
	select document_number, document_accept_date, document_type_short, document_year, contractor_id, contractor_name, contractor_postal_code, contractor_city, contractor_street, contractor_nip, contractor_phone, contractor_email from document_tab
    join contractor_tab on document_tab.document_contractor_id=contractor_tab.contractor_id
    join document_type_tab on document_type_tab.document_type_id = document_tab.document_type
    where document_id = docId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getDocumentRecords` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `getDocumentRecords`(IN docId INT(11))
BEGIN
	select document_records_id, document_records_product_id, document_records_product_id, product_name, product_unit_short, product_unit_en, document_records_product_number, document_records_vat, document_records_price, document_records_discount from document_records
    join product_tab on document_records.document_records_product_id = product_tab.product_id
    join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
    where document_records_document_id = docId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getDocuments` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `getDocuments`(IN pageNo int, IN docNo int, IN ord int, IN docType INT, IN docId INT, IN conId int, IN conName varchar(20))
BEGIN
	declare setOffset int;
    declare setLimit int;
    set setOffset = (pageNo * 15);
    set setLimit = 15;
    /*
    document_contractor_id, contractor_name
    ORDER LIST:
    0-DOC ID STD
    1-DOC ID DESC
    2-DOC NO STD
    3-DOC NO DESC
    4-DOC DATE STD
    5-DOC DATE DESC
    6-DOC DATE ACC STD
    7-DOC DATE ACC DESC
    8-CON ID STD
    9-CON ID DESC
    10-CON NAME STD
    11-CON NAME DESC
    */
if(docNo = 0) then
/*-----------------------------------------ORDER BY ID STD-----------------------------------------*/
    if(ord=0)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_id
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_id
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_id
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_id
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY ID DESC-----------------------------------------*/
    if(ord=1)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_id desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_id desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_id desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_id desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY NO STD-----------------------------------------*/
    if(ord=2)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_number
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_number
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_number
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_number
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY NO DESC-----------------------------------------*/
    if(ord=3)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_number desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_number desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_number desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_number desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY DATE STD-----------------------------------------*/
    if(ord=4)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_date
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_date
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_date
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_date
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY DATE DESC-----------------------------------------*/
    if(ord=5)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_date desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_date desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_date desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_date desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY ACC DATE STD-----------------------------------------*/
    if(ord=6)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_accept_date
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_accept_date
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_accept_date
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_accept_date
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY ACC DATE DESC-----------------------------------------*/
    if(ord=7)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_accept_date desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_accept_date desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_accept_date desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_accept_date desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY CON ID STD-----------------------------------------*/
    if(ord=8)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_contractor_id
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_contractor_id
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_contractor_id
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_contractor_id
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY CON ID DESC-----------------------------------------*/
    if(ord=9)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_contractor_id desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_contractor_id desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_contractor_id desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_contractor_id desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY CON NAME STD-----------------------------------------*/
    if(ord=10)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_name like concat('%',conName,'%')
				order by contractor_name
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by contractor_name
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by contractor_name
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by contractor_name
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY CON NAME DESC-----------------------------------------*/
    if(ord=11)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_name like concat('%',conName,'%')
				order by contractor_name desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by contractor_name desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by contractor_name desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by contractor_name desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
end if;
if(docNo<>0)then
/*-----------------------------------------ORDER BY ID STD-----------------------------------------*/
    if(ord=0)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_id
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_id
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_id
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_id
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY ID DESC-----------------------------------------*/
    if(ord=1)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_id desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_id desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_id desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_id desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY NO STD-----------------------------------------*/
    if(ord=2)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_number
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_number
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_number
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_number
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY NO DESC-----------------------------------------*/
    if(ord=3)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_number desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_number desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_number desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_number desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY DATE STD-----------------------------------------*/
    if(ord=4)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_date
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_date
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_date
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_date
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY DATE DESC-----------------------------------------*/
    if(ord=5)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_date desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_date desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_date desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_date desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY ACC DATE STD-----------------------------------------*/
    if(ord=6)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_accept_date
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_accept_date
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_accept_date
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_accept_date
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY ACC DATE DESC-----------------------------------------*/
    if(ord=7)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_accept_date desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_accept_date desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_accept_date desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_accept_date desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY CON ID STD-----------------------------------------*/
    if(ord=8)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_contractor_id
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_contractor_id
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_contractor_id
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_contractor_id
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY CON ID DESC-----------------------------------------*/
    if(ord=9)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_name like concat('%',conName,'%')
				order by document_contractor_id desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_contractor_id desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by document_contractor_id desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by document_contractor_id desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY CON NAME STD-----------------------------------------*/
    if(ord=10)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_name like concat('%',conName,'%')
				order by contractor_name
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by contractor_name
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by contractor_name
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by contractor_name
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
/*-----------------------------------------ORDER BY CON NAME DESC-----------------------------------------*/
    if(ord=11)then
		if(conId=0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_name like concat('%',conName,'%')
				order by contractor_name desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and document_id=docId and contractor_name like concat('%',conName,'%')
				order by contractor_name desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
		if(conId<>0)then
			if(docId=0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and contractor_name like concat('%',conName,'%')
				order by contractor_name desc
                limit setLimit
				offset setOffset;
			end if;
			if(docId<>0)then
				select document_id, document_number, document_year, document_type_short, document_date, document_accept_date, document_contractor_id, contractor_name, user_fname, user_lname from document_tab
				join contractor_tab on document_tab.document_contractor_id = contractor_tab.contractor_id
				join document_type_tab on document_tab.document_type = document_type_tab.document_type_id
                join user_tab on document_tab.document_creator = user_tab.user_id
				where document_number = docNo and document_type = docType and contractor_id=conId and document_id=docId and contractor_name like concat('%',conName,'%')
				order by contractor_name desc
                limit setLimit
				offset setOffset;
			end if;
		end if;
	end if;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProducers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `getProducers`()
BEGIN
	select contractor_id, contractor_name from contractor_tab;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProductDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `getProductDetails`(IN parameter varchar(20))
BEGIN
	select product_id, product_name, contractor_name, product_price, product_number, vat_value, product_unit_short, product_divider
    from product_tab
    join contractor_tab on contractor_tab.contractor_id = product_tab.product_producer
    join vat_tab on vat_tab.vat_id = product_tab.product_vat
    join product_unit_tab on product_unit_tab.product_unit_id = product_tab.product_unit
    where product_id like parameter or product_name like concat('%', parameter, '%') or product_ean=parameter
    limit 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProductDetailsById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `getProductDetailsById`(IN parameter varchar(20))
BEGIN
	select product_id, product_name, contractor_name, product_price, product_number, vat_value, product_unit_short, product_divider
    from product_tab
    join contractor_tab on contractor_tab.contractor_id = product_tab.product_producer
    join vat_tab on vat_tab.vat_id = product_tab.product_vat
    join product_unit_tab on product_unit_tab.product_unit_id = product_tab.product_unit
    where product_id = parameter
    limit 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProducts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `getProducts`(IN pageNo int,IN ord Int,IN noMin float,IN noMax float, IN  minPrice float,IN  maxPrice float,IN  id int,IN  prodName varchar(50))
BEGIN
	declare setOffset int;
    declare setLimit int;
    set setOffset = (pageNo * 15);
    set setLimit = 15;
    /*
    ord 0 - id std;
    ord 1 - id desc;
    ord 2 - name std;
    ord 3 - name desc;
    ord 4 - price std;
    ord 5 - price desc;
    ord 6 - no std;
    ord 7 - no decs;
    */
    
    /*ORDER BY ID*/
    if(ord=0)then
		if (id = 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
			from product_tab
				join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
				join vat_tab on product_tab.product_vat =  vat_tab.vat_id
				join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
				join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
				join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
				order by product_id
                limit setLimit
				offset setOffset;
		end if;
		if (id != 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
					from product_tab
						join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
						join vat_tab on product_tab.product_vat =  vat_tab.vat_id
						join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
						join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
						join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
						order by product_id
                        limit setLimit
						offset setOffset;
		end if;
    end if;
    if(ord = 1) then
		if (id = 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
			from product_tab
				join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
				join vat_tab on product_tab.product_vat =  vat_tab.vat_id
				join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
				join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
				join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
				order by product_id desc
                limit setLimit
				offset setOffset;
		end if;
		if (id != 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
					from product_tab
						join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
						join vat_tab on product_tab.product_vat =  vat_tab.vat_id
						join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
						join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
						join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
						order by product_id desc
                        limit setLimit
						offset setOffset;
		end if;
	end if;
    /*ORDER BY NAME*/
    if(ord=2)then
		if (id = 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
			from product_tab
				join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
				join vat_tab on product_tab.product_vat =  vat_tab.vat_id
				join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
				join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
				join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
				order by product_name
                limit setLimit
				offset setOffset;
		end if;
		if (id != 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
					from product_tab
						join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
						join vat_tab on product_tab.product_vat =  vat_tab.vat_id
						join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
						join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
						join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
						order by product_name
                        limit setLimit
						offset setOffset;
		end if;
    end if;
    if(ord=3)then
		if (id = 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
			from product_tab
				join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
				join vat_tab on product_tab.product_vat =  vat_tab.vat_id
				join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
				join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
				join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
				order by product_name desc
                limit setLimit
				offset setOffset;
		end if;
		if (id != 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
					from product_tab
						join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
						join vat_tab on product_tab.product_vat =  vat_tab.vat_id
						join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
						join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
						join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
						order by product_name desc
                        limit setLimit
						offset setOffset;
		end if;
    end if;
    /*ORDER BY PRICE*/
    if(ord=4)then
		if (id = 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
			from product_tab
				join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
				join vat_tab on product_tab.product_vat =  vat_tab.vat_id
				join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
				join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
				join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
				order by product_price
                limit setLimit
				offset setOffset;
		end if;
		if (id != 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
					from product_tab
						join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
						join vat_tab on product_tab.product_vat =  vat_tab.vat_id
						join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
						join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
						join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
						order by product_price
                        limit setLimit
						offset setOffset;
		end if;
    end if;
    if(ord=5)then
		if (id = 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
			from product_tab
				join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
				join vat_tab on product_tab.product_vat =  vat_tab.vat_id
				join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
				join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
				join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
				order by product_price desc
                limit setLimit
				offset setOffset;
		end if;
		if (id != 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
					from product_tab
						join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
						join vat_tab on product_tab.product_vat =  vat_tab.vat_id
						join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
						join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
						join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
						order by product_price desc
                        limit setLimit
						offset setOffset;
		end if;
    end if;
    /*ORDER BY NO*/
    if(ord=6)then
		if (id = 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
			from product_tab
				join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
				join vat_tab on product_tab.product_vat =  vat_tab.vat_id
				join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
				join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
				join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
				order by product_number
                limit setLimit
				offset setOffset;
		end if;
		if (id != 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
					from product_tab
						join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
						join vat_tab on product_tab.product_vat =  vat_tab.vat_id
						join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
						join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
						join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
						order by product_number
                        limit setLimit
						offset setOffset;
		end if;
    end if;
    if(ord=7)then
		if (id = 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
			from product_tab
				join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
				join vat_tab on product_tab.product_vat =  vat_tab.vat_id
				join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
				join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
				join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
				where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%')
				order by product_number desc
                limit setLimit
				offset setOffset;
		end if;
		if (id != 0) then
			select product_id, product_name, contractor_name, product_number, product_price, vat_value, product_group_name, product_status_name, product_unit_short
					from product_tab
						join contractor_tab on product_tab.product_producer =  contractor_tab.contractor_id
						join vat_tab on product_tab.product_vat =  vat_tab.vat_id
						join product_group_tab on product_tab.product_group =  product_group_tab.product_group_id
						join product_status_tab on product_tab.product_status = product_status_tab.product_status_id
						join product_unit_tab on product_tab.product_unit = product_unit_tab.product_unit_id
						where product_price >= minPrice and product_price <= maxPrice and product_number >= noMin and product_number <= noMax and product_name like CONCAT('%',prodName,'%') and product_id=id
						order by product_number desc
                        limit setLimit
						offset setOffset;
		end if;
    end if;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProductsGroups` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `getProductsGroups`()
BEGIN
	select product_group_id, product_group_name, product_group_short from product_group_tab;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProductsUnits` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `getProductsUnits`()
BEGIN
	select product_unit_id, product_unit_name, product_unit_short, product_unit_en from product_unit_tab;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProductsVat` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `getProductsVat`()
BEGIN
	select vat_id, vat_value from vat_tab;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getRecordDetailByRecordId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `getRecordDetailByRecordId`(IN recId INT)
BEGIN
	select product_id, product_name, contractor_name, product_price, product_number, vat_value, product_unit_short, product_divider, document_records_product_number, document_records_discount
    from product_tab 
    join contractor_tab on contractor_tab.contractor_id = product_tab.product_producer
    join vat_tab on vat_tab.vat_id = product_tab.product_vat
    join product_unit_tab on product_unit_tab.product_unit_id = product_tab.product_unit
    join document_records on document_records.document_records_product_id = product_tab.product_id
    where document_records_id = recId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getUserCompany` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `getUserCompany`(IN userId INT)
BEGIN
	select contractor_id, contractor_name, contractor_postal_code, contractor_city, contractor_street, contractor_nip, contractor_phone, contractor_email from contractor_tab
    join user_tab on contractor_tab.contractor_id=user_tab.user_company
    where user_id = userId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getVatsFromDocument` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`marek`@`%` PROCEDURE `getVatsFromDocument`(IN docId INT)
BEGIN
	select document_records_vat, document_records_product_number, sum(document_records_price) as 'value_sum' from document_records where document_records_document_id=docId group by document_records_vat; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-21 22:33:04
