const con = require('../config/db');
const _ = require('lodash')

module.exports.getAllUsers = (req, res) => {
    const sql = `select * from users `;
    con.execute(sql, (err, result) => {
        if (err) {
            return res.json({
                message: "Error in fetching query !",
                status:0,
                err: err.sqlMessage
            })
        }
        return res.status(200).json({
            message: "success !",
            status:1,
            response:result
        })
    })
}

module.exports.usersWithAddress = (req, res) => {
    const sql = `select users.user_id ,users.first_name , users.last_name , users.email , users.mobile_no , users.date_of_registration ,
    users.user_status , users.gender , address.id , address.house_no , address.local_address , address.district , address.state ,address.country ,
     address.pincode , address.created_at from  users inner join address on users.user_id = address.user_id`;

    con.execute(sql, (err, result) => {
        if (err) {
            return res.json({
                message: "Error in fetching query !",
                status:0,
                err: err.sqlMessage
            })
        }
        let arr = []
        _.map(result, (x) => {
            let userDetail = {
                basicDetail: {
                    user_id: x.user_id,
                    first_name: x.first_name,
                    last_name: x.last_name,
                    email: x.email,
                    mobile_no: x.mobile_no,
                    date_of_registration: x.date_of_registration,
                    user_status: x.user_status,
                    gender: x.gender
                },
                address: {
                    house_no: x.house_no,
                    local_address: x.local_address,
                    district: x.district,
                    state: x.state,
                    country: x.country,
                    pincode: x.pincode,
                    created_at: x.created_at
                }

            };
            arr.push(userDetail);
        })
        return res.status(200).json({
            message: "success !",
            status:1,
            response:arr
        })
    })
}

module.exports.usersWithHobby = (req, res) => {
    const sql = `SELECT USERS.USER_ID , USERS.FIRST_NAME , USERS.LAST_NAME , USERS.EMAIL , USERS.MOBILE_NO , USERS.DATE_OF_REGISTRATION ,
   USERS.USER_STATUS , USERS.GENDER , HOBBIES.ID , HOBBIES.HOBBY FROM USERS INNER JOIN HOBBIES ON USERS.USER_ID = HOBBIES.USER_ID`;

    con.execute(sql, (err, result) => {
        if (err) {
            return res.json({
                message: "Some error occured !",
                status:0,
                err: err.sqlMessage
            })
        }
        let arr = []
        _.map(result, (x) => {

            let userDetail = {
                basicDetail: {
                    user_id: x.USER_ID,
                    first_name: x.FIRST_NAME,
                    last_name: x.LAST_NAME,
                    email: x.EMAIL,
                    mobile_no: x.MOBILE_NO,
                    date_of_registration: x.DATE_OF_REGISTRATION,
                    user_status: x.USER_STATUS,
                    gender: x.GENDER,
                },
                hobbies: []
            }
            _.map(result, (y) => {

                if (userDetail.basicDetail.user_id === y.USER_ID) {
                    if (!userDetail.hobbies.includes(y.HOBBY)) {
                        userDetail.hobbies.push(y.HOBBY);
                    }
                }
            })
            arr.push(userDetail);
        })
        let response = _.sortedUniqBy(arr, (a) => {
            return a.basicDetail.user_id
        })
        return res.json({
            message: "Success !",
            status:1,
            response

        })
    })
}

module.exports.usersWithActivity = (req, res) => {
    const sql = `SELECT USERS.USER_ID , USERS.FIRST_NAME , USERS.LAST_NAME , USERS.EMAIL , USERS.MOBILE_NO , USERS.DATE_OF_REGISTRATION ,
    USERS.USER_STATUS , USERS.GENDER , ACTIVITIES.ID , ACTIVITIES.ACTIVITY FROM USERS left JOIN ACTIVITIES ON USERS.USER_ID = ACTIVITIES.USER_ID`;

    con.execute(sql, (err, result) => {
        if (err) {
            return res.json({
                message: "Some error occured !",
                status:0,
                err: err.sqlMessage
            })
        }
        let arr = []
        _.map(result, (x) => {

            let userDetail = {
                basicDetail: {
                    user_id: x.USER_ID,
                    first_name: x.FIRST_NAME,
                    last_name: x.LAST_NAME,
                    email: x.EMAIL,
                    mobile_no: x.MOBILE_NO,
                    date_of_registration: x.DATE_OF_REGISTRATION,
                    user_status: x.USER_STATUS,
                    gender: x.GENDER,
                },
                activities: []
            }
            _.map(result, (y) => {
                if (userDetail.basicDetail.user_id === y.USER_ID) {
                    userDetail.activities.push(y.ACTIVITY);
                }
            })
            arr.push(userDetail);
        })
        let response = _.sortedUniqBy(arr, (a) => {
            return a.basicDetail.user_id
        })

        return res.json({
            message: "Success !",
            status:1,
            response
        })
    })
}

module.exports.getAllDetail = (req, res) => {
    const sql = ` SELECT USERS.USER_ID , USERS.FIRST_NAME , USERS.LAST_NAME , USERS.EMAIL , USERS.MOBILE_NO , USERS.DATE_OF_REGISTRATION ,
        USERS.USER_STATUS , USERS.GENDER , ADDRESS.HOUSE_NO , ADDRESS.LOCAL_ADDRESS , ADDRESS.DISTRICT , ADDRESS.STATE ,ADDRESS.COUNTRY , ADDRESS.PINCODE , 
        ADDRESS.CREATED_AT , HOBBIES.HOBBY , ACTIVITIES.ACTIVITY   FROM USERS INNER JOIN ADDRESS ON USERS.USER_ID = ADDRESS.USER_ID INNER JOIN HOBBIES ON 
        USERS.USER_ID = HOBBIES.USER_ID INNER JOIN ACTIVITIES ON USERS.USER_ID = ACTIVITIES.USER_ID`;

    con.execute(sql, (err, result) => {
        if (err) {
            return res.json({
                message: "Some error occured !",
                status:0,
                err: err.sqlMessage
            })
        }
        let arr = [];
        _.map(result, (x) => {
            let userDetail = {
                basicDetail: {
                    user_id: x.USER_ID,
                    first_name: x.FIRST_NAME,
                    last_name: x.LAST_NAME,
                    email: x.EMAIL,
                    mobile_no: x.MOBILE_NO,
                    date_of_registration: x.DATE_OF_REGISTRATION,
                    user_status: x.USER_STATUS,
                    gender: x.GENDER,
                },
                address: {
                    house_no: x.HOUSE_NO,
                    local_address: x.LOCAL_ADDRESS,
                    district: x.DISTRICT,
                    state: x.STATE,
                    country: x.COUNTRY,
                    pincode: x.PINCODE,
                    created_at: x.CREATED_AT,
                },
                hobbies: [],
                activities: [],
            }
            _.map(result, (y) => {
                if (userDetail.basicDetail.user_id === y.USER_ID) {
                    if (!userDetail.hobbies.includes(y.HOBBY)) {
                        userDetail.hobbies.push(y.HOBBY);
                    }
                    if (!userDetail.activities.includes(y.ACTIVITY)) {
                        userDetail.activities.push(y.ACTIVITY);
                    }

                }
            })
            arr.push(userDetail);
        })
        let response = _.sortedUniqBy(arr, (a) => {
            return a.basicDetail.user_id
        })
        return res.json({
            message: "Success !",
            status:1,
            response
        })
    })
}

module.exports.home = (req, res) => {
    const result = [
        {
            id: 1,
            name: "shubham",
            city: "xyz",
        },
        {
            id: 1,
            name: "shubham",
            city: "abc",
        },
        {
            id: 1,
            name: "shubham",
            city: "tuv",
        },
        {
            id: 2,
            name: "amit",
            city: "qwe",
        },
        {
            id: 2,
            name: "amit",
            city: "xft",
        },
    ];
    var arr = []
    result.map(x => {
        var ob = {
            id: x.id,
            name: x.name,
            address: []
        }
        result.map(y => {
            if (ob.id === y.id) {
                ob.address.push(y.city);
            }
        })
        arr.push(ob);
    })
    const response = Array.from(new Set(arr.map(a => a.id)))
        .map(id => {
            return arr.find(a => a.id === id)
        })
    return res.status(200).json({
        message: "success",
        status: res.statusCode === 200 ? 1 : 0,
        response
    })
}