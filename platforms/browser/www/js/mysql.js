var connection = mysql.createConnection(
  {
    host     : 'stusql.dcs.shef.ac.uk',
    port     : '3306',
    user     : 'team064',
    password : 'ec4c7a0d',
    database : 'team064assignment'
  });

  if (connection.connect()) document.write("success");

  connection.end();
