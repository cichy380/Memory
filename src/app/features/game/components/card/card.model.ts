export class Card {
  constructor(
    public suit: CardSuits,
    public color: CardColors,
  ) {}
}

export enum CardSuits {
  'alarm',
  'favorite_border',
  'lightbulb_outline',
  'insert_emoticon',
  'cloud_queue',
  'directions_bike',
  'flight',
  'notifications_none',
  'anchor',
  'pets',
  'attach_file',
  'format_paint',
  'directions_boat',
  'directions_car',
  'directions_run',
  'local_fire_department',
  'local_florist',
  'local_gas_station',
  'local_phone',
  'wine_bar',
}

export enum CardColors {
  'red',
  'pink',
  'purple',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'orange',
  'brown',
}
