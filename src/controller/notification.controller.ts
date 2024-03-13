import ejs from 'ejs'
import path from 'path'
import sendMail from '../utils/sendMail';

export class NotificationController{
    SendActivationMail = async(data: any) => {
        const userdata = {user: {name:data.name}, activationCode: data.code}
        const html = await ejs.renderFile(path.join(__dirname, '../mails/activation-mail.ejs'), userdata);
        try{
            await sendMail({
                email: data.email,
                subject: "Activate your account",
                template: "activation-mail.ejs",
                data: userdata
            })
        }catch(e:any){
            console.log(e);
        }
    }
}