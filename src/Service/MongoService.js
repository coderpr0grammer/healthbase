const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://<user>:<password>@cluster0.n8ezs56.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function find(num) {
    try {
        await client.connect();
        const db = client.db('HealthBase');
        const coll = db.collection('Patients');
        let query = coll.find().limit(num);

        return query;
    } finally {
        await client.close();
    }
}

init().catch( error => {
    console.log(error);
    return null;
});