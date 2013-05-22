function afterDB1 (dbres, cb) {
	db2.query(dbres[1], function(dbres) {
		afterDB2(db2res, cb);
	});
}

function afterDB2 (db2res, cb) {
	cb();
}

function afterHttpRequest (res, cb) {
	db.query(res.headers['cookie'], function(dbres) {
		afterDB1(dbres, cb);
	});
}

// exposed
function get(cb) { // callback
	http.get(..., function() {
		afterHttpRequest(res, cb);
	});
}