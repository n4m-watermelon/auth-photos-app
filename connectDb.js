const mongoose = require('mongoose');
async function connect() {
    try {
         await mongoose.connect(process.env.DATABASE_URL ,{ useNewUrlParser: true, useUnifiedTopology: true });
         console.log("connected to db !")

    } catch (error) {
        console.log("connected to failure!")
    }

}



module.exports = {connect}