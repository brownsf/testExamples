import axios from 'axios';

export const getUserInfo = (id) => axios.get(`/users/${id}`).then((resp) => resp.data);

export default getUserInfo;
