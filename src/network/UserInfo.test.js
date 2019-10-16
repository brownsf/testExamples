import axios from 'axios';
import { getUserInfo } from './UserInfo';

jest.mock('axios');

it('should get data from a service', async () => {
  const user = { data: { id: 1, name: 'John Doe' } };
  const mockFn = jest.fn(() => Promise.resolve(user));
  axios.get = mockFn;

  await getUserInfo('1').then((data) => expect(data).toEqual(user.data));
  await expect(mockFn).toBeCalledWith('/users/1');
});
