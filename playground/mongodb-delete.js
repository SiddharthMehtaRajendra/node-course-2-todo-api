const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        console.log('Unable to Connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
        console.log(result);
    });

    //client.close();
});