import mongoose from "mongoose";

const connectDB = async () => {
	if (mongoose.connections[0].readyState) {
		return;
	}
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/StarGramApp');
	} catch (error) {
		console.error('Fehler bei der DB-Verbindung', error);
	}
}

export default connectDB;