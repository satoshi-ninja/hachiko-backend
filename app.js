//----
// License
//----

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

//----
// Requirements
//----

// Dependencies
const util = require('util') // shell$ npm install util
var express = require('express'); // shell$ npm install express
var coin = require('bitcoin'); // shell$ npm install bitcoin
var app = express();

//RPC hook
var client = new coin.Client({
    host: 'localhost', // your coin RPC JSON deamon host here
    port: 9998, // your coin RPC JSON port here
    user: 'username',
    pass: 'password',
    /*
    Uncomment lines below to enable SSL encryption.
    If you're using this to connect to bitcoind across
    a network it is highly recommended to enable ssl,
    otherwise an attacker may intercept your RPC
    credentials resulting in theft of your coins.
    When enabling ssl by setting the configuration
    option to true, the sslStrict option (verifies
    the server certificate) will also be enabled by
    default. It is highly recommended to specify the
    sslCa as well, even if your *coind has a certificate
    signed by an actual CA, to ensure you are connecting
    to your own bitcoind.
    See also https://en.bitcoin.it/wiki/Enabling_SSL_on_original_client_daemon  
    */
    // ssl: true,
    //sslStrict: true,
    //sslCa: fs.readFileSync(__dirname + '/myca.cert')
});

// Express Routing

//----
// root "/"
//----
app.get('/', function(req, res) {
    var hachikoWuf = { "hachiko": "Wuf!", "donations": "1BQH73H1jAbxowGpXgxtAkwNgHyPPu1DkS" };
    var data = util.inspect(hachikoWuf, { showHidden: false, depth: null });
    console.log(data);
    res.end(data);
});

//----
// getaccount
//----
app.get('/getaccount', function(req, res) {
    client.getAccount(function(err, getAccount) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getAccount, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getaccountaddress
//----
app.get('/getaccountaddress', function(req, res) {
    client.getAccountAddress(function(err, getAccountAddress) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getAccountAddress, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getaddednodeinfo
//----
app.get('/getaddednodeinfo', function(req, res) {
    client.getAddedNodeInfo(function(err, getAddedNodeInfo) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getAddedNodeInfo, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getaddressesbyaccount
//----
app.get('/getaddressesbyaccount', function(req, res) {
    client.getAddressesByAccount(function(err, getAddressesByAccount) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getAddressesByAccount, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getbalance
//----
app.get('/getbalance', function(req, res) {
    client.getBalance(function(err, getBalance) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getBalance, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getbestblockhash
//----
app.get('/getbestblockhash', function(req, res) {
    client.getBestBlockHash(function(err, getBestBlockHash) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getBestBlockHash, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getblock
//----
app.get('/getblock', function(req, res) {
    client.getBlock(function(err, getBlock) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getBlock, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getblockchaininfo
//----
app.get('/getblockchaininfo', function(req, res) {
    client.getBlockchainInfo(function(err, getBlockchainInfo) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getBlockchainInfo, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getblockcount
//----
app.get('/getblockcount', function(req, res) {
    client.getBlockCount(function(err, getBlockCount) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getBlockCount, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getblockhash
//----
app.get('/getblockhash', function(req, res) {
    client.getBlockHash(function(err, getBlockHash) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getBlockHash, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getblocktemplate
//----
app.get('/getblocktemplate', function(req, res) {
    client.getBlockTemplate(function(err, getBlockTemplate) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getBlockTemplate, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getchaintips
//----
app.get('/getchaintips', function(req, res) {
    client.getChainTips(function(err, getChainTips) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getChainTips, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getconnectioncount
//----
app.get('/getconnectioncount', function(req, res) {
    client.getConnectionCount(function(err, getConnectionCount) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getConnectionCount, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getconnectioncount
//----
app.get('/getconnectioncount', function(req, res) {
    client.getConnectionCount(function(err, getConnectionCount) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getConnectionCount, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getdifficulty
//----
app.get('/getdifficulty', function(req, res) {
    client.getDifficulty(function(err, getDifficulty) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getDifficulty, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getgenerate
//----
app.get('/getgenerate', function(req, res) {
    client.getGenerate(function(err, getGenerate) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getGenerate, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getinfo
//----
app.get('/getinfo', function(req, res) {
    client.getInfo(function(err, getInfo) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getInfo, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getmempoolinfo
//----
app.get('/getmempoolinfo', function(req, res) {
    client.getMempoolInfo(function(err, getMempoolInfo) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getMempoolInfo, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getmininginfo
//----
app.get('/getmininginfo', function(req, res) {
    client.getMiningInfo(function(err, getMiningInfo) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getMiningInfo, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getnettotals
//----
app.get('/getnettotals', function(req, res) {
    client.getNetTotals(function(err, getNetTotals) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getNetTotals, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getnetworkinfo
//----
app.get('/getnetworkinfo', function(req, res) {
    client.getNetworkInfo(function(err, getNetworkInfo) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getNetworkInfo, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getnetworkhashps
//----
app.get('/getnetworkhashps', function(req, res) {
    client.getNetworkHashPs(function(err, getNetworkHashPs) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getNetworkHashPs, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getnewaddress
//----
app.get('/getnewaddress', function(req, res) {
    client.getNewAddress(function(err, getNewAddress) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getNewAddress, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getpeerinfo
//----
app.get('/getpeerinfo', function(req, res) {
    client.getPeerInfo(function(err, getPeerInfo) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getPeerInfo, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getrawchangeaddress
//----
app.get('/getrawchangeaddress', function(req, res) {
    client.getRawChangeAddress(function(err, getRawChangeAddress) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getRawChangeAddress, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getrawmempool
//----
app.get('/getrawmempool', function(req, res) {
    client.getRawMemPool(function(err, getRawMemPool) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getRawMemPool, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getrawtransaction
//----
app.get('/getrawtransaction', function(req, res) {
    client.getRawTransaction(function(err, getRawTransaction) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getRawTransaction, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getreceivedbyaccount
//----
app.get('/getreceivedbyaccount', function(req, res) {
    client.getReceivedByAccount(function(err, getReceivedByAccount) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getReceivedByAccount, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getreceivedbyaddress
//----
app.get('/getreceivedbyaddress', function(req, res) {
    client.getReceivedByAddress(function(err, getReceivedByAddress) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getReceivedByAddress, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// gettransaction
//----
app.get('/gettransaction', function(req, res) {
    client.getTransaction(function(err, getTransaction) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getTransaction, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// gettxout
//----
app.get('/gettxout', function(req, res) {
    client.getTxOut(function(err, getTxOut) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getTxOut, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// gettxoutproof
//----
app.get('/gettxoutproof', function(req, res) {
    client.getTxOutProof(function(err, getTxOutProof) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getTxOutProof, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// gettxoutsetinfo
//----
app.get('/gettxoutsetinfo', function(req, res) {
    client.getTxOutSetInfo(function(err, getTxOutSetInfo) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getTxOutSetInfo, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getunconfirmedbalance
//----
app.get('/getunconfirmedbalance', function(req, res) {
    client.getUnconfirmedBalance(function(err, getUnconfirmedBalance) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getUnconfirmedBalance, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

//----
// getwalletinfo
//----
app.get('/getwalletinfo', function(req, res) {
    client.getWalletInfo(function(err, getWalletInfo) {
        if (err) {
            return console.error(err);
        }
        var data = util.inspect(getWalletInfo, { showHidden: false, depth: null });
        console.log(data);
        res.end(data);
    });
});

// Change this value to choose the port of the REST API endpoint (default = 9997)
//----
var hachikoPort = 9997;
//----

var server = app.listen(hachikoPort);
