import { PostRequest , GetRequest , PutRequest , DeleteRequest} from './../../Components/Helpers/ApiHelpers'

export function GetUserAction(data) {
    return (dispatch) => {
        GetRequest(data).then((res) =>
            dispatch({
                type: 'get_data',
                payload: res
            })
        ).catch((err)=>{
            console.error("Something's wrong!" + err);
        })
    }
}

export function PostUserAction(data) {
    return (dispatch) => {
        PostRequest('create', data).then((res) =>
            dispatch({
                type: 'add_user',
                payload: res
            })
        ).catch((err)=>{
            console.error("Something's wrong!" + err);
        })
    }
}

export function UpdateUserAction(id, data) {
    return (dispatch) => {
        PutRequest(id, data).then((res) =>
            dispatch({
                type: 'update_user',
                payload: res,
            })
        ).catch((err)=>{
            console.error("Something's wrong!" + err);
        })
    }
}
export function DeleteUserAction(id) {
    return (dispatch) => {
        DeleteRequest(id).then((res) =>
        GetRequest('?page=1&limit=9').then((res) =>
            dispatch({
                type: 'delete_user',
                payload: res
            })
        )
        ).catch((err)=>{
            console.error("Something's wrong!" + err);
        })
    }
}