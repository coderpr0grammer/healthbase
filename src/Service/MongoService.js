const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
const client = new MongoClient(uri);

async function find(num) {
    try {
        await client.connect();
        const db = client.db('HealthBase');
        const coll = db.collection('Patients');
        let query = db.find().limit(num);

        return query;
    } finally {
        await client.close();
    }
}

init().catch( error => {
    console.log(error);
    return null;
});