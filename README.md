<br><br>
<h1> 게임 프레임 웍을 활용한 Pac-Man</h1>
<br><br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTI3/MDAxNTU3Nzc3NzkyMDk5.IQzQsF4YArmWS_q1KIZvIXGvRTZcti7V2HGXOzEE6z4g.wMxUy7qlzy8drvoJsCL9s1fOUvb-zGnpIU-CXwc05Nsg.PNG.wjddydwndi/1.png?type=w773" width="100%">
<br>
<br>
<p>프로젝트 주제	:  JavaScript를 사용한 게임 구현</p>
<p>프로젝트 설명      :  Javascript를 사용하여, Pac-man 게임을 구현.</p>
<p>개발 툴		  :  EditPlus</p>
<p>개발 기술 	  : javascript , css, html</p>
<p>프로젝트 기간	:  2018. 12. 11 ~ 2018.12.15</p>
<br><br><br>
<h2> 상세 설명 </h2>
<br>
<br>
<br>
<p>1. 오디오 객체를 적용한 배경음 처리.</p>
<p>2. 게임에 등장하는 객체들을 관리할 ObjectManager 정의.</p>

<p>3. GameObj 를 정의하여, 모든 게임 관련 객체들은 최상위 클래스인 GameObj의 tick,render를 Override.</p>
	 * 객체들의 크기, 이미지, 움직임 등을 정의.<br><br><br>
<p>4. Sensor.js와 hitTest함수를 정의하여, 충돌처리.</p>
<p>5. 키보드 이벤트를 이용한, 애니메이션 처리.</p>
<p>6. 랜덤 함수를 정의하여, 적군들의 움직임 정의.</p>
<p>7. 각 셀(맵의 벽돌)들을 객체로 정의하여, 이미지,사이즈 지정.</p>
<p>8. JSON을 이용하여, 맵을 구성.</p>
<p>9. setTimeout을 활용한, GameLoop의 구현</p>
<p>10. Modal PopUp을 이용한 결과 출력 
<br>
<br>
<br>
<h2> 게임 진행 화면 </h2>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjg5/MDAxNTU3NzgwMjE2MjIy.I8745lH0xdVIeCXVhGdjmZNKs63uD8Ea1rXohUev-4sg.P_L_m-InStoHOq0ATNFd41PWNgcDz-KRt5IC01Cg_d8g.PNG.wjddydwndi/00.png?type=w773" width="100%">

1.


<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTM0/MDAxNTU3Nzc5OTk4MDIx.HrbVc0MvswTjnz8r3k7ugyM8QC2isnLyBXyq08Sl4X4g.3HScl4rulrgQ_DoswZ9u13R_PmpgBFvQfeMBgX5Am7kg.PNG.wjddydwndi/4.png?type=w773" width="100%">
