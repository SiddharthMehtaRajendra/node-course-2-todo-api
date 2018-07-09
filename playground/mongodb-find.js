const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        console.log('Unable to Connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b43a53bef2b314cd3fa0b93')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    //client.close();
});