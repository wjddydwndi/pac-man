class Hero extends GameObj {
	constructor(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src) {
		super(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src);
		this.aniCount = 0;		// 애니매이션동작에 필요한 변수
		this.framePath = "./game_img/"
		this.index = 0;//애니메이션 배열의 번째를 담게될 변수
		this.sensorArray = [];

		//this.colCnt = 0;
		//this.colFlag = true;

		this.leftSensor = new Sensor("SENSOR", container, getSensorSize("LEFT", x, y, width, height), 0, 0, 0, 0, "#000", "");
		this.rightSensor = new Sensor("SENSOR", container, getSensorSize("RIGHT", x, y, width, height), 0, 0, 0, 0, "#000", "");
		this.upSensor = new Sensor("SENSOR", container, getSensorSize("UP", x, y, width, height), 0, 0, 0, 0, "#000", "");
		this.downSensor = new Sensor("SENSOR", container, getSensorSize("DOWN", x, y, width, height), 0, 0, 0, 0, "#000", "");

		this.sensorArray.push(this.leftSensor);
		this.sensorArray.push(this.rightSensor);
		this.sensorArray.push(this.upSensor);
		this.sensorArray.push(this.downSensor);
	}

	tick() {
	//	this.colCnt = 0;
		this.aniCount++;


		//console.log(this.velX);
		//block 설정(충돌체크)
		var hitCount = [0, 0, 0, 0];
		for (var i = 0; i < objectManager.objectArray.length; i++) {
			var obj = objectManager.objectArray[i];
			if (obj.type == "BLOCK") {
				/*------------------------------------------------------
				블럭 하나를 대상으로 4방향의 센서들과 대조해본다
				------------------------------------------------------*/
				for (var a = 0; a < this.sensorArray.length; a++) {
					var s = this.sensorArray[a];

					if (hitTest(obj, s, this.velX, this.velY)) { //충돌이라면...
						hitCount[a]++;
						//console.log(hitCount, "충돌");
						//stopX=obj.x;
						//stopY=obj.y;
						//this.colCnt++;
					}
				}
			}
		}
		//주인공이 벽에 닿으면 속도를 중지시킨다.
		if (hitCount[0] > 0 && key == 37) {//좌측에 닿으면
			this.velX = 0;
		}
		if (hitCount[1] > 0 && key == 39) {//우측에 닿으면
			this.velX = 0;
		}
		if (hitCount[2] > 0 && key == 38) {//상단에 닿으면
			this.velY = 0;
		}
		if (hitCount[3] > 0 && key == 40) {//하단에 닿으면
			this.velY = 0;
		}
		//화면 나가는것 대책.
	/*	if (this.colCnt > 2 && this.colFlag) {
			this.velX = -this.velX;
			this.velY = -this.velY;
			this.colFlag = false;
		} else if (this.colFlag == false) {
			this.colFlag = true;
			this.velX = 0;
			this.velY = 0;
		}*/

		this.x += this.velX;
		this.y += this.velY;
		/*------------------------------------------------------------
		주인공 움직이게, 센서움직이게
		------------------------------------------------------------*/


		for (var i = 0; i < this.sensorArray.length; i++) {
			var sensor = this.sensorArray[i];
			//console.log(i+"센서위치",sensor.x,sensor.y);
			sensor.tick(sensor.x + this.velX, sensor.y + this.velY);
			sensor.render();
		}


		/*------------------------------------------------------------
		item 처리
		------------------------------------------------------------*/
		

		for (var i = 0; i < objectManager.objectArray.length; i++) {
			var obj = objectManager.objectArray[i];
			//console.log("for 문 돈다!!");
			if (obj.type == "ITEM") {
				if (collisionCheck(obj, this)) {
					objectManager.removeObject(obj);
					n = n + 10;
					setScore();
				}
			}
			if (n >= 50) {
				//console.log("시점에 도달함!!");
				this.powerUp();//애니메이션 호출
			//powerUp했을 때 속도 증가
			switch (key) {
				case 37:
					hero.velX = -8; hero.velY=0;
					hero.img.style.transform = "scale(-1)";
					break;
				case 39:
					hero.velX = 8;	hero.velY=0;
					hero.img.style.transform = "scale(1)";
					break;
				case 38:
					hero.velY = -8;	hero.velX=0;
					hero.img.style.transform = "rotate(270deg)";
					break;
				case 40:
					hero.velY = 8;	hero.velX=0;
					hero.img.style.transform = "rotate(90deg)";
					break;
			}
			
			}
	
		
				//ABC아이템
				if(obj.type=="AITEM"){
					if (collisionCheck(obj, this)) {
					objectManager.removeObject(obj);
					abcCount++;
					A.style.display="block";
					
					}
				}
				var obj = objectManager.objectArray[i];
				if(obj.type=="BITEM"){
					if (collisionCheck(obj, this)) {
					objectManager.removeObject(obj);
					B.style.display="block";
					abcCount++;
					}
				}
				var obj = objectManager.objectArray[i];
				if(obj.type=="CITEM"){
					if (collisionCheck(obj, this)) {
					objectManager.removeObject(obj);
					C.style.display="block";
					abcCount++;
					}
				}
		

	
			/*------------------------------------------------------------
			enemy설정
			------------------------------------------------------------*/
			if (obj.type == "ENEMY") {
					if (collisionCheck(obj, this)) {
						objectManager.removeObject(this);
						gameOver();
					}
				}

			this.animation();

		}
	}


	animation() {
		if (this.aniCount % 4 == 0) {//속도조절
			this.img.src = this.framePath + frames.hero[this.index];
		//	this.img.style.width = this.width + "px";
		//	this.img.style.height = this.height + "px";

			this.index++;
			if (this.index >= frames.hero.length) {
				this.index = 0;
			}
		}
	}


	powerUp() {
	if (this.aniCount % 1 == 0) {//속도조절
			this.img.src = this.framePath + frames.go[this.index];
		//	this.img.style.width = this.width + "px";
		//	this.img.style.height = this.height + "px";

			this.index++;
			if (this.index >= frames.go.length) {
				this.index = 0;
			}
		}
	}
	 
		
	
}

/*test(){
					//양쪽화면 끝단을 나가면 다시 웜홀 효과 
					if(this.x<0){
						this.x=1250;
					}
					if(this.x>1250){
						this.x=0;
					}
				

animation(){
				if(this.aniCount%3==0){//속도조절
			this.index++;
		}
		if(this.index >= this.imgArray.length){
			this.index=1;
		}
		this.img.src="./game_img/"+this.imgArray[this.index];
	}
}*/