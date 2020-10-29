class Tree{
    constructor(){
        var options={
            'isStatic':true
        }
        this.image=loadImage("tree.png");
        this.width=400;
        this.height=height;
       

    }
    display(){
       
        imageMode(CENTER);
        image(this.image,600,400,this.width,this.height);
    }
}