import { sendMail } from "../helper/sendMail.helper";

export async  function schedular(payment,service,email) {

    if(payment==="pending" && service === "completed"){
        try{
            const sendEmail = sendMail({email : email})
            console.log("email send")
        }
        catch(error){
            console.log(error,"error")
        }
    }
}
setInterval(checkPaymentStatus, 1000 * 60 * 60 * 24 * 7);


                                                                         