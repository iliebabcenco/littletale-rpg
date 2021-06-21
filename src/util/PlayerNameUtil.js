let playerName = 'unnamed'

const setName = (receivedName) => {
    playerName = receivedName
}

const getName = () => {
    return playerName
}

export { setName, getName }