const initialState={
    carData:[]
}
export const CarReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD-CAR-DATA":
            return{
                ...state,
                carData:action.payload
            }
            break;
    }
    return state

}