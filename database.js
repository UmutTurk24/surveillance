db.collection('entries').get().then((snapshot) => {
    console.log(snapshot.docs);
})