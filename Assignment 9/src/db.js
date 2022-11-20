const mongoose =  require("mongoose");

module.export = () => {
    const connectParams = {
        useNewUrlParser: true,
        useUnifiedTopology:true,

    };

    try{
        mongoose.connect(process.env.DB)

    }catch(error){
        
    }
}