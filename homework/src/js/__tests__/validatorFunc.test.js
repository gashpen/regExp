/* eslint-disable no-unused-vars */
import Validator from '../validatorFunc';

const newValidate = new Validator();

test('test', () => {
  expect(newValidate.validateUsername('_-Gashpen88-_').toBeFalsy());
});
test('test', () => {
  expect(newValidate.validateUsername('8_-Gashpen-_8').toBeFalsy());
});
test('test', () => {
  expect(newValidate.validateUsername('Gashpen8888_ZXC').toBeFalsy());
});
test('test', () => {
  expect(newValidate.validateUsername('Gashpen229_ZXC-deadinside').toBeTruthy());
});
