/*----------------------------------------------
센서는 오브젝트 메니져에 등록하지 않음
----------------------------------------------*/
class Sensor extends GameObj{
	constructor(type,container,json,velX,velY,targetX,targetY,bg,src){
		super(type,container, json.x, json.y, json.width , json.height,velX,velY,targetX,targetY,bg,src);
	}

	tick(x, y){
		this.x=x;
		this.y=y;
	}
}
