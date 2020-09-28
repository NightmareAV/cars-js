let Car = function(x, y) {
    this.x = x;
    this.y = y;
    this.draw();
};

// Car.prototype.speed = function() {
//     return Math.random() *10 + 0.1;
// }

Car.prototype.draw = function() {
    const carHtml = '<img src="http://nostarch.com/images/car.png">';

    this.carElement = $(carHtml);

    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });

    $("body").append(this.carElement);
};

Car.prototype.moveRight = function(speed) {
    this.x += speed;
    
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

let tesla = new Car(0, 20);
let nissan = new Car(0, 200);




// setInterval(tesla.moveRight, 30);
const ts = function () {
    tesla.moveRight((Math.random() * 5000) / 250);
};
const ns = function () {
    nissan.moveRight((Math.random() * 5000) / 250);
};

setInterval(ts, 30);
setInterval(ns, 30);


// const drawCar = function(car) {
//     const carHtml = '<img src="http://nostarch.com/images/car.png">';

//     let carElement = $(carHtml);

//     carElement.css({
//         position: "absolute",
//         left: car.x,
//         top: car.y
//     });

//     $("body").append(carElement);
// };



// drawCar(tesla);
// drawCar(nissan);
