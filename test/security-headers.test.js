const secHeaders = require('../lib/security-headers');
test('should be an instanceof object', ()=>{
  expect(secHeaders).toBeInstanceOf(Object);
});

test('Should be an Array',()=>{
  expect(secHeaders.security).toBeInstanceOf(Array);
});
test('Should have string values',()=>{
  expect(secHeaders.security[0].value.constructor.name).toMatch('String');
});

