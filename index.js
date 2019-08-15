import { openDB, deleteDB, wrap, unwrap } from 'https://unpkg.com/idb?module';
//import idb from 'idb';

let dbPromise = openDB('test-db', 1, {
	upgrade(dbPromise, oldVersion, newVersion, transaction) {
		switch(oldVersion) {
			case 0:
				let keyValStore = dbPromise.createObjectStore('keyval');
				keyValStore.put('world', 'hello');
			case 1:
				dbPromise.createObjectStore('people', {keyPath: 'name'});		
		}

	}
})

dbPromise.then(db => {
	let tx = db.transaction('keyval');
	let keyValStore = tx.objectStore('keyval');
	return keyValStore.get('hello');
}).then(val => {
	console.log('The value of "hello" is ', val);
})

dbPromise.then(db => {
	let tx = db.transaction('keyval', 'readwrite');
	let keyValStore = tx.objectStore('keyval');
	keyValStore.put('bar', 'foo');
	return tx.complete;
}).then(()=> {
	console.log('Added foo:bar to keyval');
})



