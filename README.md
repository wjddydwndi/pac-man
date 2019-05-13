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
<br><br><br><br>
<h2> 게임 진행 화면 </h2>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjg5/MDAxNTU3NzgwMjE2MjIy.I8745lH0xdVIeCXVhGdjmZNKs63uD8Ea1rXohUev-4sg.P_L_m-InStoHOq0ATNFd41PWNgcDz-KRt5IC01Cg_d8g.PNG.wjddydwndi/00.png?type=w773" width="100%">
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTM0/MDAxNTU3Nzc5OTk4MDIx.HrbVc0MvswTjnz8r3k7ugyM8QC2isnLyBXyq08Sl4X4g.3HScl4rulrgQ_DoswZ9u13R_PmpgBFvQfeMBgX5Am7kg.PNG.wjddydwndi/4.png?type=w773" width="100%">

<h3>[ 디자인 ]</h3>
<p>
<p> (1) 게임스테이지 정보를 가진 JSon을 map.js로 정의하여 유지보수성 고려</p>
<p>
<h3>[ 게임 오브젝트 처리 ]</h3>
<p>
<p> (2)</p>
<p>
<p>   - 게임에 사용되는 모든 객체들의 등장 및 제거를 처리하는 ObjectManager 클래스 정의</p>
<p>   - 객체마다 고유한 속성을 인스턴스 생성시 클래스의 생성자 인수로 처리</p>
<p>   - 키보드 이벤트를 이용한 캐릭터의 이동 설정</p>
<p>   - 랜덤 함수를 정의하여, 적군들의 움직임 정의</p>
<p>   - Sensor.js와 hitTest함수를 정의하여, 충돌처리</p>
<p> (3) 키보드 이벤트를 이용한, 애니메이션 처리.</p></p> 
<h3>[ 게임 LOOP ]</h3>
<p>
<p>   - setTimeout 메서드로 GameLoop 구현
<p>   - 모든 객체들의 공통 기능은 최상위 클래스인 GameObject의 tick, render 메서드로 정의하여 하위 객체들이 재정의 할 수 있도록 설계</p>
<h3>**</h3>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTM0/MDAxNTU3Nzc5OTk4MDIx.HrbVc0MvswTjnz8r3k7ugyM8QC2isnLyBXyq08Sl4X4g.3HScl4rulrgQ_DoswZ9u13R_PmpgBFvQfeMBgX5Am7kg.PNG.wjddydwndi/4.png?type=w773" width="100%">
<p>
<p> (3)</p>
<p>
<p>   - Modal PopUp을 이용한 결과 출력</p>
<p>   - 오디오 객체를 적용한 배경음 처리.</p>
<br><br><br>
<h2> 주요 코드 정리 </h2>
<p>
<h3>GameObject</h3>
<p>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfODIg/MDAxNTU3Nzc3ODA5NjY2.xjSih8MlLYnv_Fi7kQfjTG0n5UuPBwzs4pi-LfNeI98g.5X8qdPgPnFiH9gP5Pz6FcqO1HbfBxHZBZCBXP_nUHFsg.PNG.wjddydwndi/5.png?type=w773" width="100%">
	
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjA4/MDAxNTU3Nzc3ODEyOTQz.8BwLwXFD2fH6nKKvbAJC7MRONaJbwxXjPIvaStIqbX4g.zL4xIEAlDc8sePteoA9BgmovqlM4ke75-mRFF4d6Ns4g.PNG.wjddydwndi/6.png?type=w773" width="100%">
<p>
<h3>캐릭터 애니메이션 효과</h3>
<p>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTI4/MDAxNTU3Nzc3ODE2NjQz.iejlAVGpExTYEM58A-E22O9OYv4FZChw52ytqO2jtbQg.nrLQMhrpe6ynZXr4xMDT1x_ZKp6eW8_t-2RMXJunJssg.PNG.wjddydwndi/7.png?type=w773" width="100%">
<p>
<h3>충돌 센서</h3>
<p>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjEg/MDAxNTU3Nzc3ODIwNDIz.R7BigNG3L9odB8kneuSBxh1jwI-USVZ3mfF29vQYFzUg.knvk_sNT6wX_GrFIjBSKSBJM7CnEX-hrClSwN7cQgAUg.PNG.wjddydwndi/8.png?type=w773" width="100%">
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTg5/MDAxNTU3Nzc3ODIzNDYw.3Yj_stsgZpHhzcAkKMi0LwNoF_TTiDc_U3VwOvk1Uckg.xU8sNgDf0EU14ES2h_g1rGoj-BPtgA4MS9ZLdFYs_j8g.PNG.wjddydwndi/9.png?type=w773" width="100%">
<p>
<h3>JSON을 활용한 Map구현</h3>
<p>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTk5/MDAxNTU3Nzc3ODI5MzQy.5AAMXPHeWxecMWcPPQQ68g7CwzaADG_ShFYGzdFRwBQg.gwqPqew_OzOAltu5cnqa_ONbyDKZnAWqyGe3Hb18zpcg.PNG.wjddydwndi/10.png?type=w773" width="100%">
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfNjcg/MDAxNTU3Nzc3ODI5OTcx.TFdvjsY5_K_YmpbD5TCmy0QpzN2ImqYR5yCfE4U7Wf0g.24ZUwld3WoaCfTs7YOPxdGQji8ENN9yjqlGFIA4QkDgg.PNG.wjddydwndi/11.png?type=w773" width="100%">

	

