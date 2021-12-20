const mongoose = require ('mongoose');

const connectdb = () => {
    main ().catch ((err) => console.log (err))

    async function main () {
        await mongoose.connect ("mongodb+srv://pujiwrd:4n4klebay24@cluster0.bzf9n.mongodb.net/dbBackend3?retryWrites=true&w=majority");
        console.log ('mongoose connected');


}
};

module.exports = connectdb;
