import nodemailer from "nodemailer";
import "dotenv/config.js";
import ejs from "ejs";
import path from "path";

export async function sendMail({ email, link }) {
  try {
    const __dirname = path.resolve();
    console.log(__dirname);
    const templatePath = path.join(
      __dirname,
      "src/view/ForgetPasswordemail.ejs"
    );
    const data = await ejs.renderFile(templatePath, { email, link });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EPASSWORD,
      },
    });
    let mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Reset Password",
      text: "hello",
      html: data,
    };
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        
        return error
      } else {
        return ("Email sent: " + info.response);
      }
    });
  } catch (error) {
     return ;
  }
}


export async function sendPaymentMail({email}) {
  try {
    const __dirname = path.resolve();
    console.log(__dirname);
    const templatePath = path.join(
      __dirname,
      "src/view/paymentEmail.ejs"
    );
    const data = await ejs.renderFile(templatePath,{email});
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EPASSWORD,
      },
    });
    let mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: " Gentle Reminder: Pending Payment",
      //text: "hello",
      html: data,
    };
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    return;
  }
}




export async function sendTenderMail({email}) {
  try {
    const __dirname = path.resolve();
    console.log(__dirname);
    const templatePath = path.join(__dirname, "src/view/tenderEmail.ejs");
    const data = await ejs.renderFile(templatePath, {email});
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EPASSWORD,
      },
    });
    let mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "New Tender Announcement - Attention Required",
      //text: "hello",
      html: data,
    };
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log("Email sent: " + info.response);
     
      }
    });
  } catch (error) {
    return;
  }
}
