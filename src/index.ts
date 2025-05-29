import * as express from 'express';
import * as mongoose from 'mongoose'
import { getEnvironmentVariables } from './environments/environment';

let app : express.Application = express();

app.listen(3000, () => {
    console.log("Server they run at port 300");
});

mongoose.connect(getEnvironmentVariables().db_uri)
.then(() => {
    console.log('Connected to Mongo successfully');
})
