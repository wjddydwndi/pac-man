
<br>
<h1>Pac-man</h1>

<br>
<br>
<div style="text-align:center;">
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjk1/MDAxNTU3NzczMTg4OTc4.5TNaBXsoqbpb9isQ4b4E6bCsJz1tbZnimcM_8Fs-0scg.yzko8iiaS747UnZT383LullwR8Nq5nkABsbMfqh0CLcg.PNG.wjddydwndi/1.png?type=w773">
</div>
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
<br>-----------------------------------------------------------------------------------------
<br>
<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfNzYg/MDAxNTU3NzczMjEwMzQz.nPzs6d3XPHO4HKp4bWFIPOkFx22oj2Twppp-bqrfRk4g.PIpbdWOdFddArfiekZRm4F7YPrvCtN8olbl4uJSLBw8g.PNG.wjddydwndi/4.png?type=w773">
Ⓐ 캐릭터가 이동하면서 동전을 획득할 때마다 ⓑ의 스코어가 올라간다.
<br><br> - 동전 객체와 캐릭터간 충돌처리를 통해 배열에 담겨있던 동전을 하나씩 제거한다.
<br> - If문을 통해 동전 객체와 캐릭터간 충돌한다면, SCORE를 증가시켰다.
<br><br>ⓒ 현재 진행중인 스테이지를 표시했다.
<br>------------------------------------------------------------------------------------------
<br>
<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfODYg/MDAxNTU3NzczMjEwMzc3.Mcvwr1tatELOGMMn5QGFrhn5oSAsdHUW68-YgtETtx0g.ZQbcBRJOBWvYLutRG3iP6qB4XInIuJ1JjXclVSiRODEg.PNG.wjddydwndi/5.png?type=w773">
Ⓐ 캐릭터가 이동하면서 동전을 획득하여, ⓑ 일정 SCORE를 얻게 되면, ⓐ캐릭터의 색이 변화하고, 
이동속도가 증가한다.<br>
일정 SCORE에 도달하면, 다음 스테이지로 넘어갈 수 있다.<br><br><br>
 - 동전 객체들과 캐릭터간의 충돌 처리를 통해, ⓑ가 증가할 수 있도록 하였다.<br>
 - If문을 이용하여, ⓑ의 수치가 일정 수에 도달하면 색을 변화시키고, <br>
 - 한번에 움직일 수 있는 수치를 증가시켰다.<br>
<br>------------------------------------------------------------------------------------------
<br>
<Br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjA5/MDAxNTU3NzczMjEwMjUw.MqJzFVcJWB9ESpzH2oPjCy5mbmDtliZY9qlpsTwOPmsg.c4q34tlvTndWquh5qxaegmo5JaN6QdDAk0DkeUDRqE0g.PNG.wjddydwndi/6.png?type=w773">
캐릭터가 ⓐ의 아이템을 획득한다면, ⓑ처럼 해당 아이템이 표시된다.
<br>A,B,C아이템을 모두 획득한다면, 다음 스테이지로 넘어갈 수 있다.<br><br>
<br>- Ⓐ와 캐릭터간의 충돌 처리를 하여, 충돌 시 ⓑ에 표시되도록 하였다.
<br>------------------------------------------------------------------------------------------
<br>
<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTEw/MDAxNTU3NzczMjEwNTQ3.MUxqohkVGs6P6OURsHeW-nkNMuV-0OQKoIMtCch2C4Ig._jvExjHPmEjBwhWmK9bLNsVv3OrQmZFQV-lwnBkOAKIg.PNG.wjddydwndi/8.png?type=w773">
Ⓐ와 같은 적군 객체들은 각 스테이지마다 나타나며, 맵 전체를 돌아다닌다.<br><br>
<br> - 객체들이 랜덤으로 좌표 값을 설정하는 함수를 정의하여, 자동으로 돌아다니게 하였다.
<br> - 객체 들에게 각각 충돌 처리를 하여, 벽과 캐릭터와 충돌 시 체크하도록 하였다.
<br> - 캐릭터와 충돌 시 그대로 게임은 끝나게 되고, 벽과 충돌 시 방향을 전환하여, 
<br> - 다른 곳으로 움직이게 하였다.
<br>------------------------------------------------------------------------------------------
<br>
<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTY0/MDAxNTU3NzczMjExMzM3.isgespaiPjBagcxib5fN0efJ6vtmSvYXpizvz6ItcJMg.2g-DUQuRkVTt09PV7DGk96rAGI4TtsNtFaqMu49i8Rsg.PNG.wjddydwndi/11.png?type=w773">

<br>적군과 충돌하여, 부딪힌다면, GameOver가 창이 뜨고, Score가 표시된다.
<br>아래의 버튼을 누르면, 게임을 다시 시작할 수 있다.

<br>만약, SCORE가 일정 수치에 도달하면, 다음 스테이지로 이동할 수 있는 버튼과 함께, SCORE가 표시된다.
<br>------------------------------------------------------------------------------------------
<Br>
<br>
	<h2>코드 정리</h2>
	<p>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjU4/MDAxNTU3NzczMjExNTYz.gdtTxWXLjNCz5w-IU5X_DMSKsWN0lflzRsi3-kgvq0cg.9nfs-9Z2GEcEJ6QTMd3JbWUV7BNICatn5_Io7sYt1egg.PNG.wjddydwndi/12.png?type=w773">
	
	
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTE2/MDAxNTU3NzczMjExNjMx.TzFsxkKryxg804i1Yib6KDULEme51RhDFlpAfaec-PUg.3Blx81w3e0Jw9wLqiAHOaiuvvPTxQqWuGtpYpqx6QvAg.PNG.wjddydwndi/13.png?type=w773">


<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMzcg/MDAxNTU3NzczMjEyMzEz.MkpD4eax_Z_kTDN-7h5lNPvggflgjIgfAs0tB_z6hTEg.ulRp16G5iJxjhFAXszPfaavkfms1ZbKB5sbAzQ_8TnQg.PNG.wjddydwndi/16.png?type=w773">

<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjcg/MDAxNTU3NzczMjEyNDMx.u17tICe3_syl8911YovbdwsgXU9zlqh25X7P1uknYqwg.HEKDHXzmXqc9RVMIje866zRceqyasrnG-joOPx2NDusg.PNG.wjddydwndi/17.png?type=w773">

<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjU5/MDAxNTU3NzczMjEzMDg5.q5MZMvm-IPwiwzVU-NpeIp6plApJrpN7T0F1wxslsHcg.tA8-3eAyIgA_V7CRmqWNDi4m2huXY7_68gYXWGL47b0g.PNG.wjddydwndi/18.png?type=w773">

<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTIw/MDAxNTU3NzczMjEyNjk5.vMaq1TvP7UXkXQbovazL55Axln5_Ek_OhtJl_0tyruMg.vnGWuhmsHqwQKK-iSXuwTc2x2Vi8i2WCus_kp_LphpUg.PNG.wjddydwndi/19.png?type=w773">

<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTYg/MDAxNTU3NzczMjEzNDQ1.uDYU7HKLUnvSABI2UtOyApYZPIyR0C5mj4kVHicZkTQg.pERKbVDfb-8an883f3dwnakOEO1qP-vNtMKRGf0rWMsg.PNG.wjddydwndi/20.png?type=w773">

<p>Map관리</p>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTUz/MDAxNTU3NzczMjEzMDY0.jOvrO3cedUUuxJHRXqsMJuAtvbmytIP14BOcbO5eswcg.ighzDTRca9JwlLiK8BF_d7XzckOubyTAOKNS2twOH_Qg.PNG.wjddydwndi/21.png?type=w773">

<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTUx/MDAxNTU3NzczOTQ5NTE3.Fn6jBaO4OV-f_EBd2jDftQ1f1i6A99rIW_y9H1apqN0g.f32iTlblWR33jLqPQgZ4VRtpgmVmq5oXkytoB1QqAdwg.PNG.wjddydwndi/22.png?type=w773">
