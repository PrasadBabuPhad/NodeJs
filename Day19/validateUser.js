//re.body ke andar firstname present ho na hai

function validateUser(data){

        const mandatoryField=["firstName","emailId","age"]

        const IsAllowed =mandatoryField.every((k)=>Object.keys(data).includes(k));

        if(!IsAllowed)
            throw new Error("Fields are Missing");

        if(!validator.isEmail(data.emailId))
            throw new Error("Fields Missing");

        if(!validator.isStrongPassword(data.password))
            throw new Error ("Week Password");

        if(!(data.firstName.length>=3  && data.firstName.length<=20))
            throw new Error("Name should have atleast 3 characcters atmost 20 char");

};

module.exports=validateUserl