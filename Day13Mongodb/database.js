const {MongoClient}= require('mongodb');

// @ == %40
// @ == hexadecimal: 0x40
const url="mongodb+srv://lucy:Prasad%40123@codingadda.xifhqtg.mongodb.net/";

const client= new MongoClient(url);

const dbName= 'CoderArmy'; //Database name

async function main(){
    //use connect method to connect

    await client.connect();
    console.log('Connected successfully to server');
    const db=client.db(dbName);
    const collection=db.collection('user');

    const findResult=collection.find({})
    //const ans= await findResult.toArray();
    console.log('Found documents =>',ans);



    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());




