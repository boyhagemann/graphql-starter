import express from 'express'
import graphQLHTTP from 'express-graphql'
import {schema} from '../data/schema'

// Add routes
const app = express();
app.use('/graphql', graphQLHTTP({
    schema: schema,
    graphiql: true,
    pretty: true
}));

// Start the server
app.listen(3000, function() {
    console.log('Server online on port ', 3000);
});