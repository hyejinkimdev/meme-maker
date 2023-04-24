const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 1. Draw rectangles
// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();

// ctx.beginPath(); // 새로 채움
// ctx.rect(350, 350, 100, 100);
// ctx.fillStyle = "red";
// ctx.fill();

// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.stroke();


// 2. Draw a house
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.strokeRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 5 , 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();


// 3. Draw a person
ctx.fillRect(210 -40, 200 -20, 15, 100); // arm
ctx.fillRect(350 -40, 200 -20, 15, 100); // arm
ctx.fillRect(260 -40, 200 -20, 60, 200); // body

// arc(x, y, radius, startAngle, endAngle, counterclockwise)
ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath(); // To draw something new
ctx.fillStyle = "white";
ctx.arc(260 + 10, 80, 5, Math.PI, 2 * Math.PI);
ctx.arc(220 + 10, 80, 5, Math.PI, 2 * Math.PI);
ctx.fill();
