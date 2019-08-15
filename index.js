import { openDB, deleteDB, wrap, unwrap } from 'https://unpkg.com/idb?module';
//import idb from 'idb';


var dbPromise = openDB('test-db', 1, upgradeDb => {
	var keyValStore = upgradeDb.createObjectStore('keyval');
	keyValStore.put('world', 'hello');
});

