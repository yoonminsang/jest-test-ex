function fetchUser(id: number, cb: Function) {
  setTimeout(() => {
    console.log('wait 0.1 sec.');
    const user = {
      id,
      name: `User${id}`,
      email: `${id}@test.com`,
    };
    cb(user);
  }, 100);
}

test('fetch a user', (done) => {
  fetchUser(1, (user: Object) => {
    expect(user).toEqual({
      id: 1,
      name: 'User1',
      email: '1@test.com',
    });
    done();
  });
});

function fetchUser2(id: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('wait 0.1 sec.');
      const user = {
        id,
        name: `User${id}`,
        email: `${id}@test.com`,
      };
      resolve(user);
    }, 100);
  });
}

test('fetch a user2', () => {
  return fetchUser2(1).then((user) => {
    expect(user).toEqual({
      id: 1,
      name: 'User1',
      email: '1@test.com',
    });
  });
});

test('fetch a user3', async () => {
  const user = await fetchUser2(1);
  expect(user).toEqual({
    id: 1,
    name: 'User1',
    email: '1@test.com',
  });
});
