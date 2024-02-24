const express = require('express');
const app = express();
app.listen(3000);
let sql = require("mssql");
let DAL = require('./DAL')

app.set('view engine', 'ejs')

let customerCount;
let customerList = "";
  const getVariables = async() => {
try{
     const data = await DAL.getCustomerCount();
       customerCount = data;
     let rawData = await DAL.customerList();
     
     for(x in rawData){
          customerList += rawData[x].ContactName + "       ||        ";
     } 
       
       console.log(customerCount,customerList);
     
}catch(err){
    console.log(err);
}

}

const serverSetup = async() => {
    getVariables();
     
app.get('/', (req,res) => {
    console.log("Testing")
    res.render("index", {customerNum: customerCount, customerFullList: customerList});
})
}
serverSetup();