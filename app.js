const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "Enter your connections string here";
const DATABASE_NAME = "Your database name";
var CollectInDB = "Collect in DB you want to work with"

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

//Open Homepage...doesn't work yet. fix if you can :)
app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

var database, collection;

var port = 1234;

app.listen(port, () => {
  console.log("App is running at localhost:" + port);
  MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
      throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection(CollectInDB);
    console.log("Connected to `" + DATABASE_NAME + "`!");

  });
});





//Endpoints

//Create
app.post("/person", (request, response) => {
  collection.insertOne(request.body, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result.result);
  });
});



//Get all
app.get("/people", (request, response) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});


//Get Specific
app.get("/person/:id", (request, response) => {
  collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});