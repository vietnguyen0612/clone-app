import React from 'react'
import "./Contact.scss"

export default function Contact() {
  return (
    <div className='contacts' id='contact'>
        <div className='contact-title'>
            CONTACT OR FIND US ON <a href='#'>THE MAP </a>
        </div>  

        <div className='info'>

            <div className="left">

                <div className="centered-block">
                    <label for="name" className="contact-label">Name</label>
                    <input type="text" id="name" className="contact-field required" name="name_field"/>

                </div>

                <div className="centered-block">

                    <label for="mail" className="contact-label">E-mail</label>

                    <input type="text" id="mail" className="contact-field required" name="mail_field"/>

                </div>

                <div className="centered-block">

                    <label for="subject" className="contact-label">Subject</label>

                    <input type="text" id="subject" className="contact-field required" name="subject_field"/>

                </div>

            </div>

            <div className='right'>
                <div class="centered-block">

                    <label for="message" class="contact-label">Message</label>

                    <textarea id="message" class="contact-field textarea-contact required" name="message_field"></textarea>



                    <span class="checkout">

                        <span>Send</span>

                        <i class="fa fa-envelope-o"></i>

                    </span>

                </div>
            </div>
        </div>

    </div>
  )
}
