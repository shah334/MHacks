var key = require('../utils/key');
var request = require('request');
var _ = require('underscore');
var BoxSDK = require('box-node-sdk');

var sdk = new BoxSDK({//API keys
  clientID: '',
  clientSecret: ''
});

// Create a basic API client
var client = sdk.getBasicClient('');//API auth key


// The API that returns the in-email representation.
module.exports = function(req, res) {

  var fileName = req.query.text.trim();
  console.log(fileName);
  client.search.query(
  		fileName,{},
  		(err,resp)=>{
        console.log(err);
        console.log(resp);
        if(err){
          res.status(500).send('Error');
          return;
        }else{
          var name = fileName;
          var bigObj = resp;
          var Obj = bigObj.entries;
          var fileSize = Obj[0].size/1000000;
          var downloadURL = Obj[0].shared_link.url;

          var html = '<p style="font-family:courier;">' + "File Name: " + name + "<br>File Size: " + fileSize + " MB<br>Download Link: " + '<a href="' + downloadURL + '"/>' + name + '</a>' +'</p>';
          //var html = '<a href="' + downloadURL + '"/>' + name + '</a>';
          console.log(html);
          res.json({
            body: html
          // Add raw:true if you're returning content that you want the user to be able to edit
          });
        }



      }
  	);

};
