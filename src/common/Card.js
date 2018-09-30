export default class Card {
    constructor(color, icon) {
        this.color = color;
        this.icon = icon;

        this.isFlipped = false;
    }

    flip() {
        this.isFlipped = true;
    }
}
