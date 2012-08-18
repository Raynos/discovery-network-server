var http = require("http")
    , shoe = require("mux-demux-shoe")
    , DiscoveryNetwork = require("discovery-network")

var server = http.createServer(function (req, res) {
        res.end("discoverynetwork is service. Use it in the uri")
    }).listen(8081)
    , network = DiscoveryNetwork()

shoe(network).install(server, "/service")

console.log("running on port 8081")