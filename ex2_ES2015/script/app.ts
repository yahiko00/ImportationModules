import * as Animal from "animal"; // Module ES6

export function start() {
    let garry = new Animal.Snail('Garry');
    let simbad = new Animal.Lion('Simbad', Animal.Sex.MALE);
    
    console.log(garry.name);
    console.log(simbad.name, simbad.sex);
}
