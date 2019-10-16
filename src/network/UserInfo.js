import axios from 'axios';

export const getUserInfo = (id) => axios.get(`/users/${id}`).then((resp) => resp.data).catch((e) => e);

export default getUserInfo;
