let express = require("express");
let sqlite3 = require("sqlite3");
let app = express();
let bodyParser = require("body-parser");

let db = require('./traveler_form1_db');
let db2 = require('./traveler_form2_db');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/views'))

app.get("/process_index", (req, res) => {
    res.sendFile(__dirname + '/views/main_page.html');
    // console.log(__dirname + '/views/main_page.html');
})

app.get('/process_form', (req, res) => {
  res.sendFile(__dirname + '/views/form1.html');
})

app.get('/process_form2', (req, res) => {
  res.sendFile(__dirname + '/views/form2.html');
})

app.post("/process_post", (req, res) => {
  let fname = req.body.firstname;
	let lname = req.body.lastname;
	let email = req.body.email;
	let phone = req.body.phone;
	let country = req.body.country;
	let description = req.body.description;
  let skills = req.body.skills;
  let fields = req.body.fields;
  let Age    = req.body.User_Age;
  let join_time = req.body.Join_date;
  let leaving_time = req.body.leaving_date;
  let response = req.body.negative;
  let group_bio = req.body.group_bio;
  let languages = req.body.vehicle;
  let Languages_lists = req.body.Languages_lists;
  let correct_time = new Date().toLocaleString();
  let user_profile = req.body.user_profile;
  // res.send('done');
    
    let db1 = new sqlite3.Database('html_travel.db', (err) => {
        if (!err){
            console.log("success")
            // console.log('INSERT INTO data (firstname, lastname, email, phone, country, description, skills, fields) values ("'+fname+'","'+lname+'","'+email+'","'+phone+'","'+country+'","'+description+'","'+skills+'","'+fields+'")')
            db1.run('INSERT INTO data (firstname, lastname, email, phone, country, description, skills, fields, User_Age, Join_date, leaving_date, response, group_bio, Languages, more_languages, correct_time) values ("'+fname+'","'+lname+'","'+email+'","'+phone+'","'+country+'","'+description+'","'+skills+'","'+fields+'","'+Age+'","'+join_time+'","'+leaving_time+'","'+response+'","'+group_bio+'","'+languages+'","'+Languages_lists+'","'+correct_time+'")', (err, data) => {
                if (!err){
                    console.log(`data inserted successfully`);
                    res.sendFile(__dirname + '/views/submit.html');
                }else {
                    console.log(`error inserting data`);
                }
            });
            
        }
    })
})

app.post("/process_post2", (req, res) => {
    let fname = req.body.Organisation_name;
    let lname = req.body.Website_Link;
    let email = req.body.Email;
    let phone = req.body.Mobile_number;
    let address = req.body.Address;
    let works = req.body.Works;
    // let works_2 = req.body.Works_2;
    let fields = req.body.fields;
    let host_number = req.body.host_number;
    let languages = req.body.vehicle;
    let Languages_lists = req.body.Languages_lists;
    let response = req.body.negative;
	  let description = req.body.Description;
    let user_needs = req.body.User_Needs;
    let correct_time = new Date().toLocaleString();
    let user_profile = req.body.user_profile;
    // res.send('done');
    // console.log(user_profile);
    
    let db1 = new sqlite3.Database('html_travel2.db', (err) => {
        if (!err){
            console.log("sucess")
            db1.run('INSERT INTO travel_data (Organisation_name, Website_Link, Email, Mobile_number, Address, Works, fields, host_number, languages, Languages_lists, response, Description, User_Needs, correct_time) values ("'+fname+'","'+lname+'","'+email+'","'+phone+'","'+address+'","'+works+'","'+fields+'","'+host_number+'","'+languages+'","'+Languages_lists+'","'+response+'","'+description+'","'+user_needs+'","'+correct_time+'")', () => {
                console.log('data inserted successfully');
                res.sendFile(__dirname + '/views/submit.html');
            });
            
        }
    })
})

app.get('/getalldata', (req, res) => {
	let db1 = new sqlite3.Database('html_travel2.db', (err) => {
        if (!err) {
            db1.all('select * from travel_data', (err, data) => {
                if (!err) {
                    console.log('all data');
                    res.send(data);
                }else {
                    console.log(`error reading data`);

                }
            })
        }else {
            console.log(`error in first err`);
        }
    })
})

app.get('/getalldata', (req, res) => {
	let db1 = new sqlite3.Database('html_travel.db', (err) => {
        if (!err) {
            db1.all('select * from data', (err, data) => {
                if (!err) {
                    console.log('all data');
                    res.send(data);
                }else {
                    console.log(`error reading data`);

                }
            })
        }else {
            console.log(`error in first err`);
        }
    })
})

// listen for requests :)
const listener = app.listen(3031, () =>{
    let host = listener.address().address;
    let port = listener.address().port;
    console.log(host,port);
    console.log("Success.....")
})

