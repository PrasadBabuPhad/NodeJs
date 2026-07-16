//re.body ke andar firstname present ho na hai

function validateUser(){

        const mandatoryField=["firstName","emailId","age"]

        const IsAllowed =mandatoryField.every((k)=>Object.keys(req.body).includes(k));

        if(!IsAllowed)
            throw new Error("Fields are Missing");

        if(validator.isEmail(Date.emailId))

};

module.exports=validateUserl