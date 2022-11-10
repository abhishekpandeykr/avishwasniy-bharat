import * as dotenv from 'dotenv'
import prod from './config/prod'
dotenv.config()

import app from './server'

app.listen(prod.port, () => {
    console.log(`hey your server is running at ${prod.port}`)
})