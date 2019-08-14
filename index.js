//import idb from 'idb';
const idb = require('idb');

var dbPromise = idb.open('test-db', 1, upgradeDb => {
	var keyValStore = upgradeDb.createObjectStore('keyval');
	keyValStore.put('world', 'hello');
});

