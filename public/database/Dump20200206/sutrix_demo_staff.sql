-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: sutrix_demo
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `staff_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `address` varchar(300) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `skype` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0: Female, 1: Male, 2: Other',
  `department_staff` varchar(250) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `join_date` date NOT NULL,
  `DoB` date NOT NULL,
  PRIMARY KEY (`staff_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (11,'Nguyen','Hung','433 Dien Bien Phu','0935533819','hungnguyenthanh311291@gmail.com','hungnguyenthanh311291@gmail.com',2,'Java','image/logo192.png','2019-02-13','2020-02-04'),(12,'Nguyen','Hung','433 Dien Bien Phu','0935533819','hungnguyenthanh311291@gmail.com','hungnguyenthanh311291@gmail.com',1,'Fontend','image/nu2.jpg','2020-02-08','1991-05-01'),(13,'Lona','Hung','433 Dien Bien Phu','0935533819','hungnguyenthanh311291@gmail.com','hungnguyenthanh311291@gmail.com',1,'QC','image/nu1.jpg','2019-02-13','1991-01-12'),(14,'Nguyen','Hung','433 Dien Bien Phu','0935533819','hungnguyenthanh311291@gmail.com','hungnguyenthanh311291@gmail.com',2,'Backend','image/nam1.jpg','2009-04-08','1991-04-05'),(15,'Nguyen','Hung','chung cu 537 Pham Van Dong','0935533819','hungnguyenthanh311291@gmail.com','hungnguyenthanh311291@gmail.com',2,'QC','image/nam2.jpg','2020-02-08','2020-02-04'),(16,'Linh','Nguyen','433 Dien Bien Phu','0935533819','Hung@gmail.com','hungnguyenthanh311291@gmail.com',1,'BA','image/nam2.jpg','2019-02-13','2020-02-03');
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-06 18:06:41
