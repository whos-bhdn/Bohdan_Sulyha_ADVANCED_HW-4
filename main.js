// •	Створити клас Human із своїми властивостями та методами, які можуть бути у людини
// (вміння говорити, ходити, вага, колір шкіри і т.д.).
// •	Від цього класу повинні наслідуватись
// 2 інших класи, клас Man, клас Woman.
// •	Далі розширюєм функціонал – для Woman дати ще 2 класи наслідники
// Librarian і Nurse та прописати методи та властивості які притаманні таким професіям.
// •	Для Man – дати також 2 класи Hunter і Worker та прописати методи та властивості
// які притаманні таким професіям.



class Human {
    constructor(skinColor, weigth, height) {
        this.color = skinColor;
        this.weight = weigth;
        this.height = height;
    }
    walk(){
        console.log(`I can walk`);
    }
    sleep(){
        console.log(`I can sleep`);
    }
    eat(){
        console.log(`I can eat`);
    }
}

let hmn = new Human('black', 55, 190);
// console.log(hmn)
// hmn.walk();
// hmn.sleep()
// hmn.eat()

class Man extends Human {
    constructor(skinColor, weigth, height) {
        super();
        this.color = skinColor;
        this.weight = weigth;
        this.height = height;
    };
    hardWork(){
        console.log(`I can hard work`);
    }
}

let man1 = new Man('white', 80, 190);
console.log(man1);
man1.sleep()


class Woman  extends Human{
    constructor(skinColor, weigth, height) {
        super();
        this.color = skinColor;
        this.weight = weigth;
        this.height = height;
    }
    officeWork(){
        console.log(`I can do office work`);
    }
}

let wmn1 = new Woman('white', 40, 155)
console.log(wmn1);
wmn1.sleep()
wmn1.eat()

class Librarian extends Woman{
    constructor(skinColor, weigth, height) {
        super();
        this.color = skinColor;
        this.weight = weigth;
        this.height = height;
    }
    chooseBook(){
        console.log(`I help you to choose a book`)
    }
}

let lbr1 = new Librarian('white', 55, 168);
console.log(lbr1);
lbr1.chooseBook();
lbr1.walk()

class Nurse extends Woman{
    constructor(skinColor, weigth, height) {
        super();
        this.color = skinColor;
        this.weight = weigth;
        this.height = height;
    }
    injection() {
        console.log(`Make an injection?`)
    }
}

let nrs1 = new Nurse('black', 80, 193);
console.log(nrs1)
nrs1.eat()
nrs1.injection()

class Hunter extends Man{
    constructor(skinColor, weigth, height) {
        super();
        this.color = skinColor;
        this.weight = weigth;
        this.height = height;
    }
    hunt(){
        console.log(`I can hunting`)
    }
}

let hntr1 = new Hunter('black', 90, 196);
console.log(hntr1);
hntr1.eat();
hntr1.hunt();

class Worker extends Man{
    constructor(skinColor, weigth, height) {
        super();
        this.color = skinColor;
        this.weight = weigth;
        this.height = height;
    }
    rapair(){
        console.log(`I can make repairs in the apartment`)
    }
}

let wrkr1 = new Worker('dark', 86, 186);
console.log(wrkr1);
wrkr1.rapair();
wrkr1.walk()