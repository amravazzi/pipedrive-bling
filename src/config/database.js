import mongoose from 'mongoose';

const connection = mongoose.connect(process.env.DSN, {
	useNewUrlParser: true
})
.then(() => {
	console.log('MongoDB is connected');
})
.catch(error => {
	console.log(error);
});

export default connection;
