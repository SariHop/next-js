import moongoose  from 'mongoose'
const MONGO_URI = process.env.MONGO_URI || ""

const connect = async ()=>{
    try{
        await moongoose.connect(MONGO_URI)
        console.log("conecct Mongodb")
    }catch{
        console.error()
    }
}

export default connect