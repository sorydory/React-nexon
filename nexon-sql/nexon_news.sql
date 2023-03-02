-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: nexon
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `n_no` int NOT NULL,
  `n_title` varchar(45) NOT NULL,
  `n_date` varchar(45) NOT NULL,
  `n_titledesc` varchar(45) NOT NULL,
  `n_desc` varchar(500) NOT NULL,
  `n_image` varchar(45) NOT NULL,
  `n_category` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`n_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'넥슨게임즈','2023.02.06','넥슨게임즈, 그룹내 존재감 \'재부각','최근 넥슨 그룹 내에서 넥슨게임즈의 존재감이 재부각되고 있다. 기존 작품이 흥행 역주행을 보이고 있는 ...','main_news1.jpg','news'),(2,'넥슨게임즈','2023.02.03','넥슨게임즈, 넥슨의 미래 책임지는 신엔진 역할 \'톡톡’','최근 넥슨의 서브컬처 게임 ‘블루 아카이브’가 한국과 일본에서 역주행에 성공하는 등 새로운 글로벌 대표 IP로 ...','main_news2.jpg','news'),(3,'넥슨게임즈','2023.02.02','넥슨게임즈, 2023년 전직군 300여명 수시채용...개발 경쟁력 강화','넥슨게임즈가 올해 300여명 규모 채용을 진행한다. 인재 확보를 통해 신작 개발과 글로벌 시장 진출에 박차를 가...','main_news3.jpg','news');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-02 17:33:56
