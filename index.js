import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let tweets = [];
let tweetsUsers = [];

///

app.post('/sign-up', (request, response) => {
    const user = request.body;

    if(user.username && user.avatar){
        users.push(user);
        response.send("OK");
    }else{
        response.sendStatus(400);
        response.send("Todos os campos são obrigatórios");
    }

})

app.post('/tweets', (request, response) => {
    const tweet = request.body;
    tweets.push(tweet);

    if(tweet.tweet && tweet.username){
        let avatar = "";
        for(let i=0;i<users.length;i++){
            if(tweet.username === users[i].username){
                avatar=users[i].avatar;
            }
        }
    
    
        tweetsUsers.push(
            {
                "username": tweet.username,
                "tweet": tweet.tweet,
                "avatar": avatar
            }
        )
        response.send("OK");
    }else{
        response.sendStatus(400);
        response.send("Preencha o tweet corretamente!");
    }



})

app.get('/tweets', (request, response) => {

    let returnArray = [];
    for (let i=tweetsUsers.length;i>0;i--){
        console.log("entrou");
        if(returnArray.length < 10){
            returnArray.push(tweetsUsers[i-1]);
        }else{
            break;
        }
    }

    response.send(returnArray);
    console.log("return array: ");
    console.log(returnArray);
})

app.listen(5000);