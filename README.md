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

Memory will be a cloud-enabled, mobile-ready, offline-storage, VueJS powered online game. Feel free to join us to develop it!

### Tech stack and Features

Memory uses a number of open source projects to work properly:

 * [Webpack 4](https://webpack.js.org/) - module bundler
 * [**Vue 2**](https://vuejs.org) - single-page application (SPA)
 * [Vue Router 2](https://github.com/vuejs/vue-router) - official router
 * [TypeScript 3](https://www.typescriptlang.org/)
 * [Bootstrap 4](http://getbootstrap.com/) - only CSS ([SASS](https://sass-lang.com/))
 * [FontAwesome 5](https://fontawesome.com/) - icons instead of images
 * [PWA](https://developers.google.com/web/progressive-web-apps/) - offline experiences
 * [Socket.IO 2](https://socket.io/) - **???** - multi devices play possible
                                               

### Environment installation 

1. Developing Memory requires [Node.js](http://nodejs.org/download/). 
2. I recommend you installation to the latest version of [Yarn](https://yarnpkg.com/en/) globally.
3. Clone the repo.
4. From the command line run `yarn` (recommended) or `npm install`.
5. For best developer environment install browsersync, webpack-cli and webpack-dev-server etc.:

    `npm install --dev`

### Commands:

* `yarn dev` or `npm run dev` — compile assets for developing (with source maps, without minify)
* `yarn watch` or `npm watch` — compile assets when file changes are made
* `yarn build` or `npm run buld` — compile and optimize the files in your assets directory

### Todo

 - konfiguracja środowiska (Webpack)
 - ~~routing/SPA dla obsługi kilku zakładek~~ 
 - stworzenie struktury aplikacji opartej na klasach (TypeScript: Users, Scores...)
 - ~~stworzenie struktury CSS (opartej na BS4)~~
 - ~~karty z symbolami (konfiguracja kolorów i symboli z poziomu osobnego config.js) opartymi na FontAwesome (bez obrazów)~~
 - ~~animacje obrazania kart~~
 - klasa odpowiedzialna za logikę gry (losowanie układów, liczenie czasu gry, zapisywanie wyników...)
 - klasa odpowiedzialna za obsługę localStorage (zapisywanie stanu gry, wyników...)
 - wykorzystanie PWA do umożliwienia: 
    * robienia skrótów na pulpicie urządzeń mobilnych
    * usunięcia paska adresu przeglądarki
    * stworzenia wersji offline (Service Worker)
    * publikacji komunikatów ??? od innych graczy chcących grać z nami
 - Testy i sprawdzanie poprawności kodu za pomocą np. ESLint
 - Server z API do zapisywania wyników gry ??? czyli logowanie się 

## License

Code released under the [MIT license](LICENSE.md).
