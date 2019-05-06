super(){
		this.aniCount++;

		if(this.aniCount%==0){//속도조절
			this.index++;
		}
		if(this.index >= this.superArray.length){
			this.index=0;
		}
		this.img.src="./game_img/"+this.superArray[this.index];
	}