const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://trantrung951:trung101200@cluster0.qn8axpu.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

client.connect(err => {
    if (!err) {
        console.log('DB Connected');
    } else {
        console.log(err);
        process.exit(1);
    }
});

module.exports = client;
