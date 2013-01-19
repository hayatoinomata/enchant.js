enchant(); //…①
var picNumber = 0; //…②
window.onload = function() { //…③
	var game = new Game(320, 480); //…④
	game.preload('http://enchantjs.com/assets/images/chara6.gif'); //…⑤
	game.onload = function() { //…⑥
		var gel = new Sprite(32, 32); //…⑦
		gel.image = //…⑧
		game.assets['http://enchantjs.com/assets/images/chara6.gif'];
		gel.frame = 0; //…⑨
		gel.addEventListener(Event.ENTER_FRAME, function() { //…⑩
			picNumber++; //…⑪
            if (picNumber > 2) { //…⑫
				picNumber = 0;
			}
			gel.frame = picNumber; //…⑬
			gel.x += 1; //…⑭
            gel.y += 1;
		});
        game.rootScene.addChild(gel); //…⑮
	};
	game.start(); //…⑯
};