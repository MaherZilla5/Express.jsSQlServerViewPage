//const express = require('express');
//const app = express();
let sql = require("mssql");
const config = require('./DBConfig');

let totCust;
const getCustomerCount = async() => {
    try {
        console.log("Before err");
        let dbConnect = await sql.connect(config);
        let count = dbConnect.request().query('SELECT COUNT(C.ContactName) AS total_customers FROM Customers AS C;');
       return (await count).recordset[0].total_customers;
    } catch(err){
        console.log(err);
    }
}



const  customerList = async() => {
try {
    let dbConnect = await sql.connect(config);
    let customerTotal = dbConnect.request().query('SELECT C.ContactName FROM Customers AS C;');
    return (await customerTotal).recordset;

}catch(err){
    console.log(err);
}
}

module.exports = {
    getCustomerCount, customerList
}



