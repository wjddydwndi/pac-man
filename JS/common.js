/*-------------------------
사용법 : getRandom 호출시 당신이 원하는 수를 넣으세요
ex)getRandom(5)를 넣으면 0~4를 반환받습니다.
------------------------------*/


function getRandom(num){
	var r=Math.random();

	var n=parseInt(r*num);
	return n;//함수 중 return에 값을 명시하여, 호출한 자가 그 값을 반환받도록 처리하는 함수를 리턴값있는 함수, 반환값이 있는 함수라 한다.
}

//ex)2,7 --> 2~~6까지 나온다.
function getRandomByRange(min,max){
	return parseInt(Math.random()*(max-min))+min;
}
/*------------------------------------------------------------------------
시간 문자열 처리 함수.
호출자는 아래의 사항을 숙지하고 쓰세요.
인수로 넘긴 n이 10보다 작으면, 앞에 "0"문자를 조합해서 
결과를 반환해주자!
---------------------------------------------------------------------------*/

function getTimeString(n){
	if(n<10){
		n="0"+n;
	}
	return n;
}


/*==============================================
인수 1 : 나 객체
인수 2 : 상대방 객체
사 후 판 단.
================================================*/
function collisionCheck(me, target) {

	 //나의 너비가 상대의 범위에 있는지 체크

	 var horizon1=me.x+me.width >= target.x;  //좌측에서 우측으로 접근시

	 var horizon2=me.x <= target.x+target.width; //우측에서 좌측으로 접근시



	 //나의 높이가 상대의 범위에 있는지 체크

	 var vertical1=(me.y+me.height >= target.y);  //위에서 아래로 접근시

	 var vertical2=(me.y <= target.y+target.height); //아래에서 위로 접근시



	 return (horizon1 && horizon2) && (vertical1 && vertical2);

}
/*==============================================
두 물체의 충돌여부 사 전 판 단
================================================*/

function hitTest(me, target , nextX , nextY) {
	//두물체간 충돌 여부 판단 
	nextX=parseInt(nextX);
	nextY=parseInt(nextY);
	//var result1=(me_x+nextX >= target_x) && (me_x+nextX <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
	//var result2=((me_x+me_width+nextX) >= target_x) && ((me_x+me_width+nextX) <= (target_x+target_width));  //나의 가로폭이 타겟의 가로폭 내에 있는지 판단
	//var result3=((me_y+nextY) >= target_y) && ((me_y+nextY) <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
	//var result4=((me_y+me_height+nextY) >= target_y) && ((me_y+me_height+nextY) <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
	var result=((me.x+me.width >=target.x) && (me.x <=target.x+target.width) ) &&  ( (me.y+me.height >= target.y) && (me.y<=target.y+target.height) )
	return result;
}


/*==============================================
원하는 달이 며칠까지 있는지 구하는 함수!!
ex)유저가 알고 싶은 달이 5월일 경우! 2018년 5월일 경우
	getLastDateOfMonth(2018,4)
================================================*/

function getLastDateOfMonth(year,month){
	var d = new Date();
	//조작하기
	d.setFullYear(year);
	d.setMonth(month+1);//자바스크립트에서는 마지막날을 구할 수 없기 때문에 정보를 다음달로 넘어간 후 0일을 구한다.
	d.setDate(0);
	//한수 호출자에게 원하는 데이터를 반환시켜준다.
	return d.getDate();
}

/*==============================================
해당 월의 시작 요일 구하기
ex) Date 객체를 5월로 세팅하고, 날짜는 1일로 세팅한다.
	요일을 물어본다.
	주의) 호출시 5월이 궁금하다면, 숫자는 4로 넘긴다!
================================================*/
function getStartDayOfMonth(year,month){
	var d= new Date();//현재 날짜이므로, 조작이 필요하다.
	d.setFullYear(year);
	d.setMonth(month);
	d.setDate(1);//그월의 시작일로 조작 1
	
	return d.getDay();
}

/*----------------------------------------------------
인수1 : 나 객체 
인수2 : 상대방 객체
인수3: 예측된  x좌표
인수4: 예측된 y좌표
----------------------------------------------------*/
function hitTest(me, target , nextX , nextY) {
	//두물체간 충돌 여부 판단 
	nextX=parseInt(nextX);
	nextY=parseInt(nextY);
	//var result1=(me_x+nextX >= target_x) && (me_x+nextX <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
	//var result2=((me_x+me_width+nextX) >= target_x) && ((me_x+me_width+nextX) <= (target_x+target_width));  //나의 가로폭이 타겟의 가로폭 내에 있는지 판단
	//var result3=((me_y+nextY) >= target_y) && ((me_y+nextY) <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
	//var result4=((me_y+me_height+nextY) >= target_y) && ((me_y+me_height+nextY) <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
	var result=((me.x+me.width >=target.x) && (me.x <=target.x+target.width) ) &&  ( (me.y+me.height >= target.y) && (me.y<=target.y+target.height) )
	return result;
}


/*----------------------------------------------------
어떤 대상이든, 방향만 넘겨주면 알아서 크기 정보를 생성한다
side : left, right, up, down
----------------------------------------------------*/
function getSensorSize(side , x, y, width, height ){
	var border=3; //막대들의 두께
	var colTypePadding=2//세로형 막대 들여쓰기 퍼센트 %

	var rowTypePadding=2//가로형 막대 들여쓰기 퍼센트 %
	var rowTypeWidth=96 //가로형 막대 너비 퍼센트 %
	
	var json={};

	json["type"]=side;
	//좌측일 경우 
	if(side =="LEFT"){ //세로형
		json["x"]=x-3; //2픽셀 바깥으로
		json["y"]=y+(height*(colTypePadding/100)); //2% 밑으로
		json["width"]=border;
		json["height"]=height*(96/100); //96%
	}else if(side =="RIGHT"){//세로형	
		json["x"]=x+width;
		json["y"]=y+(height*(colTypePadding/100)); //2% 밑으로
		json["width"]=border;
		json["height"]=height*(96/100); //96%	
	}else if(side =="UP"){//가로형	
		json["x"]=x+(width*(rowTypePadding/100)); //들여쓰기 정도
		json["y"]=y-border; //위쪽으로 2픽셀
		json["width"]=width*(rowTypeWidth/100); 
		json["height"]=border;
	}else if(side =="DOWN"){//가로형	
		json["x"]=x+(width*(rowTypePadding/100)); //들여쓰기 정도
		json["y"]=(y+height); //아래로 2픽셀
		json["width"]=width*(rowTypeWidth/100); 
		json["height"]=border;
	}
	//console.log(json);	
	return json;
}