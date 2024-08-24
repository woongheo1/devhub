# 🛒DEHUV-SURVER
💬 Manage Configuration Easily with Us To Improve Your Project 

프로젝트를 개선하기 위해 우리와 함께 쉽게 구성을 관리를 할수있게 만든 프로젝트



## 팀원 구성


| **김동규** | **김영식** | **김진서** | **장태현** | **허웅** |
| :------: |  :------: | :------: | :------: | :------: |
| [<img src="https://github.com/woongheo1/devhub/blob/main/teamImages/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%80%E1%85%B2.png" height=150 width=150> <br/> @dongkyukim1](https://github.com/dongkyukim1) | [<img src="https://github.com/woongheo1/devhub/blob/main/teamImages/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8.png" height=150 width=150> <br/> @youngsik](https://github.com/zeroway3) | [<img src="https://github.com/woongheo1/devhub/blob/main/teamImages/%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A5.png" height=150 width=150> <br/> @jins0113](https://github.com/jins0113) | [<img src="https://github.com/woongheo1/devhub/blob/main/teamImages/%E1%84%90%E1%85%A2%E1%84%92%E1%85%A7%E1%86%AB.png" height=150 width=150> <br/> @TaeHyeon](https://github.com/xogus3492) | [<img src="https://github.com/woongheo1/devhub/blob/main/teamImages/%E1%84%8B%E1%85%AE%E1%86%BC.png" height=150 width=150> <br/> @woong](https://github.com/woongheo1)



### 💻프로젝트 개요
- [x] [💿서비스 시연 영상](#서비스-시연-영상)
- [x] [🎯서비스 핵심기능](#서비스-핵심기능)
- [x] [🛠기술 스택](#기술-스택)
- [x] [✨기술적 의사결정](#기술적-의사결정)
- [x] [🚧시스템 아키텍처](#시스템-아키텍처)
- [x] [📖ERD](#erd)
- [x] [노션](https://fluorescent-catsup-020.notion.site/Project-Management-3419363d672746dfb94ecf8838b13a2a?pvs=4)

<hr/>

### 💿서비스 시연 영상
<hr/>

### 🎯서비스 핵심기능
```
👨‍👨‍👧 회원 : 로그인 | 로그아웃 | 회원가입 | 이메일 인증 | 소셜 로그인(구글) 
🏡 나의프로젝트 : 저장소 이름 | 간단한 저장소 설명 | 수정 | 삭제
🏡 팀 프로젝트 :  프로젝트 만들기 | 프로젝트 목록 | 프로젝트 참가 | 팀원초대 | 레포지토리 생성 | 코드 리뷰
💰 쪽지 보내기 : 받는 사람의 이메일 | 팀 레포지토리 URL | 메세지 내용
💰 쪽지함 : 받은 쪽지함 | 보낸 쪽지함
🚧 AI 도우미 :  자동화된 작업처리 | 대화내역 저장  
📈 팀원구하기 : 게시판목록 | 게시판생성 | 게시판수정 | 게시판삭제 | 내게시판 조회
🏠 마이 페이지 : 비빌번호 변경 | 프로필 사진 변경 | 진행 사항조절 | 기록 | 팀목록 | 게시글 기록 | 쪽지함 | 결제 내역
```
<details>
<summary>핵심기능 #1. 이메일 발송</summary>
 
![fuction001](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%B3%E1%86%BC.png)
- [x] `JavaMailSender`를 이용해 이메일 인증 및 임시 비밀번호 발송 기능을 구현하였습니다.
- [x] 휘발성 데이터인 이메일 인증 토큰의 경우 인메모리(In-Memory) 형태에 TTL(Time to Live) 특성을 지녀 유효기간이 설정된 `Redis` 기반의 Refresh Token으로 관리합니다. 사용자는 전송된 링크를 눌러 재접속하는 것만으로 이메일 인증을 완료할 수 있습니다.
</details>

<details>
<summary>핵심기능 #2. 구글 로그인</summary>

- [x] 일반 로그인의 경우 회원가입 양식 작성 후 이메일 인증을 거쳐야 하는 반면, 구글 로그인한 회원은 `해당 계정에서 불러온 이름 및 이메일 정보가 연동`돼 입력란을 채우며 나아가 별도의 이메일 인증 없이 곧바로 이용이 가능합니다.
</details>

<details>
<summary>핵심기능 #3. 쪽지 기능</summary>

- [x] 발신자가 쪽지를 발송 (수신자 이메일 존재 여부 확인)
- [x] 발신한 쪽지를 확인할 수 있는 보낸 쪽지함 기능
- [x] 수신한 쪽지를 확인할 수 있는 받은 쪽지함 기능 (읽지 않은 쪽지 개수 확인 포함)
- [x] 쪽지를 읽을 시 쪽지함에 읽음 표시 기능 
</details>
<details>
<summary>핵심기능 #4. ai 서비스</summary>
 
- [x] 웹사이트 방문자와  소통할 수 있는 무료 채팅 소프트웨어.
</details>
<details>
 
<summary>핵심기능 #5. 게시글 작성</summary>
 
- [x] 로컬 스토리지에 저장된 JWT 토큰을 사용하여 API로부터 작성자 정보를 가져와, `작성자 필드를 자동으로 채우고 읽기 전용`으로 설정한다.
</details>

<details>
<summary>핵심기능 #6. 나의 프로젝트</summary>

- [x] 자동 저장소 생성: 사용자로부터 저장소 이름과 설명을 입력받아 자동으로 개인 저장소를 생성합니다.
  
  - **질문 시퀀스**: 사용자에게 순차적으로 질문을 표시하여 입력을 유도합니다.
    
  - **입력 검증**: 입력된 내용이 유효한지 확인하고, 유효하지 않으면 시각적 피드백을 제공합니다.
    
  - **API 호출 및 리디렉션**: 입력이 완료되면 API를 통해 저장소를 생성하고, 성공 시 프로젝트 리스트 페이지로 자동 리디렉션됩니다.

</details>



<details>
<summary>핵심기능 #7. 팀 프로젝트</summary>

- [x] 사이드바 토글: 사용자는 사이드바를 손쉽게 열고 닫을 수 있습니다.
 
- [x] 로그아웃 기능: 사용자가 로그아웃할 때 서버와 통신하여 세션을 종료하고, 메인 페이지로 리디렉션합니다.
 
- [x] 사용자 정보 로딩: 로그인된 사용자의 정보를 API로 가져와 화면에 표시합니다.
  
- [x] 프로젝트 관리:
   
  - 개인 프로젝트 목록을 불러와 화면에 표시
    
  - 프로젝트 수정 및 삭제 기능 제공
    
  - 프로젝트 클릭 시 세부 정보 페이지로 이동

</details>
<details>
<summary>핵심기능 #8. 휴지통 이동</summary>

- [x]  팀/레포제포리 삭제 시 `휴지통`에 저장돼 `10일의 복구기한`이 주어지고, 자동 삭제됩니다.
- [x] 임의로 이동되는 경우에 대비하여 `삭제파일`를 명시하며, 관리자는 기한 내 이를 복구할 수 있는 권한이 있습니다.
</details>

|<small>회원가입</small>|<small>로그인<small>|<small>영어로변경</small>|
|:-:|:-:|:-:|
|![003](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%20%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.gif)|![004](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB.gif)|![005](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%E1%84%87%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC.gif)|
|<small><b>소셜로그인(구글)</b></small>|<small><b>나의프로젝트 생성</b></small>|<small><b>나의프로젝트 수정</b></small>|
|![006](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%80%E1%85%AE%E1%84%80%E1%85%B3%E1%86%AF%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB.gif)|![007](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%80%E1%85%A2%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%E1%84%89%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC.gif)|![008](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%80%E1%85%A2%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.gif)|
|<small><b>나의프로젝트 삭제</b></small>|<small><b>쪽지 보내기</b></small>|<small><b>쪽지함</b></small>|
|![006](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%80%E1%85%A2%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%E1%84%89%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%A6.gif)|![007](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%8D%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%B5%E1%84%87%E1%85%A9%E1%84%82%E1%85%A2%E1%84%80%E1%85%B5.gif)|![008](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%8D%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A1%E1%86%B7.gif)|
|<small><b>쪽지 삭제</b></small>|<small><b>나의프로젝트 목록</b></small>|<small><b>로그아웃</b></small>|
|![009](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%8D%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%B5%E1%84%89%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%A6.gif)|![010](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%80%E1%85%A2%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%86%E1%85%A9%E1%86%A8%E1%84%85%E1%85%A9%E1%86%A8.gif)|![011](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%BA.gif)|
|<small><b>게시글 생성</b></small>|<small><b>게시글 상세보기</b></small>|<small><b>게시글 수정</b></small>|
|![012](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%80%E1%85%A6%E1%84%89%E1%85%B5%E1%84%80%E1%85%B3%E1%86%AF%20%E1%84%89%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC.gif)|![013](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%80%E1%85%A6%E1%84%89%E1%85%B5%E1%84%80%E1%85%B3%E1%86%AF%20%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6%E1%84%87%E1%85%A9%E1%84%80%E1%85%B5.gif)|![014](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%80%E1%85%A6%E1%84%89%E1%85%B5%E1%84%80%E1%85%B3%E1%86%AF%20%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.gif)|
|<small><b>게시글 삭제</b></small>|<small><b>게시글 검색</b></small>|<small><b>내 게시글 목록</b></small>
| ![015](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%80%E1%85%A6%E1%84%89%E1%85%B5%E1%84%80%E1%85%B3%E1%86%AF%20%E1%84%89%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%A6.gif) | ![016](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%80%E1%85%A6%E1%84%89%E1%85%B5%E1%84%80%E1%85%B3%E1%86%AF%20%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8.gif) | ![017](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%82%E1%85%A2%20%E1%84%80%E1%85%A6%E1%84%89%E1%85%B5%E1%84%80%E1%85%B3%E1%86%AF%20%E1%84%86%E1%85%A9%E1%86%A8%E1%84%85%E1%85%A9%E1%86%A8.gif) |
|<small><b>팀만들기</b></small>|<small><b>팀목록</b></small>|<small><b>프로젝트 참가<b></small>|
![018](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%90%E1%85%B5%E1%86%B7%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%89%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC%20%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.gif)|![019](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%90%E1%85%B5%E1%86%B7%20%E1%84%86%E1%85%A9%E1%86%A8%E1%84%85%E1%85%A9%E1%86%A8%20%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.gif)|![020](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%8E%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1.gif)|
|<small><b>팀설정</b></small>|<small><b>팀원 초대</b></small>|<small><b>휴지통(복구,삭제)</b></small>|
|![023](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%90%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC.gif)|![024](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%90%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8E%E1%85%A9%E1%84%83%E1%85%A2.gif)|![025](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%92%E1%85%B2%E1%84%8C%E1%85%B5%E1%84%90%E1%85%A9%E1%86%BC.gif)|
|<small><b>프로젝트 삭제 내역</b></small>|<small><b>환영 페이지</b></small>|<small><b>새 레포 만들기</b></small>|
![001](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%89%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%A6%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%A8.gif)|![026](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%92%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5.gif)|![027](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%89%E1%85%A2%20%E1%84%85%E1%85%A6%E1%84%91%E1%85%A9%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5.gif)
|<small><b>ai 코드 리뷰</b></small>|<small><b>코드 검색</b></small>|<small><b>레포지토리 기능</b></small>|
![1](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%20%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8.gif)|![2](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8.gif)|![3](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%85%E1%85%A6%E1%84%91%E1%85%A9%E1%84%8C%E1%85%B5%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5%20%E1%84%80%E1%85%B5%E1%84%82%E1%85%B3%E1%86%BC.gif)
|<small><b>도움말</b></small>|<small><b>팀원초대</b></small>|<small><b></b>쪽지함</small>|
![4](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%83%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%B7%E1%84%86%E1%85%A1%E1%86%AF.gif)|![5](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%86%E1%85%A2%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%90%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8E%E1%85%A9%E1%84%83%E1%85%A2.gif)|![5](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8D%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A1%E1%86%B7.gif)
|<small>쪽지함 삭제<b></b></small>|<small>결제<b></b></small>|<small><b>해외결제</b></small>|
|![028](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%8D%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A1%E1%86%B7%20%E1%84%89%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%A6.gif)|![021](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%80%E1%85%A7%E1%86%AF%E1%84%8C%E1%85%A6.gif)|![022](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%92%E1%85%A2%E1%84%8B%E1%85%AC%E1%84%80%E1%85%A7%E1%86%AF%E1%84%8C%E1%85%A6.gif)|
|<small><b>AI 서비스</b></small>|<small><b>마이 페이지</b></small>|<small><b>프로필사진 변경</b></small>|
|![029](https://github.com/woongheo1/devhub/blob/main/images/ai%20%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3.gif)|![030](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%86%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5.gif)|![031](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC.gif)|
|<small><b>비밀번호 번경</b></small>|<small><b>진행사항 조절</b></small>|<small><b>기록</b></small>|
|![032](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%87%E1%85%B5%E1%84%86%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A5%E1%86%AB%E1%84%92%E1%85%A9%20%E1%84%87%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC.gif)|![033](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%92%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AF.gif)|![034](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8.gif)|
|<small><b>팀 목록</b></small>|<small><b>게시글 기록</b></small>|<small><b>활동</b></small>|
|![035](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%90%E1%85%B5%E1%86%B7%E1%84%86%E1%85%A9%E1%86%A8%E1%84%85%E1%85%A9%E1%86%A8.gif)|![036](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%80%E1%85%A6%E1%84%89%E1%85%B5%E1%84%80%E1%85%B3%E1%86%AF%20%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8.gif)|![037](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%92%E1%85%AA%E1%86%AF%E1%84%83%E1%85%A9%E1%86%BC.gif)|
|<small><b>결제</b></small>|<small><b>홈으로 가기</b></small>|
|![038](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%80%E1%85%A7%E1%86%AF%E1%84%8C%E1%85%A6%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%A8.gif)|![039](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%92%E1%85%A9%E1%86%B7%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9.gif)|

### 🛠기술 스택
OS | Windows 10, Mac
--- | --- |
Language | ![Java](https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white) ![Spring](https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=Python&logoColor=white)
IDE | ![STS4](https://img.shields.io/badge/STS4-6DB33F?style=for-the-badge&logo=Spring&logoColor=white) ![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ_IDEA-007ACC?style=for-the-badge&logo=IntelliJ-IDEA&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white) ![SQL Developer](https://img.shields.io/badge/SQL%20Developer-F80000?style=for-the-badge&logo=oracle&logoColor=white) 
Framework | ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white) ![Spring Data JPA](https://img.shields.io/badge/Spring%20Data%20JPA-ORM-green?style=for-the-badge&logo=spring) [![Flask](https://img.shields.io/badge/Flask-007ACC?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
Build Tool | ![Apache Maven](https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
Database | ![Mysql](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white)
Frontend | ![HTML5](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
Library | ![Spring Security](https://img.shields.io/badge/spring%20security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white) ![Thymeleaf](https://img.shields.io/badge/thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white) ![Redis](https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
API | ![Java Mail](https://img.shields.io/badge/Java%20Mail-3a75b0?style=for-the-badge)  ![Iamport Payment](https://img.shields.io/badge/Iamport%20Payment-c1272d?style=for-the-badge) ![CKEditor 4](https://img.shields.io/badge/CKEditor%204-0287D0?style=for-the-badge&logo=ckeditor4&logoColor=white) ![Font Awesome](https://img.shields.io/badge/Font%20Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white) ![Swagger UI](https://img.shields.io/badge/Swagger_UI-85EA2D?style=for-the-badge&logo=swagger&logoColor=black) ![REST API](https://img.shields.io/badge/REST%20API-blue?style=for-the-badge) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-34AA34?style=for-the-badge&logo=jsonwebtokens&logoColor=white) ![Auth0](https://img.shields.io/badge/Auth0-34AA34?style=for-the-badge&logo=auth0&logoColor=white) 
Server | ![Apache Tomcat 9.0](https://img.shields.io/badge/Apache%20Tomcat%20-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=black)
Version Control | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### ✨기술적 의사결정
선택기술 | 선택이유 및 근거
--- | --- |
`SSE` | 로그인 통해 Server와 Client간 연결이 이뤄지거든 Client에게 추가적인 요청을 요구하지 않으면서도 불시에 발생되는 이벤트들을 즉각 송신할 수 있어야 하기에 **Server to Client로의 단방향 통신**이 가능한 `Server-Sent Events(SSE)`가 실시간 알림을 구현하는 데 적합하다고 판단하였음.
`Redis` | 휘발성 데이터인 _이메일 인증 토큰_ 을 데이터베이스에 직접 저장 및 호출하는 것은 불필요한 부하를 초래할 수 있으므로 인메모리(In-Memory) 형태에 TTL(Time to Live) 특성을 지녀 유효기간이 설정된 `Redis` 기반의 **Refresh Token**으로서 관리.
`Jasypt` | 보안 측면을 고려하여 `Jasypt` 통해 _비밀번호_ 와 같은 **property의 암호화**를 진행하고, 어플리케이션 실행 시 값을 요청할 수 있도록 VM arguments로 등록함.
`JUnit5` | 주어진 환경에서(given) 특정 코드가 실행됐을 때(when) 어떤 결과로 이어지는지(then) 모듈 단위의 테스트케이스로 구분. **전제적 요구사항을 점검하고, 의도대로 작동하는지 검증**하면서 코드의 생산성 및 유지보수성을 높이고자 함.
`Enum` | 문구 쇼핑몰 특성에 맞춰 _잉크컬러, 바디컬러, 심두께, 태그, 할인율, 상품카테고리, 기본배송메시지, 카드사별 할부혜택내용, 문의게시판 말머리, 실시간 알림 종류_ 등을 **연관된 상수들의 집합인 열거형** `Enum`으로 정의. 각 필드마다 데이터를 배정하고 이를 접근자(getter method) 통해 호출하면서 리팩토링 시 변경 범위를 최소화하였음.
`Commons Lang3` | 상품 전체 검색 시 _StringUtils, NumberUtils_ 등 `Apache Commons Lang3` 클래스에 정의된 메소드 통해 **parameter type을 동적으로 구분 및 처리**하도록 조건별 쿼리문을 최적화하였음.
`Thymeleaf Layout` | _Alert, Modal, ***Pagination***, ***Comment***, Header/Footer,  Dashboard_ 등을 각각 `Fragment`로 구분하여 사이트 전역적으로 사용되는 데 있어 코드 중복을 피하고 추가/수정에 용이하도록 의도하였음.
`MessageSource` | 쇼핑몰 확장성 및 코드 유지보수성을 고려하여 **필요에 따라 다국어 지원**할 수 있도록 앞서 `Thymeleaf Layout Fragment`로 구분해둔 알러트(alert) 메시지들은 `MessageSource` 인터페이스의 `properties`로 관리되고 있음.
`@SessionAttributes` | 어노테이션 통해 **세션상에 정보를 저장하고, 여러 화면 또는 연계된 요청 중에 해당 객체를 공유**하도록 정의해 다음과 같이 활용하였음.<br>`로그인 확인용 정보(loginMember)`<br>:  현재 로그인한 회원의 아이디를 가리키며 나아가 관리자인지 혹은 작성자 본인인지를 구분.<br>`최근 본 상품(recentlyViewed)`<br>: 회원은 접속 이래 현재까지 조회한 상품 목록을 '마이페이지'에서 확인 가능.<br>`장바구니(geulBeotCart)`<br>: 비로그인 상태에서 담은 장바구니 상품이 회원의 장바구니 목록으로 저장.<br>`바로주문 요청 정보(orderItem)`<br>: 로그인 전 선택한 상품 및 세부 옵션 정보 그대로 '주문페이지'로 이어지며, 이는 일회성이기에 사용자의 기존 장바구니와는 무관.<br>`소셜 로그인 여부(signInWithSocialAccount)`<br>: 소셜 로그인(카카오/구글) 시 이동 경로 구분.

### 🚧시스템 아키텍처
![architecture](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%8B%E1%85%A1%E1%84%8F%E1%85%B5%E1%84%90%E1%85%A6%E1%86%A8%E1%84%8E%E1%85%A7.jpeg)

### 📖ERD
![erd](https://github.com/woongheo1/devhub/blob/main/images/%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20erd.jpeg)
