var express = require('express');
var app = express();
var port = process.env.port || 3000;

const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://trantrung951:trung101200@cluster0.qn8axpu.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
let dbCollection;

function dbConnection(collectionName) {
    client.connect(err => {
        dbCollection = client.db().collection(collectionName);
        if (!err) {
            console.log('DB Connected');
            console.log(dbCollection);
        } else {
            console.log(err);
        }
    });
}

function addCat(cat, callback) {
    dbCollection.insertOne(cat, callback);
}

function getAllCats(callback) {
    dbCollection.find().toArray(callback);
}

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port,()=>{
    console.log('App listening to: ' + port);
    dbConnection('Cats')
});