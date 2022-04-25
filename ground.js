class Ground {
    constructor(x, y, width, height) {
        var options ={
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height);
    }
    display(){
        var pos = this.body.position;
        Push()
        fill("white");
        rectMode(CENTER);
        rectangle(pos.x,pos.y,pos.width,pos.height);
        Pop()
    }
}