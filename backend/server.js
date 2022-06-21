require("dotenv").config()
const express = require("express")
const productRoutes = require("./routes/productRoutes")
const connectDB = require("./config/db")
const cors = require("cors")
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
connectDB()

const app = express()
if (!process.env.ISSUER_BASE_URL || !process.env.AUDIENCE) {
  throw 'Make sure you have ISSUER_BASE_URL, and AUDIENCE in your .env file';
}

const corsOptions =  {
  origin: 'http://localhost:3000'
};

app.use('/api/products', require('./routes/productRoutes'))
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())

app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
})

app.use("/api/products", productRoutes)
const checkJwt = auth();

app.get('/api/public', function(req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  })
})

app.get('/api/private', checkJwt, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  })
})

app.get('/api/private-scoped', checkJwt, requiredScopes('read:messages'), function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  })
})

app.use(function(err, req, res, next){
  console.error(err.stack);
  return res.set(err.headers).status(err.status).json({ message: err.message });
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))