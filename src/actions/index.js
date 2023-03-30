 export const incNumber=()=> {
 return {
    type:"Increment"
     
 }
}
export const decNumber=()=> {
    return {
       type:"Decrement"
        
    }
   }
export const inputNumber=(data)=>{
   return{
      type:"InputNumber",
      data:data
   }
}