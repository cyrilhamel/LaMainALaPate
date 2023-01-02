let canvas=document.getElementById("c1");
let ctx=canvas.getContext("2d");

canvas.width=355;
canvas.height=355;

ctx.fillStyle="#D75414";
ctx.fillRect(0,0,355,355);



//cuisinier Traiteur
ctx.beginPath();
ctx.lineWidth="5";
ctx.fillStyle="#E0AC21";
ctx.strokeStyle="#E0AC21";
ctx.arc(50,50,300,0,2*Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fill();

//Patisserie
ctx.beginPath();
ctx.lineWidth="5";
ctx.fillStyle="#C02D0C";
ctx.strokeStyle="#C02D0C";
ctx.arc(50,50,260,0,2*Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fill();

//Produits
ctx.beginPath();
ctx.lineWidth="5";
ctx.fillStyle="#D75414";
ctx.strokeStyle="#D75414";
ctx.arc(50,50,220,0,2*Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fill();

//commandes
ctx.beginPath();
ctx.lineWidth="5";
ctx.fillStyle="#BF2C0C";
ctx.strokeStyle="#BF2C0C";
ctx.arc(50,50,180,0,2*Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fill();

//formations
ctx.beginPath();
ctx.lineWidth="5";
ctx.fillStyle="#A80000";
ctx.strokeStyle="#A80000";
ctx.arc(50,50,140,0,2*Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fill();

//accueil
ctx.beginPath();
ctx.lineWidth="5";
ctx.fillStyle="#61130A";
ctx.strokeStyle="#61130A";
ctx.arc(50,50,100,0,2*Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.font = "50px serif";
ctx.fillStyle = "green";
ctx.textAlign = "center";

let string = "GeeksforGeeks";

let angle = Math.PI * 0.6; // in radians
let radius = 200;


ctx.translate(300, 300);
ctx.rotate(-1 * angle / 2);

for (let i = 0; i < string.length; i++) {

    /* It is worth noting that we are not
        rotating the text,here the whole
        context is being rotated and
        translated, and the letters are just
        filled in it. */
    ctx.rotate(angle / string.length);
    ctx.save();
    ctx.translate(0, -1 * radius);
    ctx.fillText(string[i], 0, 0);
    ctx.restore();
};
