import idb from 'idb';
console.log('db accessed')
var dbPromise = idb.open('test-db', 1, upgradeDb => {
	var keyValStore = upgradeDb.createObjectStore('keyval');
	keyValStore.put('world', 'hello');
});
