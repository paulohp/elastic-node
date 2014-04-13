var es = require('elasticsearch');

var client = new es.Client({
	host: "localhost:9200",
	log: "trace"
});

client.ping({
	requestTimeout: 1000,
	hello: "helasticsearch"
}, function(error){
	if (error){
	 console.log(error)
	}else{
	 console.log("lalalala")
	}
})
