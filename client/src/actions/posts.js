import * as api from '../api';

// Action Creators
export const getPosts =() => async (dispatch) => {
    try{
        const { data }  = await api.fetchPosts();
        dispatch({type:'FETCH_ALL',payload:data});
    }
    catch(err){
        console.log(err.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try{
        const {data} = await api.createPost(post);

        dispatch({type: 'CREATE', payload:data})
    }
    catch(err){
        console.log(err);
    }
}

//update
export const updatePost = (id, post) => async (dispatch) =>{

    try{
        const {data} = await api.updatePost(id,post); //returning the updated memory/post (sheep)
        dispatch({type:'UPDATE', payload:data});
    }
    catch(err){
        console.log(err);
    }
}


//remove
export const deletePost = (id) => async (dispatch) =>{

    try{
        await api.deletePost(id); //we dont need to use const data because we dont want the responde data we only want to delete it.
        dispatch({type:'DELETE',payload: id});
    }
    catch(err){
        console.log(err);
    }
}