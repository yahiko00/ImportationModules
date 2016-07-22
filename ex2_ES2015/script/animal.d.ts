export declare abstract class Animal {
    name: string;
    constructor(name: string);
    abstract shout();
}

export declare class Snail extends Animal {
    shout();
}

export declare enum Sex { MALE, FEMALE }

export declare class Lion extends Animal {
    sex: Sex;
    constructor(name: string, sex: Sex);
    shout();
}
