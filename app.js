/*
Copyright 2016 satoshi.ninja@protonmail.com

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Dependencies
const util = require('util')
var express = require('express');
var app = express();

//RPC hook
var dashcoin = require('bitcoin');
var client = new dashcoin.Client({
  host: 'localhost',
  port: 9998,
  user: '',
  pass: ''
});

// Express Routing configuration

//----
// root "/"
//----
app.get('/', function (req, res) {
        var data = '{"hachiko":"Wuf!"}';
        console.log(data);
        res.end(data);
});

//----
// getinfo
//----
app.get('/getinfo', function (req, res) {
        client.getInfo(function(err, getInfo) {
                if (err) {
                        return console.error(err);
                }
        var data = util.inspect(getInfo, {showHidden: false, depth: null});
        console.log(data);
        res.end(data);
        });
});

//----
// getpeerinfo
//----
app.get('/peerinfo', function (req, res) {
        client.getPeerInfo(function(err, getPeerInfo) {
                if (err) {
                        return console.error(err);
                }
        var data = util.inspect(getPeerInfo, {showHidden: false, depth: null});
        console.log(data);
        res.end(data);
        });
});

// Change this value to choose the port of the REST API endpoint (default = 9997)
//----
var hachikoPort = 9997;
//----

var server = app.listen(hachikoPort);
