const canvas=document.getElementById("canvas");
let ctx = canvas.getContext('2d');

// obtiene las dimensiones de la pantalla actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;

// el canvas tien las mismas dimensiones que la pantalla
canvas.height = window_height;
canvas.width = window_width;

canvas.style.background='#ff8';

class Circle{
    constructor(x, y, radius, color, text){
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text; 
    }
    draw(Context) {
        Context.beginPath();

        Context.fillText(this.text,this.posX,this.posY);
        Context.strokeStyle = this.color;  // Establece el color del contorno
        Context.textAlign='center';   // Centra el texto en el eje X
        Context.textBaseline= 'middle'; // Centraliza el texto en el eje Y
        Context.font = '20px Arial';
        Context.lineWidth=2;
        Context.arc(this.posX, this.posY, this.radius,  0, Math.PI*2, false);
        Context.stroke();
        Context.closePath();
    }
}


let arrayCircle=[];   

for(let i=0 ;i<10;i++){

    let randomX =  Math.random() * window_width;         // posicion aleatoria para X
    let randomY =  Math.random() * window_height;        // posicion aleatoria para Y
    let randomRadius = Math.floor(Math.random()*100+30);     // Radio de los círculos va de 1 a 99
    let miCirculo=new Circle (randomX, randomY, randomRadius, 'blue', i+1);
    arrayCircle.push(miCirculo);
    arrayCircle[i].draw(ctx);
        }


//let miCirculo = new Circle (100, 100, 50, 'red', 'Tec');
//miCirculo.draw(ctx);

//let miCirculo2 = new Circle (270, 270, 50, 'black', 'Pachuca');
//miCirculo2.draw(ctx);