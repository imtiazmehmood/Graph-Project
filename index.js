const express = require("express");
require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const port = process.env.PORT || 6000;

const app = express();

const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema/schema");
connectDB();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => console.log(`server is Running on port ${port}`));
