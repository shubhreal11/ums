// const result = [
//     {
//       id: 1,
//       name: "Shubham",
//       city: "xyz",
//       hobby:'cricket'    
//     },
//     {
//       id: 1,
//       name: "Shubham",
//       city: "abc",
//       hobby:'singing'   
//     }, 
//     // {
//     //     id: 1,
//     //     name: "Shubham",
//     //     city: "uub",
//     //     hobby:'dancing'   
//     //   }, 
    
//   ];   
//   let arr = [];
//   let address = [];
//   let hobbies=[];
//   let data={}
//   let userDetail={} 

//   for (let i = 1; i < result.length; i++) {   
//       const keys = Object.keys(result[0])
//       for(j=0; j<keys.length; j++){         
//             if (result[i - 1][keys[j]] === result[i][keys[j]]) {                             
//                 let  value = result[i-1][keys[j]];
//                 userDetail[keys[j]]=value;
//                 data.userDetail = userDetail;        
//             }                     
//         if (result[i - 1][keys[j]] !== result[i][keys[j]]) {
//                if(keys[j]==='city'){
//                  address.push(result[i-1][keys[j]]);
//                  address.push(result[i][keys[j]]);
//                  data.address=address;
//                }
//                if(keys[j]==='hobby'){
//                  hobbies.push(result[i-1][keys[j]]);
//                  hobbies.push(result[i][keys[j]]);
//                  data.hobbies=hobbies;
//                }
//            }
//       }
//       arr.push(data); 
//   }
//   console.log(arr)





































// //   const res = [
// //     {
// //       id: 1,
// //       name: "shubham",
// //       city: "xyz",
// //     },
// //     {
// //       id: 1,
// //       name: "shubham",
// //       city: "abc",
// //     },
// //     {
// //         id: 1,
// //         name: "shubham",
// //         city: "tuv",
// //       },
// //       {
// //         id: 2,
// //         name: "amit",
// //         city: "qwe",
// //       },
// //       {
// //           id: 2,
// //           name: "amit",
// //           city: "xft",
// //         },
// //   ];

// //   const arr = res.filter((data , index)=>{
// //       return data.id===1
            

// //   })
// //   console.log(arr)
  
  
















const res = [
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
  
  
  
  
  let arr=[]
  res.map(x=>{
      let userDetail={
          id:x.id,
          name:x.name,
          address:[]
      }     
      res.map(y=>{
          if(userDetail.id===y.id){
            userDetail.address.push(y.city);
          }
      })
      arr.push(userDetail);
      
  })
const result = Array.from(new Set(arr.map(a => a.id)))
 .map(id => {
   return arr.find(a => a.id === id)
 })
  console.log(result);
  