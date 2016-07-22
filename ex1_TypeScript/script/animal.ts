export abstract class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    abstract shout(): string;
}

export class Snail extends Animal {
    shout(): string {
        return '...';
    }
}

export enum Sex { MALE, FEMALE };

export class Lion extends Animal {
    sex: Sex;

    constructor(name: string, sex: Sex) {
        super(name);
        this.sex = sex;
    }

    shout(): string {
        return 'Rooooaarrr!'
    }
}
