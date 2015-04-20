/// <require path='./node.d.ts' />
/// <require path='./date-additions.d.ts' />
require('./date-additions');
var d = new Date();
var start = d.toStartOfQuarter();
