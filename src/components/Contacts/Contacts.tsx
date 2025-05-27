// import React, { useState } from 'react';
// import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';

// import './Contacts.css';

// const Contacts = () => {
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     setTimeout(() => {
//       // toast({
//       //   title: "Message Sent!",
//       //   description: "Thank you for reaching out. I'll get back to you soon.",
//       // });
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setIsSubmitting(false);
//     }, 1000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: "Email",
//       value: "maheshparajuli717@gmail.com",
//       // link: "mailto:your.email@example.com"
//     },
//     {
//       icon: Phone,
//       title: "Phone",
//       value: "+977 9865495350",
//       // link: "tel:+15551234567"
//     },
//     {
//       icon: MapPin,
//       title: "Location",
//       value: "Kathmandu,Nepal",
//       // link: "#"
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: Github,
//       name: "GitHub",
//       url: "https://github.com"
//     },
//     {
//       icon: Linkedin,
//       name: "LinkedIn",
//       url: "https://linkedin.com"
//     },
//     {
//       icon: Mail,
//       name: "Email",
//       url: "mailto:your.email@example.com"
//     }
//   ];

//   return (
//     <section id="contact" className="contact-section">
//       <div className="contact-container">
//         <div className="contact-header">
//           <h2 className="section-title">Get In Touch</h2>
//           <p className="section-subtitle">
//             Let's discuss your next AI/ML project or collaboration opportunity
//           </p>
//         </div>

//         <div className="contact-content">
//           <div className="contact-info">
//             <div className="contact-intro">
//               <h3 className="contact-intro-title">Let's Connect</h3>
//               <p className="contact-intro-text">
//                 I'm always interested in discussing new opportunities, innovative projects, 
//                 and potential collaborations in the AI and ML space. Feel free to reach out!
//               </p>
//             </div>

//             <div className="contact-methods">
//               {contactInfo.map((info, index) => (
//                 <a key={index} href={info.link} className="contact-method">
//                   <div className="contact-method-icon">
//                     <info.icon size={24} />
//                   </div>
//                   <div className="contact-method-text">
//                     <h4>{info.title}</h4>
//                     <p>{info.value}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             <div className="social-section">
//               <h4 className="social-title">Follow Me</h4>
//               <div className="social-links">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.url}
//                     className="social-link"
//                     title={social.name}
//                   >
//                     <social.icon size={24} />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="contact-form-wrapper">
//             <form onSubmit={handleSubmit} className="contact-form">
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="name">Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="Your Name"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="subject">Subject</label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   placeholder="Project Discussion"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="message">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={6}
//                   placeholder="Tell me about your project or idea..."
//                 />
//               </div>

//               <button type="submit" disabled={isSubmitting} className="submit-btn">
//                 {isSubmitting ? (
//                   <div className="loading-spinner"></div>
//                 ) : (
//                   <>
//                     <Send size={20} />
//                     <span>Send Message</span>
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contacts;

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';
import './Contacts.css';

const Contacts = () => {
  // const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      // toast({
      //   title: "Message Sent!",
      //   description: "Thank you for reaching out. I'll get back to you soon.",
      // });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "maheshparajuli717@gmail.com",
      // link: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+977 9865495350",
      // link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kathmandu,Nepal",
      // link: "#"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss your next AI/ML project or collaboration opportunity
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3 className="contact-intro-title">Let's Connect</h3>
              <p className="contact-intro-text">
                I'm always interested in discussing new opportunities, innovative projects, 
                and potential collaborations in the AI and ML space. Feel free to reach out!
              </p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="contact-method">
                  <div className="contact-method-icon">
                    <info.icon size={24} />
                  </div>
                  <div className="contact-method-text">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Discussion"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button type="submit" disabled={isSubmitting} className="submit-btn">
                {isSubmitting ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
