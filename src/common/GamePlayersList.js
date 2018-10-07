export default class GamePlayersList {
    constructor(players) {
        this.players = players;
    }

    getNextPlayer(currentPlayer) {
        let numberOfPlayers = this.players.length,
            currentPlayerIndex = this.getPlayerIndex(currentPlayer),
            nextPlayerIndex = (currentPlayerIndex < (numberOfPlayers - 1)) ? (currentPlayerIndex + 1) : 0;

        return this.players[nextPlayerIndex];
    }

    getPlayer(searchedId) {
        let searchedPlayer;
        this.players.forEach((player) => {
            if (player.id === searchedId) {
                searchedPlayer = player;
            }
        });
        return searchedPlayer;
    }

    getPlayerIndex(searchedPlayer) {
        let searchedIndex = false;

        this.players.forEach((player, index) => {
            if (player.id === searchedPlayer.id) {
                searchedIndex = index;
            }
        });
        return searchedIndex;
    }
}
