const mongoose = require('mongoose');
request('dotenv').config()


const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("DB Connected")
        })
        .catch(err => {
            console.log("OH NO ERROR!!!!")
            console.log(err)
            process.exit(1)
        })
}

module.exports = dbConnect;