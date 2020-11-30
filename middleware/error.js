import winston from "winston";

export default function (err, req, res, next) {
  //1)logging level : importance of msg for log [error, warn, info]
  winston.error(err.message, err);
  //err.message : msg
  //err : meta data
  res.status(500).send("Something Failed Internally");
}
