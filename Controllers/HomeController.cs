using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;
// using MimeKit;
// using MailKit.Net.Smtp;
using System.Net;
// using Org.BouncyCastle.X509;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Net.Mail;

namespace myprofile.Controllers
{
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        [HttpGet]
        [Route("TestDoc")]
        public IActionResult TestFile()
        {
            //using (var stream = new FileStream(@"src\assets\files\Senthil_MVC.pdf", FileMode.Open))
            {
                //return new FileStreamResult(stream, "application/pdf");
                return File(System.IO.File.OpenRead(@"src\assets\files\TestDoc.docx"), contentType: "application/pdf");
            }
        }
        [HttpPost]
        [Route("SendEmail")]
        public IActionResult SendEmail([FromBody] Contact contact)
        {
            var res = sendMail(contact);
            return Ok(res);
        }
        string sendMail(Contact contact)
        {
            try
            {
                string From = "senthilkumar182015@gmail.com";
                string To = "senthilkmaar@gmail.com";
                string Subject = contact.Subject;
                string Body = $"Name: {contact.Name} \n Email: {contact.Email} \n\n {contact.Message}";

                string SmtpServer = "smtp.gmail.com";
                int SmtpPort = 587;

 var gmailClient = new System.Net.Mail.SmtpClient {
        Host = SmtpServer,
        Port = SmtpPort,
        EnableSsl = true,
        UseDefaultCredentials = false,
        Credentials = new System.Net.NetworkCredential(From, "infinity18")
    };

                // SmtpClient client = new SmtpClient(SmtpServer,SmtpPort);
                // client.UseDefaultCredentials = false;
                // client.Credentials = new NetworkCredential("senthilkumar182015@gmail.com", "infinity18");

                // MailMessage mailMessage = new MailMessage();
                // mailMessage.From = new MailAddress(From);
                // mailMessage.To.Add(To);
                // mailMessage.Body = "body";
                // mailMessage.Subject = "subject";
                // client.Send(mailMessage);
                 using (var msg = new System.Net.Mail.MailMessage(From, To, Subject, Body)) {
                gmailClient.Send(msg);
                 }
                 return "Mail sent succesfully.";
    //             var mimeMessage = new MimeMessage();
    //             mimeMessage.From.Add(new MailboxAddress(From));
    //             mimeMessage.To.Add(new MailboxAddress(To));
    //             mimeMessage.Subject = Subject;
    //             mimeMessage.Body = new TextPart("plain")
    //             {
    //                 Text = Body
    //             };

    //             using (var client = new SmtpClient())
    //             {
    //                 ServicePointManager.ServerCertificateValidationCallback =
    // delegate (object s, X509Certificate certificate,
    //          X509Chain chain, SslPolicyErrors sslPolicyErrors)
    // { return true; };
    //                 client.Connect(SmtpServer, SmtpPort, false);
    //                 client.Authenticate("senthilkumar182015@gmail.com", "infinity18");
    //                 client.Send(mimeMessage);
    //                 client.Disconnect(true);
    //                 return "Mail sent succesfully.";
    //             }
            }
            catch (Exception ex)
            {
                string Msg = ex.Message;
                return Msg;
            }
        }
    }
    public class Contact
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
    }
}