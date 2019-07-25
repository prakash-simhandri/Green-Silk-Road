let sqlite3 = require('sqlite3');

let db = new sqlite3.Database('html_travel.db', (err) => {
	if (!err){
		db.run('CREATE TABLE if not exists data (firstname TEXT, lastname TEXT, email TEXT, phone text, country text, description text, skills text, fields text, User_Age text, Join_date text, leaving_date text, response text, group_bio text, Languages list, more_languages text, correct_time text)');
		console.log('create table successful')
	}else {
		console.log('error creating db');
	}
})