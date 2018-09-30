export default class Card {
    constructor(color, icon) {
        this.color = color;
        this.icon = icon;
        this.id = this.generateId();

        this.isFlipped = false;
    }

    flip(flipState = true) {
        this.isFlipped = flipState;
    }

    generateId() {
        return 'cid' + Math.random().toString(36).substr(2, 9);
    }
}
