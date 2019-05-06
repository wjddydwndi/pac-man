class ObjectManager{
	constructor(){
		this.objectArray=[];
	}

	addObject(obj){
		
		this.objectArray.push(obj);
	}
	removeObject(obj){
	
		stage.removeChild(obj.div);

		this.objectArray.splice(this.objectArray.indexOf(obj),1)
	}
	tick(){
	
		for(var i=0; i<this.objectArray.length; i++){
			this.objectArray[i].tick();
		}
	}
	render(){
	
		for(var i=0; i<this.objectArray.length; i++){
			this.objectArray[i].render();
		}
	}
}