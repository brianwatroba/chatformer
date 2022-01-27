
export default class BackgroundController {
    constructor(scene) {
        this.scene = scene;
    }

    init(backgroundLayer, parallaxLayer, parallaxLayer2) {
        
        if (backgroundLayer && backgroundLayer.objects) {
            this.initLayer(backgroundLayer, 0.6, 0.6);
        }
        if (parallaxLayer && parallaxLayer.objects) {
            this.initLayer(parallaxLayer, 0.7, 0.7);
        }
        if (parallaxLayer2 && parallaxLayer2.objects) {
            this.initLayer(parallaxLayer2, 0.8, 0.8);
        }
    }

    initLayer(layer, parallaxXAmount, parallaxYAmount) {
        for (var i = 0; i < layer.objects.length; i++) {
            var obj = layer.objects[i];
            var newImage = this.scene.add.image(obj.x + obj.width/2, obj.y - obj.height/2, obj.type)
            newImage.setAlpha(0.5);
            newImage.setScrollFactor(parallaxXAmount, parallaxYAmount);
            newImage.setScale(obj.width/newImage.width, obj.height/newImage.height);
            newImage.setDepth(-1);

            if (obj.properties) {
                for (var propIndex = 0; propIndex < obj.properties.length; propIndex++) {
                    var prop = obj.properties[propIndex];
                
                    if (prop.name === "yoyoX") {
                        this.scene.tweens.add({
                            targets: newImage,
                            x: "+=" + prop.value,
                            duration: 2000,
                            yoyo: true,
                            repeat: -1
                        })
                    }
                    else if (prop.name === "yoyoY") {
                        this.scene.tweens.add({
                            targets: newImage,
                            y: "+=" + prop.value,
                            duration: 2000,
                            yoyo: true,
                            repeat: -1
                        })
                    }

                    else if (prop.name === "fillX" && prop.value) {
                        
                        var count = Math.ceil(this.scene.map.widthInPixels / obj.width);

                        for (var j = 0; j < count; j++) {
                            let copy = {...obj}
                            copy.x += obj.width * (j+1);
                            for (var k = 0; k < copy.properties.length; k++) {
                                if (copy.properties[k].name === "fillX") {
                                    copy.properties = [...copy.properties]
                                    copy.properties.splice(k,1);
                                }
                                
                            }
                            layer.objects.push(copy);
                        }
                    }

                }
            }
        }
        
    }

    
}
