let playerName = 'unnamed';

const setName = (receivedName) => {
  playerName = receivedName;
};

const getName = () => playerName;

export { setName, getName };