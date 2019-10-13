import axios from 'axios';

export const getUserInfo = (id)=>{
    
    return axios.get(`/users/${id}`).then(resp => {
        return resp.data
    });

}