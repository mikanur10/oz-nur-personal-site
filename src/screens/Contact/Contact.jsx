import React from 'react';
import './Contact.css';
import NavBar from '../../components/NavBar/NavBar';


export default function Contact() {
  return (
    <div className="background">
      <NavBar />
      <section id="contact">
        <h2 className="title">Contact</h2>

        <form action="https://formspree.io/f/xpzoyylk" method="POST">
          <input type="text" name="name" placeholder="Name" />

          <input type="email" name="_replyto" placeholder="Email" />

          <textarea name="message" placeholder="Message"></textarea>

          <input id="submit"
            type="submit"
          />
        </form>
      </section>
      <div id="footer-icon">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/osman-nur-50053989/"><img className="footer-icon" src="https://res.cloudinary.com/dvysqqdqe/image/upload/v1576006711/makefg.php_lmlrff.png" alt="Linkedin Link" /></a>
      </div>
    </div>
  )
}