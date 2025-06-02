import * as nodeMailer from 'nodemailer';
import * as SendGrid from 'nodemailer-sendgrid-transport';

export class NodeMailer{
    private static initiateTransport(){
        return nodeMailer.createTransport(SendGrid({
            auth: {
                api_key: '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'
            }
        }));
    }

    static sendMail(data: {to: [string], subject: string, html: string}): Promise<any>{
       return  NodeMailer.initiateTransport().sendMail({
            from: 'oladimejiyasir@gmail.com',
            to: data.to,
            subject: data.subject,
            html: data.html
        });
    }
}