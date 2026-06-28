const mongoose=require("mongoose");
const {Schema} =mongoose;


async function main(){
    await mongoose.connect("mongodb+srv://lucy:Prasad%40123@codingadda.xifhqtg.mongodb.net/Instagram");
                            
}

module.exports=main;