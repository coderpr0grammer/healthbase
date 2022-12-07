const { MongoClient } = require("mongodb");

let tempUN = "[I will insert user here soon]"
let tempPW = "[I will insert pass here soon]" 

const uri = "mongodb+srv://" + tempUN + ":" + tempPW + "@<cluster-url>?retryWrites=true&writeConcern=majority";
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