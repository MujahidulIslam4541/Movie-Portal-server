require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const port = process.env.PROT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// middleware
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.oo75q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // const database = client.db("sample_mflix");
    // const movies = database.collection("movies");

    const MoviesConnection = client.db("Movies_Portal").collection("Movies");
    const favoritesMovies = client
      .db("Movies_Portal")
      .collection("favorite_movie");

    app.post("/favorite", async (req, res) => {
      const favoriteMovies = req.body;
      const result = await favoritesMovies.insertOne(favoriteMovies);
      res.send(result);
    });

    app.get("/favorite", async (req, res) => {
      const cursor = favoritesMovies.find();
      const result = await cursor.toArray(cursor);
      res.send(result);
    });

    app.get("/favorite/:id", async (req, res) => {
      console.log(req.params.id);
      const cursor = await favoritesMovies.findOne({ _id: req.params.id });
      res.send(cursor);
    });

    app.delete("/favorite/:id", async (req, res) => {
      const id = req.params.id;
      const quarry = { _id: id };
      const result = await favoritesMovies.deleteOne(quarry);
      res.send(result);
    });

    app.post("/movies", async (req, res) => {
      const AddMovies = req.body;
      const result = await MoviesConnection.insertOne(AddMovies);
      res.send(result);
    });

    app.get("/movies", async (req, res) => {
      const cursor = MoviesConnection.find();
      const result = await cursor.toArray(cursor);
      res.send(result);
    });

    app.get("/movies/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const quarry = { _id: new ObjectId(id) };
      const result = await MoviesConnection.findOne(quarry);
      res.send(result);
    });

    app.put("/movies/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateMovie = req.body;
      const updatedMovie = {
        $set: {
          title: updateMovie.title,
          duration: updateMovie.duration,
          genre: updateMovie.genre,
          rating: updateMovie.rating,
          release: updateMovie.release,
          textarea: updateMovie.textarea,
          photo: updateMovie.photo,
        },
      };
      const result = await MoviesConnection.updateOne(
        filter,
        updatedMovie,
        options
      );
      res.send(result);
    });

    app.delete("/movies/:id", async (req, res) => {
      const id = req.params.id;
      const quarry = { _id: new ObjectId(id) };
      const result = await MoviesConnection.deleteOne(quarry);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Connected express js");
});
app.listen(port, () => {
  console.log("this project running ", port);
});
