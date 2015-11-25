var names = require('names');
var fs = require('fs');
var companies = require('plausible-company-name');
var randomName;
var out = [['Name', 'Phone', 'Email', 'Company', 'Status']];
var row = [];

function randomInRange(min, max) {
	return (Math.random() * (max - min + 1) ) << 0;
}

function randomInt(size) {
	return randomInRange(Math.pow(10, size-1), Math.pow(10, size-1) * 10 -1);
}


for (var i = 0; i < 10000; i++) {
	var company = companies();
	row = [];
	row[0] = names();
	row[1] = [randomInt(3) , randomInt(3) , randomInt(4)].join('-');
	row[2] = row[0].replace(/\s/, '.') + '@' + company.toLowerCase() + '.com';
	row[3] = company;
	row[4] = 'Open - Not Contacted';
	out.push(row);

}

var outString = '';
out.forEach(function(row) {
	outString += row.join(',');
	outString += '\n';
});

fs.writeFileSync('out.csv', outString, 'utf8');