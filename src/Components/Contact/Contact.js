import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div className='contact'>
            <h2 className="heading">Contact <span>Me</span></h2>
            <div className="contact-container">
                <form action="https://api.web3forms.com/submit" method="POST">
                    <div className="input-box">
                        <input type="hidden" name="access_key" value="6f80bbc6-fcd2-4a6d-9c86-ff7feed55882" />
                        <input type="text" name="name" placeholder="Full Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                    <input type="submit" value="Send Message" className="btn" />
                </form>
                <div className="contact-details">
                    <p><i className="fa-solid fa-phone"></i> +91 8860699255</p>
                    <p><i className="fa-solid fa-envelope"></i> hk3711750@gmail.com</p>
                    <p><i className="fa-brands fa-linkedin-in"></i> <a href="https://www.linkedin.com/in/harsh-34b5161a0/">Harsh</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact
