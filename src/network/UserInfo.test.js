import axios from 'axios';
import {getUserInfo} from './UserInfo';
import { italic } from 'ansi-colors';

jest.mock('axios');

it("should get data from a service", async ()=>{
    const mockFn = jest.fn(query => Promise.resolve(user))
    const user = {data: {id:1, name:"John Doe"}}
    axios.get = mockFn
    
    await getUserInfo("1").then(data => expect(data).toEqual(user.data));
    await expect(mockFn ).toBeCalledWith("/users/1");
})