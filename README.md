
<br>
<h1>Pac-man</h1>

<br>
<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjk1/MDAxNTU3NzczMTg4OTc4.5TNaBXsoqbpb9isQ4b4E6bCsJz1tbZnimcM_8Fs-0scg.yzko8iiaS747UnZT383LullwR8Nq5nkABsbMfqh0CLcg.PNG.wjddydwndi/1.png?type=w773">
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
<img src="">
마우스의 커서가 버튼에 올라가면, 색이 변경되도록 처리
<br>-----------------------------------------------------------------------------------------
<br>
<br>
<img src="">
Ⓐ 캐릭터가 이동하면서 동전을 획득할 때마다 ⓑ의 스코어가 올라간다.
<br><br> - 동전 객체와 캐릭터간 충돌처리를 통해 배열에 담겨있던 동전을 하나씩 제거한다.
<br> - If문을 통해 동전 객체와 캐릭터간 충돌한다면, SCORE를 증가시켰다.
<br><br>ⓒ 현재 진행중인 스테이지를 표시했다.
<br>------------------------------------------------------------------------------------------
<br>
<br>
<img src="">
Ⓐ 캐릭터가 이동하면서 동전을 획득하여, ⓑ 일정 SCORE를 얻게 되면, ⓐ캐릭터의 색이 변화하고, 
이동속도가 증가한다.<br>
일정 SCORE에 도달하면, 다음 스테이지로 넘어갈 수 있다.<br><br><br>
 - 동전 객체들과 캐릭터간의 충돌 처리를 통해, ⓑ가 증가할 수 있도록 하였다.<br>
 - If문을 이용하여, ⓑ의 수치가 일정 수에 도달하면 색을 변화시키고, <br>
 - 한번에 움직일 수 있는 수치를 증가시켰다.<br>
<br>------------------------------------------------------------------------------------------
<br>
<Br>
<img src="">
캐릭터가 ⓐ의 아이템을 획득한다면, ⓑ처럼 해당 아이템이 표시된다.
<br>A,B,C아이템을 모두 획득한다면, 다음 스테이지로 넘어갈 수 있다.<br><br>
<br>- Ⓐ와 캐릭터간의 충돌 처리를 하여, 충돌 시 ⓑ에 표시되도록 하였다.
<br>------------------------------------------------------------------------------------------
<br>
<br>
<img src="">
Ⓐ와 같은 적군 객체들은 각 스테이지마다 나타나며, 맵 전체를 돌아다닌다.<br><br>
<br> - 객체들이 랜덤으로 좌표 값을 설정하는 함수를 정의하여, 자동으로 돌아다니게 하였다.
<br> - 객체 들에게 각각 충돌 처리를 하여, 벽과 캐릭터와 충돌 시 체크하도록 하였다.
<br> - 캐릭터와 충돌 시 그대로 게임은 끝나게 되고, 벽과 충돌 시 방향을 전환하여, 
<br> - 다른 곳으로 움직이게 하였다.
<br>------------------------------------------------------------------------------------------
<br>
<br>
<img src="">

<br>적군과 충돌하여, 부딪힌다면, GameOver가 창이 뜨고, Score가 표시된다.
<br>아래의 버튼을 누르면, 게임을 다시 시작할 수 있다.

<br>만약, SCORE가 일정 수치에 도달하면, 다음 스테이지로 이동할 수 있는 버튼과 함께, SCORE가 표시된다.
<br>------------------------------------------------------------------------------------------
<Br>
<br>
	<h2>코드 정리</h2>
	<p>
	<p>캐릭터 움직임</p>
<img src="">
	<p>Index.html</p>
<img src="">
	


<p>적군의 자동 움직임</p>
<img src="">

<p>객체 관리 Class</p>
<img src="">

<p>충돌체크 센서</p>
<img src="">

<img src="">

<p>캐릭터 애니메이션 효과</p>
<img src="">

<p>Map관리</p>
<img src="">

<img src="">
