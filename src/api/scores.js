const data = { name: 'Little Tale RPG' };
let id = ""

const setGame = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    mode: 'cors',
})
    .then(response => response.json())
    .then(data => {
        console.log('Success 1:', data);
        id = data.result.split(" ")[3]
        return id;
    }).catch(err => console.error("Error getting data: " + err))

const addScore = (name, score) => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SRxeGp2FFCVlaqwGJEgs/scores/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "user": name,
            "score": score
        }),
        mode: 'cors',
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success 1:', data);
            id = data.result.split(" ")[3]
            return id;
        }).catch(err => console.error("Error getting data: " + err))
}

addScore("John Doe", 15)
addScore("Fedot Andrei", 25)
addScore("Fedot Andrei", 13)

const getScores = () => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SRxeGp2FFCVlaqwGJEgs/scores/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success 2:', data);
            // id = data.result.split(" ")[3]
            // return id;
        }).catch(err => console.error("Error getting data: " + err))
}
getScores()
//id = SRxeGp2FFCVlaqwGJEgs 

export { addScore }