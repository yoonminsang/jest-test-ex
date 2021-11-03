import axios from 'axios';
import { findOne } from './userService';

test('findOne returns what axios get returns', async () => {
  axios.get = jest.fn().mockResolvedValue({
    data: {
      id: 1,
      name: 'Dale Seo',
    },
  });

  const user = await findOne(1);
  expect(user).toHaveProperty('id', 1);
  expect(user).toHaveProperty('name', 'Dale Seo');
});
