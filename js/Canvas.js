class Canvas{
    
    constructor(width,height,color) {
        this.canvas = document.querySelector('canvas');  
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d');
        this.context.fillStyle = color;
        this.context.fill();
    }

    changeColor(color) {
        canvas.color = color;
    }

    changeWidth(width) {
        canvas.width = width;
    }

    changeheight(height) {
        canvas.height = height;
    }

}

class Process{
    constructor(width,height,speed) {
        this.
        this.height = height;
        this.width = width;

    }
}
// anime({
//     targets: '.linear-easing-demo .el',
//     translateX: 250,
//     direction: 'alternate',
//     loop: true,
//     easing: 'linear'
//   });

// console.log("hi");

let c = new Canvas(innerWidth,innerHeight/2, "#FF0000");
// console.log("bye");

// var c = canvas.getContext('2d');
// c.fillRect(x,y,width,height);
