const readline = require('readline-sync');

class Point2D {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    scan() {
        this.x = Number(readline.question('Nhap hoanh do: '));
        this.y = Number(readline.question('Nhap tung do: '));
    }
    print() {
        console.log('diem co toa do la: ' + this.x , this.y);
    }
    getDistance(point) {
        let d = Math.sqrt((point.x - this.x)**2 + (point.y - this.y)**2)
        return d;

    }
    // move(dx, dy) {
    //     dx = readline.question('Nhap khoang cach di chuyen theo hoanh do ');
    //     dy = readline.question('Nhap khoang cach di chuyen theo tung do ');
    //     x = this.x + dx;
    //     y = this.y + dy;
    //     return [x, y];
    // }
}

function taoPoint2D() {
    let p1 = new Point2D(4,6);
    p1.scan();
    // let p2 = new Point2D(4,6);
    // p2.scan();
    p1.print();
    // const distance = p1.getDistance(p2);
    // console.log(`khoang cach giua 2 diem la: ${distance}`);
    // p1.move(x,y);
}
taoPoint2D();

//bai 2 Circle
class Circle {
    constructor(tam, banKinh) {
        this.tam = tam;
        this.banKinh = banKinh;
    }
    scan() {
        const x = Number(readline.question('nhap hoanh do point2D moi '));
        const y = Number(readline.question('nhap tung do point2D moi '));
        const newTam = new Point2D(x, y);
        this.tam = newTam;
        console.log(this);
    }
}

function chayBai2() {
    const n2 = new Point2D(4, 5);
    const circle1 = new Circle(n2, 5);
    console.log(circle1);
    circle1.scan();
}
chayBai2();

class Rectangle {
    constructor(toaDo, dai, rong) {
        this.toaDo = Point2D;
        this.dai = x;
        this.rong = y;
    }
    scan() {

    }
}

function chayBai03() {
    // let Point2D = taoPoint2D();
    console.log(toaDo);

}
chayBai03();