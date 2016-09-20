var express = require('express')
var { buildSchema } = require('graphql')
var graphqlHTTP = require('express-graphql')

var PORT = 3000

var app = express()

var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

var root = { hello: () => 'Hello world!' }

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))


app.listen(PORT, () => {
  console.log('Listening on ' + PORT)
})
