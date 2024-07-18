
// This is the only function that will be called by the endpoint.
function print(req, res){
    res.send("This is the home page of the group of 3");
}

module.exports = print;