//class declaratspaion has a constructor method
class SPaceShutle{
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }

}
const spaceX = new SPaceShutle('speed', 'blue', 'red');
console.log(spaceX.targetPlanet);

class Polygon{
    constructor() {
        this.name = 'polygon';
    }
}
const poly1 = new Polygon();

console.log(poly1.name);


class Vegetables{
    constructor() {
        this.name = 'carrot';
    }
}
const carrot = new Vegetables('carrot');
console.log(carrot.name);