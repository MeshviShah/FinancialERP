// import { sendMail } from "../helper/sendMail.helper.js";
// import { getPaymentClientService } from "../service/client.service.js";
// import fs from "fs";

// const lastSentTimeFilePath = "email_sent.txt";
// async function send() {
//   // Code to send email
//   const client = await getPaymentClientService();
//   const cliente = client.map((e) => {
//     const sendEmail = sendMail({ email: e.email, link: "www.futu.com" });
//   });
// }
// var lastSentTime = null;
// export async function schedularController() {
//   const currentDate = new Date();
//   // Check if at least one week has passed since the last email was sent
//     let lastSentTime = null;
//     if (fs.existsSync(lastSentTimeFilePath)) {
//       const storedTime = fs.readFileSync(lastSentTimeFilePath, "utf8");
//       lastSentTime = new Date(storedTime);
//     }

//     // Check if at least one week has passed since the last email was sent
//     if (
//       lastSentTime !== null &&
//       currentDate.getTime() - lastSentTime.getTime() < 7 * 24 * 60 * 60 * 1000
//     ) {
//       console.log("Email already sent recently. Skipping...");
//       return;
//     } else {
//       const daysUntilNextMonday = (3 + 7 - currentDate.getDay()) % 7;
//       const timeUntilNextMonday = daysUntilNextMonday * 24 * 60 * 60 * 1000;
//       setTimeout(() => {
//         //send();
//         console.log("Email sent!");
//         const currentTime = currentDate.toISOString();
//         fs.writeFileSync(lastSentTimeFilePath, currentTime);  // Update last sent time
//         console.log(lastSentTime, "fd");
//       }, timeUntilNextMonday);
//     }
//   // Calculate the time until next Monday
// }
// schedularController();

import fs from "fs";
import { sendMail, sendPaymentMail } from "../helper/sendMail.helper.js";
import { getPaymentClientService } from "../service/client.service.js";

const lastSentTimeFilePath = "last_sent_time.txt";

async function send() {
  // Code to send email
  const client = await getPaymentClientService();
  const cliente = client.map((e) => {
    const sendEmail = sendPaymentMail({email:e.email});
  });
}

export async function schedularController() {
  const currentDate = new Date();
  console.log(currentDate, "date");

  // Retrieve the last sent time from file, if available
  let lastSentTime = null;
  if (fs.existsSync(lastSentTimeFilePath)) {
    const storedTime = fs.readFileSync(lastSentTimeFilePath, "utf8");
    lastSentTime = new Date(storedTime);
  }

  // Check if at least one week has passed since the last email was sent
  if (
    lastSentTime !== null &&
    currentDate.getTime() - lastSentTime.getTime() < 7 * 24 * 60 * 60 * 1000
  ) {
    console.log("Email already sent recently. Skipping...");
    return;
  }

  // Calculate the time until next Monday
  const daysUntilNextMonday = (2 + 7 - currentDate.getDay()) % 7;
  const timeUntilNextMonday = daysUntilNextMonday * 24 * 60 * 60 * 1000;

  // Schedule the email to be sent at the next Monday
  setTimeout(() => {
    send();
    console.log("Email sent!");
    const currentTime = currentDate.toISOString();
    fs.writeFileSync(lastSentTimeFilePath, currentTime); // Store the current time in the file
  }, timeUntilNextMonday);
}

// Call schedularController when the server restarts
schedularController();