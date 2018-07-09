const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        console.log('Unable to Connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert TODO', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Siddharth',
        age: 27,
        location: 'Philadelphia'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert user', err)
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});

