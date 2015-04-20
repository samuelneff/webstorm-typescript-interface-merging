/// <require path='./node.d.ts' />
/// <require path='./date-additions.d.ts' />

require('./date-additions');

var d:Date = new Date();

var start:Date = d.toStartOfQuarter();