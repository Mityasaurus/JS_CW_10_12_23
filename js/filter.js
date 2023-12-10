const numbers = [5, 10, 15, 20, 25];

console.log(numbers);

const filteredNumbers = numbers.filter((n) => n < 10 || n > 20);
console.log(filteredNumbers);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

const onlinePlayers = players.filter(({ online }) => online);
console.table(onlinePlayers);

const offlinePlayers = players.filter(({ online }) => !online);
console.table(offlinePlayers);

const more250HoursPlayers = players.filter(
  ({ timePlayed }) => timePlayed > 250
);
console.table(more250HoursPlayers);
