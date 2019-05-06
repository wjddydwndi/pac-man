function createItem(){
	for(var a=0; a<12; a++){
		for(var i=0; i<24; i++){
			item=new Item("ITEM",stage,50+(50*i),50+(50*a),20,20,0,0,0,0,"","./game_img/coin.png")

			itemArray.push(item);
			objectManager.addObject(item);
		}
	}

}