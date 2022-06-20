import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let tweets = [];

///

app.post('/sign-up', (request, response) => {
    const user = request.body;
    users.push(user);
    response.send("OK");
    console.log(users);
})

app.post('/tweets', (request, response) => {
    const tweet = request.body;
    tweets.push(tweet);
    response.send("OK");
    console.log(tweets);
})

app.get('/tweets', (request, response) => {
    response.send(tweets);
    console.log(tweets);
})

app.listen(5000);