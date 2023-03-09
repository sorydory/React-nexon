-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: nexon
-- ------------------------------------------------------
-- Server version	8.0.31

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
  `n_no` int NOT NULL AUTO_INCREMENT,
  `n_title` varchar(45) NOT NULL,
  `n_date` varchar(45) NOT NULL,
  `n_titledesc` varchar(45) NOT NULL,
  `n_desc` varchar(500) NOT NULL,
  `n_image` varchar(45) NOT NULL,
  `n_category` varchar(45) NOT NULL,
  PRIMARY KEY (`n_no`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'넥슨게임즈','2023.02.02','넥슨게임즈, 2023년 전직군 300여명 수시채용...개발 경쟁력 강화','넥슨게임즈가 올해 300여명 규모 채용을 진행한다. 인재 확보를 통해 신작 개발과 글로벌 시장 진출에 박차를 가하겠다는 포석이다.넥슨게임즈는 루트슈터 게임 \'퍼스트 디센던트\', 3인칭슈팅(…','nexongames_news1.jpg','넥슨게임즈'),(2,'블루 아카이브','2023.01.27','[칼럼]김용하 총괄 PD를 만나고, \'블루 아카이브\' 애니메이션화 확정에…','설 연휴 사이에 \'블루 아카이브\' 유저들에게 매우 기쁜 소식이 전해졌다. 일본에서 \'블루 아카이브\'가 애니메이션으로 제작된다는 것.','blue_news1.jpg','블루아카이브'),(3,'블루 아카이브','2023.01.25','벌써 2주년, 일본 점령한 \'블루 아카이브\'의 \'문화적 확장\'','\'서브컬처 본고장\' 일본에서 한국 서브컬처 게임이 정상급 반열에 올랐다. 문화의 감성을 이해하고 진심으로 퀄리티를 쌓아올린 끝에 낳은 결실이다.','blue_news2.jpg','블루아카이브'),(4,'넥슨게임즈','2023.02.23','출범 2년차 넥슨게임즈, 라이브게임 강세·신작 3종 무장','올해 출범 2년 차를 맞은 넥슨게임즈가 대형 신작 3종을 앞세워 본격적인 사세 키우기에 나선다. 넥슨게임즈는 올...','nexongames_news2.jpg','넥슨게임즈'),(5,'서든어택','2023.02.23','\'SA 쉴드 가동\' 유저 마음 사로잡은 서든어택의 내실 다지기','서든어택이 캐주얼한 게임성을 기반으로 FPS 장르 1위를 고수하는 가운데..','sudden_news1.png','서든어택'),(6,'서든어택','2023.03.02','넥슨 \'서든어택\', PC방서 최고 FPS 게임 굳히기 들어가나','넥슨에서 서비스 중인 \'서든어택\'이 PC방 순위에서 FPS...','sudden_news2.jpg','서든어택'),(7,'베일드 엑스퍼트','2023.01.19','“베일드 엑스퍼트, 지형지물 이용한 전략 게임”','넥슨게임즈는 PC 슈팅 게임 ‘베일드 엑스퍼트(VEILED EXPERTS)’의 개발자 라이브 방송을 19일 진행...','veiled_news1.jpg','베일드엑스퍼트'),(8,'베일드 엑스퍼트','2023.01.04','\"‘3월 파이널 베타\"... 베일드 엑스퍼트, 이렇게 바뀐다','넥슨게임즈의 신작 PC 슈팅 게임 ‘베일드 엑스퍼트(이하 VX)’가 3월 파이널 베타 테스트를 준비 중이다.&n...','veiled_news2.jpg','베일드엑스퍼트'),(9,'히트2','2022.12.29','[소통과 이름의 무게 ①] \'히트2\' 박영식 PD \"히트투나잇을 마치며...\"','올 한 해를 장식한 키워드 가운데, 게임 업계를 관통한 단어 중 하나는 바로 ‘소통’입니다. 엄밀히 말...','hit_news1.png','히트2'),(10,'히트2','2022.12.29','넥슨 ‘히트2’, 성공적 흥행 이어갈 콘텐츠는 무엇','넥슨의 ‘히트2’는 올해 가장 성공적인 데뷔작을 치른&nb...','hit_news2.png','히트2'),(11,'블루 아카이브','2023.03.03','\'블루 아카이브\' 김용하 PD \"서브컬처 저변 넓히는 게임 되겠다\"','\"서브컬처 게임의 발상지이자 유명한 IP가 즐비한 일본 시장에서도 성공할 수 있는 게임을 보여 주자고 다짐하며 ...','blue_news3.jpg','블루아카이브'),(12,'블루 아카이브','2023.02.27','넥슨 ‘블루 아카이브’ 한·일 서브컬처 시장서 인기몰이','넥슨의 서브컬처 RPG ‘블루 아카이브’가 올해 다양한 업데이트와 이벤트로 한국과 일본 게임시장에서 흥행하고 있...','blue_news4.png','블루아카이브'),(13,'넥슨게임즈','2023.02.09','넥슨게임즈, 출범 첫해 ‘흑자전환’ 성공…매출 110% 증가','넥슨게임즈가 합병 효과에 신작 ‘히트2’의 성공적인 안착, ‘블루 아카이브’ 등 라이브 게임의 견조한 성과에 힘...','nexongames_news3.jpg','넥슨게임즈'),(14,'넥슨게임즈','2023.02.08','게임업계 한파에도…넥슨게임즈, 몸집 더 불린다','넥슨게임즈가 공격적 채용으로 개발인력 확보에 나선다. 시장에서는 넥슨게임즈가 출범 이후 처음으로 신규 ...','nexongames_news4.png','넥슨게임즈'),(15,'베일드 엑스퍼트','2022.12.16','이용자 비평에 자기 색깔 찾아가는 ‘두 K-FPS 도전자’','현재 슈팅게임 시장에는 ‘발로란트’, ‘에이펙스 레전드’, ‘배틀그라운드’, ‘레인보우식스: 시즈’ 등 걸출한 ...','veiled_news3.jpg','베일드엑스퍼트'),(16,'베일드 엑스퍼트','2022.11.21','넥슨 \'베일드 엑스퍼트\' 개발자 스트리밍 통해 향후 개발 방향성 공개','넥슨의 신작 PC 슈팅 게임 ‘베일드 엑스퍼트’의 개발자 스트리밍 방송이 11월 10일 오후 6시부터 공식 유튜...','veiled_news4.jpg','베일드엑스퍼트'),(17,'히트2','2022.12.19','유저 요청 100% 수용 선언한 히트2','\"에픽테일2 첫 번째 에피소드 \'풍요의 엘테라\'로 히트2의 두 번째 막이 시작된다. 주목해야 할 요소는 신규 종...','hit_news3.jpg','히트2'),(18,'히트2','2022.12.15','히트2, 간담회 앞두고 유저 부담 대폭 덜어내','넥슨의 ‘히트2’가 첫 번째 오프라인 간담회를 앞두고 유저들의 부담을 낮추는 패치를 진행했다. 히트2는...','hit_news4.jpg','히트2'),(19,'서든어택','2023.03.05','2023년, 서든어택 김태현 디렉터가 지키려는 가치','<서든어택>은 2023년에도 계속 달린다. 새해를 맞이해 <서든어택>..','sudden_news3.jpg','서든어택'),(20,'서든어택','2023.03.09','넥슨 대표 장수게임 ‘서든어택’, FPS 1위 탈환…','\'서든어택\'은 여전한 인기를 유지하며 FPS 점유율 1위(1월 1주차, 5.82%)를..','sudden_news4.jpg','서든어택');
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

-- Dump completed on 2023-03-10  1:22:18
