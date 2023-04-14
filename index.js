const express = require('express');
const cors = require('cors');
const app = express ();
require('dotenv').config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

// middleware
app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zkcjl29.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
  try {
    const jobsOptionCollection = client.db('JobPortals').collection('jobs')
    


    app.get('/jobs', async(req, res) => {
      const query = {}
      const options = await jobsOptionCollection.find(query).toArray();
      res.send(options);
    })
    
  } finally {
    
    
  }
}
run().catch(console.log);



app.get('/', async(req, res) => {
    res.send('server is running');
});
app.listen (port, ()=> console.log(`server running on ${port}`));