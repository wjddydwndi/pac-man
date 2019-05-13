<h1>Pac-man</h1>
<h3>
자바스크립트를 이용한 Pac-man입니다.
<br>기존의 팩맨을 보고 같은 기능을 구현해보기 위해 만들었습니다.
<br>-JSON을 이용해서 Map을 구현
<br>-충돌체크 센서를 구현하여, 충돌검사를 처리
<br>-count를 이용한 애니메이션 처리
<br>-GameObj.js , ObjectManager.js를 이용하여, 객체 관리
.................................................
 프로젝트 기간 : 2018. 12. 11 ~ 2018.12.15
</h3>

<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMTA0/MDAxNTU3NzE0NDQ3MDY3.xNy6VUKCnGk6GW1j6e0DVC7mCnhnAmsEVe1AykGjKp8g.K9vTD8_FIu5ZPBHNjQdlQJqRlbnOeUy6gkflZlZ1bOYg.PNG.wjddydwndi/image.png?type=w773">
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMjMw/MDAxNTU3NzE0NDU1NzU3.PQgFjQOZVE3hKsigo0ucM1mUyl3OxeiFzgxZe0V3LS4g.TC4ZPo1EcbENe4mPkMKhwKCtEcjKytMC6IDxhmqy3tgg.PNG.wjddydwndi/image.png?type=w773">

<h2> 프로젝트 설명 </h2>
<br>
		<p style="text-align:center">	주요 기능 설명</p>
<br>
1. 오디오 기능을 이용한, 전체적으로 배경음악 재생
<br>
2. 전체 객체들의 추가, 제거 등을 관리할 수 있는 JS를 만들어 객체들을 관리하였다.
<br>
3. GameObj 를 만들어 전체 객체들이 상속받을 수 있게 하였다.
	 (객체들의 크기, 이미지, 움직임 등을 정의함.)
<br>
4. 객체 들에게 충돌 처리 센서를 부착시켜, 충돌 처리를 하였다.
<br>
5. Key를 누를 때, Count를 증가시켜, 애니메이션 효과를 주었다.
<br>
6. 랜덤 함수를 만들어, 적군들이 자동으로 움직일 수 있도록 처리하였다.
<br>
7. 각 셀(맵의 벽돌)들을 객체취급하여, 이미지와, 크기를 지정하였다.
<br>
8. JSON을 이용하여, 맵을 구성.
<br>
9. setTimeout 을 사용하여, 게임이 돌아갈 수 있는 환경을 만들었다.
<br>

<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMjk1/MDAxNTU3NzE0NTY2MzUx.wUb7vSx0QVchn7FYLvODWxoio3X5odAZz9JyxXrcIcgg.UEO4L0xS5H5vbt9LfcXBEGZXQGtnF6DVk3qONfJCVJ0g.PNG.wjddydwndi/image.png?type=w773">
<br>
마우스의 커서가 버튼에 올라가면, 색이 변하도록 처리
<br>

<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMjcx/MDAxNTU3NzE0NjA4MDQ1.eOIgteKpqzmlyZ9iy2-VYtSNrv4fX50ovqzhaen5F4Yg.YKLrDrdt0H4yeHuxzHlbpkEBGEqg7g854gc0I4fSRwog.PNG.wjddydwndi/image.png?type=w773">
<br>

Ⓐ 캐릭터가 이동하면서 동전을 획득할 때마다 ⓑ의 스코어가 올라간다.
- 동전 객체와 캐릭터간 충돌처리를 통해 배열에 담겨있던 동전을 하나씩 제거한다.
- If문을 통해 동전 객체와 캐릭터간 충돌한다면, SCORE를 증가시켰다.
ⓒ 현재 진행중인 스테이지를 표시했다.

<br>

<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMjg2/MDAxNTU3NzE0NjM1MjYz.jB_n7RFNzRDwx7W1WQfeB1GNhAIp8illl3g8QSaSnHwg.Sw0UcDRPVt59WB1lu61f3hgiATdjrYpIDN7G4SRL384g.PNG.wjddydwndi/image.png?type=w773">
<br>
Ⓐ 캐릭터가 이동하면서 동전을 획득하여, ⓑ 일정 SCORE를 얻게 되면, ⓐ캐릭터의 색이 변화하고, 
이동속도가 증가한다.
일정 SCORE에 도달하면, 다음 스테이지로 넘어갈 수 있다.
-동전 객체들과 캐릭터간의 충돌 처리를 통해, ⓑ가 증가할 수 있도록 하였다.
-If문을 이용하여, ⓑ의 수치가 일정 수에 도달하면 색을 변화시키고, 
-한번에 움직일 수 있는 수치를 증가시켰다.

<Br>

<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMTU3/MDAxNTU3NzE1MTQwNjA5.qM6Me2UIy1K-1wOr1snX9zig_56_ZFGfpzz8-IThnWwg.AAQd1J2a6Qizbsv5aeeUg4JsPZG4zqZlyVO3MoDImWMg.PNG.wjddydwndi/image.png?type=w773">
<br>
캐릭터가 ⓐ의 아이템을 획득한다면, ⓑ처럼 해당 아이템이 표시된다.
A,B,C아이템을 모두 획득한다면, 다음 스테이지로 넘어갈 수 있다.
- Ⓐ와 캐릭터간의 충돌 처리를 하여, 충돌 시 ⓑ에 표시되도록 하였다.


<img src="">
<img src="">
<img src="">
<img src="">
<img src="">
<img src="">
<img src="">
<img src="">
<img src="">
<img src="">
<img src="">
