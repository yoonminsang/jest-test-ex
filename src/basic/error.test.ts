function errorFunction() {
  throw new Error('에러 발생');
}

test('compiling android goes as expected', () => {
  expect(() => errorFunction()).toThrow();
  expect(() => errorFunction()).toThrow(Error);

  expect(() => errorFunction()).toThrow('에러 발생');
  expect(() => errorFunction()).toThrow(/발생/);
  // expect(() => errorFunction()).toThrow('error');
});
