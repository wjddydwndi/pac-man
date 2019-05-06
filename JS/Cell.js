class Cell extends GameObj{
	constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src){
		super(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src);

		//this.div.style.zIndex=5;//z인덱스 position 값 준 애들의 화면상 제일 위에 오는 것을 결정
										//z인덱스가 높을수록.
	}
}