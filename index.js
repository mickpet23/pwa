import { openDB, deleteDB, wrap, unwrap } from 'https://unpkg.com/idb?module';
//import idb from 'idb';

var dbPromise = openDB('test-db', 1, {
	upgrade(dbPromise, oldVersion, newVersion, transaction) {
		var keyValStore = dbPromise.createObjectStore('keyval')
		keyValStore.put('world', 'hello')
	}
})

// var dbPromise = openDB('test-db', 1, upgradeDb => {
// 	var keyValStore = upgradeDb.createObjectStore('keyval');
// 	keyValStore.put('world', 'hello');
// });



