const bcrypt=require("bcrypt")

const password="rohit@123";

//hashcode+salt
async function Hashing(){

    const salt=await bcrypt.genSalt(10);

    const hashpass= await bcrypt.hash(password,salt); // 2^10 means how many time to run algorithm
    

    const ans=await bcrypt.compare("Rohit",hashpass);


    console.log(ans);
}

Hashing();