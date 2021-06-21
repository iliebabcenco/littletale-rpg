const fetch = require('node-fetch');

const getTopScores = (object) => {
    const arr = [];
    for (let i = 0; i < object.length; i += 1) {
        arr.push([object[i].user, object[i].score]);
    }
    const sortedArr = Array.from(arr).sort((a, b) => b[1] - a[1]);
    return sortedArr.slice(0, 8);
};

// lmd2CLWauEltL5CJQXu8
// zRp5Vbver4eNF1dRN3Zf

const addScore = async (name, score, id = 'zRp5Vbver4eNF1dRN3Zf') => {
    try {
        const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "user": name,
                "score": score
            }),
        })
        console.log("before data in add Score method")
        const data = await response.json()
        console.log(data)
        return data
    } catch (err) {
        return "Error getting data: " + err
    }
}

const getScores = async (id = 'zRp5Vbver4eNF1dRN3Zf') => {
    try {
        const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        const answer = await response.json()
        console.log(answer)
        return getTopScores(answer.result)
    } catch (error) {
        return error
    }
}


export { addScore, getScores }