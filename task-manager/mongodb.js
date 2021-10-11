// /Users/zhangxiao/mongodb/bin/mongod --dbpath=/Users/zhangxiao/mongodb-data

// CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectId } = require('mongodb')
// const id = new ObjectId()
// console.log(id);

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser:true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect');
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Xiao',
    //     age: 27
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'Qiao',
    //         age: 28
    //     }, {
    //         name: 'Pei',
    //         age: 31
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('mydb').insertMany([
    //     {
    //         description: 'task1',
    //         completed: true
    //     }, {
    //         description: 'task2',
    //         completed: true
    //     }, {
    //         description: 'task3',
    //         completed: false
    //     }

    // ], (error, result) => {
    //     if (error) {
    //         return console.log('unable');
    //     }

    //     console.log(result.ops);
    // })
    // db.collection('users').findOne({name: 'Pei'}, (error, user) => {
    //     if (error) {
    //         return console.log('Uable');
    //     }
    //     console.log(user);
    // })

    // db.collection('users').updateOne({
    //     age: 31
    // }, {
    //     $set: {
    //         age: 20
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('mydb').updateMany({
        completed: true
    }, {
        $set: {
            completed: false
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('users').deleteOne({
    //     age: 20
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

})