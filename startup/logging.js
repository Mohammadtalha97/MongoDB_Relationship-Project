import "express-async-errors";
import "winston-mongodb";

import winston from "winston";

export default () => {
  //(2)
  process.on("uncaughtException", (ex) => {
    console.log("We Got uncaughtException Exception");
    winston.error(ex.message, ex);
    process.exit(1);
  });

  //(3)
  process.on("unhandledRejection", (ex) => {
    console.log("We Got unhandleRejection Exception");
    winston.error(ex.message, ex);
    process.exit(1);
  });

  //Log in file
  winston.add(winston.transports.File, {
    filename: "logfile.log",
  });

  //Log in MongoDB
  winston.add(winston.transports.MongoDB, {
    db: "mongodb://localhost:27017/test",
    level: "error",
  });
};

/*
 NOTE:
  
  (1) What is Monkey patching..?
  --> It is a technique to add, modify, or suppress the default behavior of a piece of code, 
  at runtime without changing its original source code.
 
 (2)Subscribing
  -> process object is an eventEmmitter which emit or publish event,
    .on means subscribing,
    uncaughtException which is not handle in catch block that crash app,
    unhandlePromiseRejection is there then this is not work,
  
  (3)unhandlePromiseRejection :  [ .then() not use .catch() || async - await without try catch]
*/
