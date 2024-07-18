
// This is the only function that will be called by the endpoint.
function read(req, res){
    res.write("Your name is " + req.body.name);
    res.write(".\r\nYour email is " + req.body.email);
    res.write(".\r\nYour password is " + req.body.password + ".");
    res.end();
}

module.exports = read;