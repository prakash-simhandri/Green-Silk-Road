let sqlite3 = require('sqlite3');

let db = new sqlite3.Database('html_travel2.db', (err) => {
	if (!err){
		db.run('CREATE TABLE if not exists travel_data (Organisation_name TEXT, Website_Link TEXT, Email TEXT, Mobile_number text, Address text, Works text, fields text, host_number text, languages text, Languages_lists list, response text, Description text, User_Needs text, correct_time text)');
		console.log('create table successful')
	}else {
		console.log('error creating db');
	}
})