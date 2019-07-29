# Memory Game

It is a card game designed for two people play against each other. You need to match pairs of tiles. 
Observation, concentration and memory are key to success, but... it is very easy. Enjoy!

[![Play](http://marcin.silversite.pl/demo/memory/play.png)](https://marcin.silversite.pl/demo/memory/#/game)

###  --- under construction ---

![underconstruction](https://octodex.github.com/images/constructocat2.jpg)

### Rules 
 
 - Click "Start"
 - Insert names of two players
 - Click "Play" to mix up the cards and start the game
 
 There are six unique pairs of cards, making 12 cards total. Cards are laid out in a grid. All cards are face down and players take turns flipping pairs of cards over.
  
  - Turn over any two cards by click them
  - If two cards match, the player scores 1 point, the 2 cards are removed and the player gets another turn
  - If they do not match, the cards are turned back over
  
  When cards are turned over, it is important to remember what was on each card and where it was. 
  
  - The game is over when all the cards have been removed
  - The player with the most points wins
 
 Sources of rules text: [eduplace.com](https://www.eduplace.com/ss/act/rules.html) and [rinkworks.com](http://www.rinkworks.com/games/memory.shtml).

## Development

Memory was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

#### Tech stack and Features

Memory uses a number of open source projects to work properly:

 * [Webpack 4](https://webpack.js.org/) - module bundler
 * [**Angular 8**](https://angular.io/) - single-page application (SPA) framework
 * [TypeScript](https://www.typescriptlang.org/) - typed superset of JavaScript


more on: [project plan](https://github.com/cichy380/Memory/projects)

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## License

Code released under the [MIT license](LICENSE.md).
