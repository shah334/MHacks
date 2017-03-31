var key = require('../utils/key');
var request = require('request');
var _ = require('underscore');
var BoxSDK = require('box-node-sdk');

var sdk = new BoxSDK({
  clientID: 'o6kyw26484y4wsfz8fjg66alm0xzj1d1',
  clientSecret: 'GJpHF2KtLm1Mjra1uh0YzAHPxkO2XRK6'
});

// Create a basic API client
var client = sdk.getBasicClient('3KYgrsXEJ8HqdWZPEu5vuHAXboEnwVgF');


// The API that returns the in-email representation.
module.exports = function(req, res) {

  var fileName = req.query.text.trim();
  client.search.query(
  		fileName,{},
  		(err,resp)=>{
        console.log(err);
        console.log(resp);
        if(err){
          res.status(500).send('Error');
          return;
        }else{

        }
      }
  	);

};
