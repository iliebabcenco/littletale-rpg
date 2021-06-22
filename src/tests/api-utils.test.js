import fetchMock from 'jest-fetch-mock';
import 'regenerator-runtime/runtime';
import { getScores, addScore } from '../api/scores';

fetchMock.enableMocks();
beforeEach(() => {
    fetch.resetMocks();
});

test('receive JSON object using GET method', () => {
    getScores().then((data) => {
        expect(typeof data).toBe('object');
    });
});


test('Fail to post data, without score as parameter', () => {
    addScore('ilie', 100).then((data) => {
        expect(data).toEqual({
            result: 'Leaderboard score created correctly.',
        });
    });
});


test('receive object data', () => {
    getScores().then((data) => {
        expect(typeof data).toBe('object');
    });
});

test('fail to receive object data', () => {
    getScores('wrong key').then((data) => {
        expect(data).toHaveLength(0);
    });
});

test('fail to post data, without username as parameter', () => {
    addScore().then((data) => {
        expect(data).toEqual({
            message: 'You need to provide a valid user for the score',
        });
    });
});
