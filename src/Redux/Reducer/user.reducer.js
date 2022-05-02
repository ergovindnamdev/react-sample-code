const UserReducer = (state = [] , action )=>{
    switch(action.type){
        case "get_data" : return action.payload;
        case "add_user" : return {...action.payload , status:'success'};
        case "update_user" : return {...action.payload , status:'success'};
        case "delete_user" : return  action.payload;
        default: return state
    }
}

export default UserReducer