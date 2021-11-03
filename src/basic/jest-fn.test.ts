test('fn test', () => {
  const mockFn = jest.fn();

  mockFn.mockReturnValue('I am a mock!');
  console.log(mockFn()); // I am a mock!

  mockFn.mockResolvedValue('I will be a mock!');
  mockFn().then((result: string) => {
    console.log(result); // I will be a mock!
  });

  mockFn.mockImplementation((name) => `I am ${name}!`);
  console.log(mockFn('Dale')); // I am Dale!

  mockFn('a');
  mockFn(['b', 'c']);

  expect(mockFn).toBeCalledTimes(5);
  expect(mockFn).toBeCalledWith('a');
  expect(mockFn).toBeCalledWith(['b', 'c']);
});
