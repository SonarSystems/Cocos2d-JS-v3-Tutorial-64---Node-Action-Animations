var INITIALIZED = false;

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(sprite, 0);

        //var spriteAction = new cc.EaseBounceOut(new cc.MoveBy(2, cc.p(500, 0)));
        var spriteAction = new cc.EaseExponentialOut(new cc.MoveBy(2, cc.p(500, 0)));
        sprite.runAction(spriteAction);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if (INITIALIZED == false)
        {
        	INITIALIZED = true;

        	var layer = new HelloWorldLayer();
        	this.addChild(layer);
        }
    }
});

