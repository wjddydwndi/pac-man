
<br>
<h1>Pac-man</h1>

<br>
<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMTA0/MDAxNTU3NzE0NDQ3MDY3.xNy6VUKCnGk6GW1j6e0DVC7mCnhnAmsEVe1AykGjKp8g.K9vTD8_FIu5ZPBHNjQdlQJqRlbnOeUy6gkflZlZ1bOYg.PNG.wjddydwndi/image.png?type=w773">
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
		<p style="text-align:center">	주요 기능 설명</p>
<br>
<br>
<p>1. 오디오 객체를 적용한 배경음 처리.</p>
<p>2. 게임에 등장하는 객체들을 관리할 ObjectManager 정의.</p>

<p>3. GameObj 를 정의하여, 모든 게임 관련 객체들은 최상위 클래스인 GameObj의 tick,render를 override한다.</p>
	 * 객체들의 크기, 이미지, 움직임 등을 정의함.<br><br><br>
<p>4. 객체 들에게 충돌 처리 센서를 부착시켜, 충돌 처리를 하였다.</p>
<p>5. Key를 누를 때, Count를 증가시켜, 애니메이션 효과를 주었다.</p>
<p>6. 랜덤 함수를 정의하여, 적군들이 자동으로 움직일 수 있도록 처리하였다.</p>
<p>7. 각 셀(맵의 벽돌)들을 객체로 정의하여, 이미지와, 크기를 지정하였다.</p>
<p>8. JSON을 이용하여, 맵을 구성.</p>
<p>9. setTimeout을 활용한, GameLoop의 구현</p>
<br>
<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMjk1/MDAxNTU3NzE0NTY2MzUx.wUb7vSx0QVchn7FYLvODWxoio3X5odAZz9JyxXrcIcgg.UEO4L0xS5H5vbt9LfcXBEGZXQGtnF6DVk3qONfJCVJ0g.PNG.wjddydwndi/image.png?type=w773">
마우스의 커서가 버튼에 올라가면, 색이 변경되도록 처리
<br>-----------------------------------------------------------------------------------------
<br>
<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMjcx/MDAxNTU3NzE0NjA4MDQ1.eOIgteKpqzmlyZ9iy2-VYtSNrv4fX50ovqzhaen5F4Yg.YKLrDrdt0H4yeHuxzHlbpkEBGEqg7g854gc0I4fSRwog.PNG.wjddydwndi/image.png?type=w773">
Ⓐ 캐릭터가 이동하면서 동전을 획득할 때마다 ⓑ의 스코어가 올라간다.
<br><br> - 동전 객체와 캐릭터간 충돌처리를 통해 배열에 담겨있던 동전을 하나씩 제거한다.
<br> - If문을 통해 동전 객체와 캐릭터간 충돌한다면, SCORE를 증가시켰다.
<br><br>ⓒ 현재 진행중인 스테이지를 표시했다.
<br>------------------------------------------------------------------------------------------
<br>
<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMjg2/MDAxNTU3NzE0NjM1MjYz.jB_n7RFNzRDwx7W1WQfeB1GNhAIp8illl3g8QSaSnHwg.Sw0UcDRPVt59WB1lu61f3hgiATdjrYpIDN7G4SRL384g.PNG.wjddydwndi/image.png?type=w773">
Ⓐ 캐릭터가 이동하면서 동전을 획득하여, ⓑ 일정 SCORE를 얻게 되면, ⓐ캐릭터의 색이 변화하고, 
이동속도가 증가한다.<br>
일정 SCORE에 도달하면, 다음 스테이지로 넘어갈 수 있다.<br><br><br>
 - 동전 객체들과 캐릭터간의 충돌 처리를 통해, ⓑ가 증가할 수 있도록 하였다.<br>
 - If문을 이용하여, ⓑ의 수치가 일정 수에 도달하면 색을 변화시키고, <br>
 - 한번에 움직일 수 있는 수치를 증가시켰다.<br>
<br>------------------------------------------------------------------------------------------
<br>
<Br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMTU3/MDAxNTU3NzE1MTQwNjA5.qM6Me2UIy1K-1wOr1snX9zig_56_ZFGfpzz8-IThnWwg.AAQd1J2a6Qizbsv5aeeUg4JsPZG4zqZlyVO3MoDImWMg.PNG.wjddydwndi/image.png?type=w773">
캐릭터가 ⓐ의 아이템을 획득한다면, ⓑ처럼 해당 아이템이 표시된다.
<br>A,B,C아이템을 모두 획득한다면, 다음 스테이지로 넘어갈 수 있다.<br><br>
<br>- Ⓐ와 캐릭터간의 충돌 처리를 하여, 충돌 시 ⓑ에 표시되도록 하였다.
<br>------------------------------------------------------------------------------------------
<br>
<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMjM1/MDAxNTU3NzE1MTY0Njk5.1P9Cz2XsP5YUMq1owxuoCEh6epRV4-e5O2JxUCMexiMg.sTODucRMU90FwTvEwddDg6ar-GUi0sa--oEz1OwBeu8g.PNG.wjddydwndi/image.png?type=w773">
Ⓐ와 같은 적군 객체들은 각 스테이지마다 나타나며, 맵 전체를 돌아다닌다.<br><br>
<br> - 객체들이 랜덤으로 좌표 값을 설정하는 함수를 정의하여, 자동으로 돌아다니게 하였다.
<br> - 객체 들에게 각각 충돌 처리를 하여, 벽과 캐릭터와 충돌 시 체크하도록 하였다.
<br> - 캐릭터와 충돌 시 그대로 게임은 끝나게 되고, 벽과 충돌 시 방향을 전환하여, 
<br> - 다른 곳으로 움직이게 하였다.
<br>------------------------------------------------------------------------------------------
<br>
<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMjYx/MDAxNTU3NzE1MTg0Mzg3.QlTicrXbTquMhs1mXC6R-JVSja0mYBdDH8jeFMH_wtgg.8MDlyY5X49NK1d0JhwtNGq0DSNY8zaekgiak79sSRD8g.PNG.wjddydwndi/image.png?type=w773">

<br>적군과 충돌하여, 부딪힌다면, GameOver가 창이 뜨고, Score가 표시된다.
<br>아래의 버튼을 누르면, 게임을 다시 시작할 수 있다.

<br>만약, SCORE가 일정 수치에 도달하면, 다음 스테이지로 이동할 수 있는 버튼과 함께, SCORE가 표시된다.
<br>------------------------------------------------------------------------------------------
<Br>
<br>
	<h2>코드 정리</h2>
	<p>
	<p>캐릭터 움직임</p>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMjM1/MDAxNTU3NzI2Mjk0Mjgz.fRJWzdmFCfTAN8JoWSDjJrJF-4HTJoRIY5uS2ptvU9kg.jWPBgaiyqCJ0g1QMp5j0zHh5Wp7intwuEWNlcSvNOQcg.PNG.wjddydwndi/image.png?type=w773">
	<p>Index.html</p>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMTAw/MDAxNTU3NzI2MzIwNTgx.GJQvsTGq8c4-fHEM9D6HohDO0C32xyUUXy4UvA2JcFUg.MMoKkvaDvaCiyTSOao6lEJS_Lhf-S1Amn3s_vV3Agu4g.PNG.wjddydwndi/image.png?type=w773">
	


<p>적군의 자동 움직임</p>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMTU4/MDAxNTU3NzI2MzI0NzAz.d7tJb9FYMZPL2dzA0s4NYyWLuTWAPbnD6MY-XDiKo_Ag.f4oFznvFnjsNfQoO-B2Zi3BCK3MIW_R3cVLyVgcNSlkg.PNG.wjddydwndi/image.png?type=w773">

<p>객체 관리 Class</p>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMzQg/MDAxNTU3NzI2MzI3ODM0.SYpZEhVBtPTgnHngSC6QSB1nl-zyH9MTydRvA8Nk_ikg.4kqWN-687I-cE2hWRTOP8DLYI-FnD1NivaVZBM_JjxUg.PNG.wjddydwndi/image.png?type=w773">

<p>충돌체크 센서</p>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMTg5/MDAxNTU3NzI2MzMwNzgw.eetPfLDc493EHhWNfBFQFkLMiyDxlXr8ks9ZxKK_Sk8g.BlYY-ASgxeTKI_oF0dNGKWq2QpeVqyoiW984tzdCLGog.PNG.wjddydwndi/image.png?type=w773">

<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfNTQg/MDAxNTU3NzI2MzMzMDAy.bsKYpUTTMC6kY2BJW8l5glUpDAfpVizURGJkVMI8cS0g.2mPpXa4_uWFJRM1C7QsJe9IWOlGJcplO9EK3mFFhtswg.PNG.wjddydwndi/image.png?type=w773">

<p>캐릭터 애니메이션 효과</p>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMTU3/MDAxNTU3NzI2MzM2MTUz.NoWHuqHqWxNtVDfp94kCY2muu8ud7FAOicEBtZqb67Eg.hvxudPSigame4SliXK1qsKlD3DgQw4cPQ1QMxex7if0g.PNG.wjddydwndi/image.png?type=w773">

<p>Map관리</p>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfNTYg/MDAxNTU3NzI2NDA5NTkz.09RMMHkU1-C8GY74fbBDeeoE2LpfU3HqGRJSWBCulnkg.WjBjMbOff54X6T8S7dp-9repg5dqElhnPT3Fkx1Ojj0g.PNG.wjddydwndi/image.png?type=w773">

<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMjY5/MDAxNTU3NzI2NDEzNjQ0.iB5rVxbLWMOJ9sZ4nNmhzhUJ2NNtMVFyXko_cSP-MHEg.nmCTA_7vhU80Z0tPAl6hl4n14aKdUwJYHzL9DSK_V9Eg.PNG.wjddydwndi/image.png?type=w773">
