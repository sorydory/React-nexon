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
  PRIMARY KEY (`n_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'넥슨게임즈','2023.02.02','넥슨게임즈, 2023년 전직군 300여명 수시채용...개발 경쟁력 강화','넥슨게임즈가 올해 300여명 규모 채용을 진행한다. 인재 확보를 통해 신작 개발과 글로벌 시장 진출에 박차를 가하겠다는 포석이다.넥슨게임즈는 루트슈터 게임 \'퍼스트 디센던트\', 3인칭슈팅(…','upload/news/main_news1.jpg'),(2,'블루 아카이브','2023.01.27','[칼럼]김용하 총괄 PD를 만나고, \'블루 아카이브\' 애니메이션화 확정에…','설 연휴 사이에 \'블루 아카이브\' 유저들에게 매우 기쁜 소식이 전해졌다. 일본에서 \'블루 아카이브\'가 애니메이션으로 제작된다는 것.','upload/news/main_news2.jpg'),(3,'블루 아카이브','2023.01.25','벌써 2주년, 일본 점령한 \'블루 아카이브\'의 \'문화적 확장\'','\'서브컬처 본고장\' 일본에서 한국 서브컬처 게임이 정상급 반열에 올랐다. 문화의 감성을 이해하고 진심으로 퀄리티를 쌓아올린 끝에 낳은 결실이다.','upload/news/main_news3.jpg');
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

-- Dump completed on 2023-03-06 17:31:51
