const initialState={
    card:[],
    product:[],
    categories:[],
}

export  const ProductReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            return{
                ...state,
                card:action.payload
            };
            break
            case "ADD_PRODUCT":
                return{
                    ...state,
                    product:action.payload
                }
                break
                case "ADD_categories":
                    return{
                        ...state,
                        categories:action.payload
                    }
                
            
            break;
    
    }
    return state
    
}