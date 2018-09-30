export default class Card {
    constructor(color, icon) {
        this.color = color;
        this.icon = icon;

        this.isFlipped = false;
    }

    flip(flipState = true) {
        this.isFlipped = flipState;
    }
}
