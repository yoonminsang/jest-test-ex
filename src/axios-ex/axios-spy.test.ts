import axios from 'axios';
import { findOne } from './userService';

test('findOne fetches data from the API endpoint', async () => {
  const spyGet = jest.spyOn(axios, 'get');
  await findOne(1);
  expect(spyGet).toBeCalledTimes(1);
  expect(spyGet).toBeCalledWith(`https://jsonplaceholder.typicode.com/users/1`);
});
