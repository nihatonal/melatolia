const fs = require("fs");

const nodeoutlook = require("nodejs-nodemailer-outlook");
;
const Str = require("@supercharge/strings");
require("dotenv").config();
const nodemailer = require("nodemailer");
const HttpError = require("../models/http-error");

//////////
const send_mail = async (req, res, next) => {
  const { fname_lname, email, phone, subject, message } = req.body;
  console.log(req.body)

  try {
    nodeoutlook.sendEmail({
      auth: {
        user: "onalnihat@outlook.com",
        pass: "nihat2575",
      },
      from: 'onalnihat@outlook.com',
      to: `onalnihat1986@gmail.com`,
      subject: subject,
      text: `
        From: ${fname_lname}
        Subject:${subject}
        
        Message: ${message}
        
        Contact: ${email} / ${phone}`,
      onError: (e) => console.log("error", e),
      onSuccess: (i) => {
        res.send(i);
        console.log("success", i);
      },
    });
  } catch (err) {
    const error = new HttpError("Error", 500);
    return next(error);
  }
};

exports.send_mail = send_mail;

