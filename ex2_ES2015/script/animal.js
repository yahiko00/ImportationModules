class Animal {
    constructor(name) {
      this.name = name;
    }

    shout() {}
}

export class Snail extends Animal {
    shout() {
        return '...';
    }
}

export const Sex = { MALE: 0, FEMALE: 1 };

export class Lion extends Animal {
    constructor(name, sex) {
        super(name);
        this.sex = sex;
    }

    shout() {
        return 'Rooooaarrr!'
    }
}
