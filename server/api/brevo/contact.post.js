import pkg from '@getbrevo/brevo';
const { TransactionalEmailsApi, SendSmtpEmail } = pkg;
//MAJOR FUCKING TODO
//Make sure this endpoint is only accessible by our own server calls

export default defineEventHandler(async (event) =>{

  const body = await readBody(event)
  const subject = body.subject ? body.subject : {error:'No Subject'};
  const msg = body.msg ? body.msg : {error:'No Message'};
  const from = body.from ? body.from : {error:'No Email Passed'};
  const fromName = body.fromName ? body.fromName : 'Anonymous Contact';
  
  let apiInstance = new TransactionalEmailsApi();
  let apiKey = apiInstance.authentications['apiKey'];
  apiKey.apiKey = useRuntimeConfig(event).BREVO_KEY
  let sendSmtpEmail = new SendSmtpEmail()

  // if(useRuntimeConfig(event).public.SHOP_NAME=='LSDOPE'){
  //   sendSmtpEmail.templateId = 9
  // }
  // if(useRuntimeConfig(event).public.SHOP_NAME=='NyxKnacks'){
  //   sendSmtpEmail.templateId = 17
  // }
  // if(useRuntimeConfig(event).public.SHOP_NAME=='MichaelStrain'){
  sendSmtpEmail.templateId = 9
  // }
  sendSmtpEmail.to = [{email:"service@"+useRuntimeConfig(event).public.SITE_DOMAIN,name:useRuntimeConfig(event).public.SHOP_NAME + " Customer Service"}]
  sendSmtpEmail.subject = subject
  sendSmtpEmail.replyTo = {email:from, name:fromName} //Might be causing errors

  sendSmtpEmail.params = {
    'UPDATE':msg
  }
  sendSmtpEmail.headers = {
    'accept': 'application/json',
    'api-key':useRuntimeConfig(event).BREVO_KEY,
    'content-type': 'application/json'
  }
  apiInstance.sendTransacEmail(sendSmtpEmail)
})