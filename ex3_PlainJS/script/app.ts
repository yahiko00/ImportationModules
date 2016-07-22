import Metal = require('metal'); // Plain JS

export function start() {
    let gold = new Metal('Gold', 1064);

    console.log(gold.name, gold.meltingPoint);
}
