import * as zod from "zod"


export const schema = zod.object({
    name:zod.string().nonempty("Name is required").min(3,"name must be at least 3 charachters"),
    phone:zod.string().nonempty("Phone is Required").regex(/^01[0125][0-9]{8}$/,"invalid egyptian phone Number"),
    email:zod.email("invalid email address"),
    password:zod.string().nonempty("password is required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
    rePassword:zod.string().nonempty("RePassword is required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character")
}).refine((data)=>data.password===data.rePassword,{
    path:["rePassword"],
    error:"passwords don't match"
})



