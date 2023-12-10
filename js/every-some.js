const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

// every

const isAllOnline = players.every((p) => p.online);
console.log(isAllOnline);

const isSomeoneOnline = players.some((p) => p.online);
console.log(isSomeoneOnline);

const anyHardcorePlayers = players.some((p) => p.timePlayed > 400);
console.log(anyHardcorePlayers);
