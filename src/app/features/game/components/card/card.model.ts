export class Card {
  constructor(
    public suit: CardSuits,
    public color: CardColors,
  ) {}
}

export enum CardSuits {
  'alarm',
  'favorite',
  'star',
  'insert_emoticon',
  'cloud',
  'directions_bike',
  'flight',
  'notifications',
  'anchor',
  'pets',
  'directions_boat',
  'directions_car',
  'directions_run',
  'local_fire_department',
  'local_florist',
  'local_gas_station',
  'local_phone',
  'wine_bar',
  'flash_on',
  'home',
  'beach_access',
}

export enum CardColors {
  'red',
  'pink',
  'purple',
  'indigo',
  'blue',
  'cyan',
  'green',
  'orange',
}
