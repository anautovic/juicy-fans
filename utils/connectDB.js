import mongoose from 'mongoose'
const connectDB = () =>{
    if(mongoose.connections[0].readyState){
        console.log('Alraedy connected')
        return;
    
    }
    mongoose.connect(process.env.MONGO_URL, {
        useCreateIndex:true,
        useFindAndModify: false,
        useNewUrlParser:true,
        useUnifiedTopology:true
    }, err =>{
        if(err) throw err;
        console.log('connect to mongodb')
        
    })
}