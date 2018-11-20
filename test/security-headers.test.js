// @ts-nocheck
const secHeaders = require('../dist/lib/security-headers/index.js');
test('should be an instanceof object', ()=>{
  console.log(typeof secHeaders);
  expect(typeof secHeaders).toBe('object');
});
test('Should be an Array',()=>{
  expect(secHeaders.default.security).toBeInstanceOf(Array);
});
test('Should have string values',()=>{
  expect(secHeaders.default.security[0].value.constructor.name).toMatch('String');
});

