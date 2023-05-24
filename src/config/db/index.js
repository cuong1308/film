const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;
const uuid = require('uuid');

const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Film', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully')
    } catch (error) {
        console.log('Connect failed')
    }
}

module.exports = { connect }


// const url = 'mongodb://localhost:27017/Film';
// const settings = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };


// async function insertDataFromApiToMongoDB(apiUrl, collectionName) {
//   try {

//     const response = await axios.get(apiUrl);
//     const result = response.data.results;

//     // Convert data to an array of documents
//       //const docs = Object.values(data);

//     if (!Array.isArray(result)) {
//         throw new Error('Data is not an array');
//       }

//      // Add unique _id to each document
//       const docs = result.map(doc => ({
//         ...doc,
//         _id: uuid.v4()
//       }));

//     // Connect to MongoDB
//     const client = await MongoClient.connect(url, settings);
//     const db = client.db();
//     const collection = db.collection(collectionName);

//     // Insert data into MongoDB
//     const rs = await collection.insertMany(docs);    
//     console.log(`${rs.insertedCount} documents inserted into ${collectionName}.`);

//     // Close connection to MongoDB
//     client.close();
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// module.exports = { insertDataFromApiToMongoDB }
