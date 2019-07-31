import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public columns: number

  constructor() { }

  ngOnInit() {
    console.log('window.innerWidth: ', window.innerWidth)
    this.columns = this.getColumns(window.innerWidth)
  }

  public onResize(event) {
    console.log('event.target.innerWidth: ', event.target.innerWidth)
    this.columns = this.getColumns(event.target.innerWidth)
  }

  private getColumns(deviceWidth) {
    let columnNumber: number

    if (deviceWidth >= 992) {
      columnNumber = 6
    } else if (deviceWidth >= 768) {
      columnNumber = 4
    } else {
      columnNumber = 3
    }

    return columnNumber
  }
}
