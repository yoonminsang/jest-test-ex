import axios, { AxiosResponse } from 'axios';
import { findOne } from './userService';
import { mocked } from 'ts-jest/utils';

jest.mock('axios');

test('findOne fetches data from the API endpoint and returns what axios get returns', async () => {
  // const mockedResponse: AxiosResponse = {
  //   data: {
  //     id: 1,
  //     name: 'Dale Seo',
  //   },
  //   status: 200,
  //   statusText: 'OK',
  //   headers: {},
  //   config: {},
  // };
  // mocked(axios.get).mockResolvedValue(mockedResponse);
  mocked(axios.get).mockResolvedValue({
    data: {
      id: 1,
      name: 'Dale Seo',
    },
  });

  // axios.get.mockResolvedValue({
  //   data: {
  //     id: 1,
  //     name: 'Dale Seo',
  //   },
  // });

  const user = await findOne(1);

  expect(user).toHaveProperty('id', 1);
  expect(user).toHaveProperty('name', 'Dale Seo');
  expect(axios.get).toBeCalledTimes(1);
  expect(axios.get).toBeCalledWith(`https://jsonplaceholder.typicode.com/users/1`);
});
