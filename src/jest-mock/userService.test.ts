import { mocked } from 'ts-jest/utils';
import { register, deregister } from './userService';
import { sendEmail, sendSMS } from './messageService';

jest.mock('./messageService');

beforeEach(() => {
  // sendEmail.mockClear();
  // sendSMS.mockClear();
  mocked(sendEmail).mockClear();
  mocked(sendSMS).mockClear();
});

const user = {
  email: 'test@email.com',
  phone: '012-345-6789',
};

test('register sends messeges', () => {
  register(user);

  expect(sendEmail).toBeCalledTimes(1);
  expect(sendEmail).toBeCalledWith(user.email, '회원 가입을 환영합니다!');

  expect(sendSMS).toBeCalledTimes(1);
  expect(sendSMS).toBeCalledWith(user.phone, '회원 가입을 환영합니다!');
});

test('deregister sends messaes', () => {
  deregister(user);

  expect(sendEmail).toBeCalledTimes(1);
  expect(sendEmail).toBeCalledWith(user.email, '탈퇴 처리 되었습니다.');

  expect(sendSMS).toBeCalledTimes(1);
  expect(sendSMS).toBeCalledWith(user.phone, '탈퇴 처리 되었습니다.');
});
