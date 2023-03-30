const initialState=0;
const changeTheNumber =(state=initialState,action)=>{
    switch(action.type){
        case "Increment" :return state + 5;
        case "Decrement" :return state - 5;
        case "InputNumber" :return action.data
        default: return state;
    }
}
export default changeTheNumber;