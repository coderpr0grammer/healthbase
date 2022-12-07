const { MongoClient } = require('mongodb');

let client = null;
let collection = null;

/**
 * Opens connection between client and database
 */
async function databaseConnect() {
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster-app.mxqexwg.mongodb.net/?retryWrites=true&w=majority`;
    try {
        client = new MongoClient(uri);
        await client.connect();
        let db = client.db(process.env.DATABASE_NAME); // gets database from mongodb
        collection = db.collection(process.env.DATABASE_COLLECTION);    // sets collection to collection var
        console.log('Successfully connected to database.')
    } catch {
        console.log(e);
    }
}

/**
 * Closes database connection if client not null
 */
async function databaseClose() {
    if (client == null) {
        return;
    }
    client.close();
}

/**
 * Queries the first user-given amount of entrees within the database.
 *  
 * @param {*} num limit for query 
 * @returns array containing objects found within patients collection
 */
async function getPatientList(num) {
    if (client == null) {
        return;
    }

    return collection.find().limit(num).toArray();
}

/**
 * Adds new patient object to collection
 * 
 * @param {*} patient patient object to be added
 */
async function addPatient(patient) {
    if (patient == null) {
        console.log('Cannot insert a null object');
        return;
    }
    
}
