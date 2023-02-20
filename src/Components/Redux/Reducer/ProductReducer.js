const initialState={
    card:[],
    product:[],
    categories:[],
    loader:false,
    searchData:"",
   
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
                    case "LOADER_ACTIVATE":
                    return{
                        ...state,
                        loader: action.payload
                    }
                    break;
                    case "LOADER_DEACTIVATE":
                        return{
                            ...state,
                            loader: action.payload 
                        }
                        break
                        case "SEARCH-DATA":
                            return{
                                ...state,
                                searchData:action.payload
                            }
                    }
                    return state
                    
                }
                    
                
            
    