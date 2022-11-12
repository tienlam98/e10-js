const readline = require('readline-sync');

class Point2D {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    scan() {
        this.x = Number(readline.question(`Nhap hoanh do: `));
        this.y = Number(readline.question(`Nhap tung do: `));
    }
    print() {
        console.log(`Điểm có toạ độ là:  + ${this.x} , ${this.y}`);
    }
    getDistance(point) {
        let d = Math.sqrt((point.x - this.x)**2 + (point.y - this.y)**2);
        return d;

    }
    move(dx, dy) {
        this.x = this.x + dx;
        this.y = this.y + dy;
    }
}

function taoPoint2D() {
    let p1 = new Point2D(4,6);
    p1.scan();
    // let p2 = new Point2D(4,6);
    // p2.scan();
    p1.print();
    // const distance = p1.getDistance(p2);
    // console.log(`khoang cach giua 2 diem la: ${distance}`);
    p1.move(2,3);
    p1.print();
}
taoPoint2D();



//bai 2 Circle
class Circle {
    constructor(tam, banKinh) {
        this.tam = new Point2D(tam.x, tam.y);
        this.banKinh = banKinh;
    }
    scan() {
        this.banKinh = Number(readline.question(`Nhap ban kinh hinh tron: `));
        this.tam.scan();
    }
    print() {
        console.log(this);
    }  
    getArea() {
        const dienTich = this.banKinh ** 2 * 3.14;
        return dienTich;
    }
}

function chayBai2() {
    const n2 = new Point2D(4, 4);
    const circle1 = new Circle(n2, 5);
    console.log(circle1);
    circle1.scan();
    circle1.print();
    console.log(circle1.getArea());
}
chayBai2();

class Rectangle {
    constructor(toaDo, dai, rong) {
        this.toaDo = toaDo;
        this.dai = dai;
        this.rong = rong;
    }
    scan() {
        const x = Number(readline.question('nhap hoanh do point2D moi '));
        const y = Number(readline.question('nhap tung do point2D moi '));
        const toaDoMoi = new Point2D(x, y);
        this.toaDo = toaDoMoi;
    }
    print() {
        console.log(this.toaDo);
    }
    getArea() {
        const dienTichChuNhat = this.dai * this.rong;
        console.log(`dien tich hinh chu nhat la ${dienTichChuNhat}`);
    }
}

function chayBai03() {
    const r1 = new Point2D(5, 10);
    const rectangle1 = new Rectangle(r1, 20, 10);
    console.log(rectangle1);
    rectangle1.print();
    rectangle1.getArea();
}
// chayBai03();


// bai03 Square
class Square {
    constructor(toaDoHinhVuong, chieuDaiCanh) {
        this.toaDoHinhVuong = toaDoHinhVuong;
        this.chieuDaiCanh = chieuDaiCanh;
    }
    scan() {
        const x = Number(readline.question('nhap hoanh do moi cho hinh vuong: '));
        const y = Number(readline.question('nhap tung do moi cho hinh vuong: '));
        const toaDoHinhVuongMoi = new Point2D(x, y);
        this.toaDoHinhVuong = toaDoHinhVuongMoi;
    }
    print() {
        console.log(this.toaDoHinhVuong);
    }
    getArea() {
        const dienTichHinhVuong = this.chieuDaiCanh **2;
        console.log(`dien tich hinh vuong la: ${dienTichHinhVuong}`);
    }
}

function chayBai04() {
    const a1 = new Point2D(8, 8);
    const square1 = new Square(a1, 10);
    console.log(square1);
    square1.scan();
    square1.print();
    square1.getArea();
}
// chayBai04();