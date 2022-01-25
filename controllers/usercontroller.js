const con = require('../config/db')

module.exports.getAllUsers = (req,res)=>{
    const sql = `select * from users `;

    con.execute(sql ,(err, result)=>{
        if(err){
            return res.json({
                message:"Error in fetching query !",
                err:err.sqlMessage
            })
        }        
            return res.status(200).json({
                message:"success !",
                result
            })        

    })
   
}

module.exports.usersWithAddress = (req,res)=>{

    const sql = `SELECT USERS.USER_ID ,USERS.FIRST_NAME , USERS.LAST_NAME , USERS.EMAIL , USERS.MOBILE_NO , USERS.DATE_OF_REGISTRATION ,
    USERS.USER_STATUS , USERS.GENDER , ADDRESS.ID , ADDRESS.HOUSE_NO , ADDRESS.LOCAL_ADDRESS , ADDRESS.DISTRICT , ADDRESS.STATE ,ADDRESS.COUNTRY ,
     ADDRESS.PINCODE , ADDRESS.CREATED_AT FROM USERS INNER JOIN ADDRESS ON USERS.USER_ID = ADDRESS.USER_ID`;

    con.execute(sql ,(err, result)=>{
        if(err){
            return res.json({
                message:"Error in fetching query !",
                err:err.sqlMessage
            })
        }        
            return res.status(200).json({
                message:"success !",
                result
            })        

    })
   
}

module.exports.usersWithHobby = (req,res)=>{
const sql = `SELECT USERS.USER_ID , USERS.FIRST_NAME , USERS.LAST_NAME , USERS.EMAIL , USERS.MOBILE_NO , USERS.DATE_OF_REGISTRATION ,
   USERS.USER_STATUS , USERS.GENDER , HOBBIES.ID , HOBBIES.HOBBY FROM USERS INNER JOIN HOBBIES ON USERS.USER_ID = HOBBIES.USER_ID`;

   con.execute(sql , (err , result)=>{
       if(err){
           return res.json({
               message:"Some error occured !",
               err:err.sqlMessage
           })
       }
       return res.json({
           message:"Success !",
           result
       })
   })
}

module.exports.usersWithActivity = (req,res)=>{
    const sql = `SELECT USERS.USER_ID , USERS.FIRST_NAME , USERS.LAST_NAME , USERS.EMAIL , USERS.MOBILE_NO , USERS.DATE_OF_REGISTRATION ,
    USERS.USER_STATUS , USERS.GENDER , ACTIVITIES.ID , ACTIVITIES.ACTIVITY FROM USERS INNER JOIN ACTIVITIES ON USERS.USER_ID = ACTIVITIES.USER_ID`;
    
       con.execute(sql , (err , result)=>{
           if(err){
               return res.json({
                   message:"Some error occured !",
                   err:err.sqlMessage
               })
           }
           return res.json({
               message:"Success !",
               result
           })
       })
    }

    module.exports.getAllDetail = (req,res)=>{
        const sql = ` SELECT DISTINCT USERS.USER_ID , USERS.FIRST_NAME , USERS.LAST_NAME , USERS.EMAIL , USERS.MOBILE_NO , USERS.DATE_OF_REGISTRATION ,
        USERS.USER_STATUS , USERS.GENDER , ADDRESS.HOUSE_NO , ADDRESS.LOCAL_ADDRESS , ADDRESS.DISTRICT , ADDRESS.STATE ,ADDRESS.COUNTRY , ADDRESS.PINCODE , 
        ADDRESS.CREATED_AT , HOBBIES.HOBBY , ACTIVITIES.ACTIVITY   FROM USERS INNER JOIN ADDRESS ON USERS.USER_ID = ADDRESS.USER_ID INNER JOIN HOBBIES ON 
        USERS.USER_ID = HOBBIES.USER_ID INNER JOIN ACTIVITIES ON USERS.USER_ID = ACTIVITIES.USER_ID`;

        con.execute(sql , (err , result)=>{
            if(err){
                return res.json({
                    message:"Some error occured !",
                    err:err.sqlMessage
                })
            }
            return res.json({
                message:"Success !",
                result
            })
        })

    }