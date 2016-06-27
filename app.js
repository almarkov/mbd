var mbd = require('./mbd')
var fs   = require('fs')
console.log('test')
try {
	fs.mkdirSync('data/')
} catch(e) {}
fs.closeSync(fs.openSync('data/users.json', 'w'));
fs.closeSync(fs.openSync('data/users.meta.json', 'w'));

mbd.insert('users', {name: 'test_user'}, {}, function(err, result){
	console.log(err);
	console.log(result)
})