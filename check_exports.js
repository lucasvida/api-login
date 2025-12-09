import * as erl from 'express-rate-limit';
console.log('Keys:', Object.keys(erl));
console.log('Has default?', !!erl.default);
console.log('Has rateLimit?', !!erl.rateLimit);
console.log('erl:', erl);
