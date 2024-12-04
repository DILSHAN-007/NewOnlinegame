const socket = io('https://your-github-pages-url.herokuapp.com'); // Use your Heroku URL for server-side connection

let player = null;

// Start the game button
document.getElementById('startGameButton').addEventListener('click', () => {
  socket.emit('startGame');
});

// Listening to player updates from the server
socket.on('playerJoined', (playerData) => {
  console.log('Player Joined: ', playerData);
  let playersDiv = document.getElementById('players');
  playersDiv.innerHTML += `<p>Player ${playerData.id} joined the game</p>`;
});

socket.on('gameStarted', () => {
  console.log('Game Started!');
});
