import React, { useRef, useState } from 'react';
import emailjs, { send } from '@emailjs/browser';


const Contact = () => {
  
  const SERVICE_ID = 'service_4itln67'
  const TEMPLATE_ID = 'template_5v5pyih'
  const PUBLIC_KEY = '5bBlD7NSF9MS0xaEE'

  const fromNameRef = useRef()
  const fromEmailRef = useRef()
  const messageRef = useRef()

  const [emailSend, setEmailSend] = useState(false)

  const contact_info = [
    { logo: "mail", text: "cailigang1994@outlook.com" },
    { logo: "logo-whatsapp", text: "+86 188 1144 2100" },
    {
      logo: "location",
      text: "Guangzhou China",
    },
  ];
  
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: fromNameRef.current.value,
        from_email: fromEmailRef.current.value,
        message: messageRef.current.value
      },
      { publicKey: PUBLIC_KEY, })
      .then(
        () => {
          console.log('SUCCESS!');
          setEmailSend(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },);
  }

  return (
    <section id="contact" className="py-5 px-3 text-white">
      <div className="text-center mt-8">

        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>

        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-5 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">

          <form className="flex flex-col flex-1 gap-5" onSubmit={sendEmail}>
            <input type="text" placeholder="Your Name" name='from_name' ref={fromNameRef} />
            <input type="Email" placeholder="Your Email Address" name='from_email' ref={fromEmailRef} />
            <textarea placeholder="Your Message" rows={10} name='message' ref={messageRef}></textarea>
            <button className="btn-primary w-fit" type='submit' value='Send' disabled={emailSend}>{emailSend ? 'Message sent already! Will be in contact soon! Thank YOU!' : 'Send Message'}</button>
          </form>

          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center">
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
