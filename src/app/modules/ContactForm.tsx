'use client';

import React, { FormEvent, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("Envoyer");    

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("En cours d'envoi...");
    const elm = document.querySelectorAll('.js-alert');

    if (formRef.current) {
        emailjs.sendForm('service_c0i8zfb', 'template_dyv6oqi', formRef.current, 'pXODMrWih9PsQF2Ft')
            .then(() => {
                elm[0].classList.add('o-alert', '--success');
                elm[0].append("Message envoyé. Merci !");
            
                setStatus("Envoyer");
            }, () => {
                elm[0].classList.add('o-alert', '--error');
                elm[0].append("Une erreur est survenue. Vous pouvez réessayer d'utiliser le formulaire. Si le problème persiste, utilisez <a href='mailto:maxime.louf@live.fr'>mon adresse personnel</a>");
            
                setStatus("Envoyer");
            });
    }
  };
  return (
    <form ref={formRef} className="c-form" onSubmit={sendEmail}>
        <div className="js-alert"></div>
        <p className="c-form__mandatory">Tous les champs sont obligatoire.</p>
        <div className="form-control">
            <label className="form-control__label" htmlFor="name">Nom :</label>
            <input className="form-control__input" type="text" name="name" id="name" autoComplete="name" required />
        </div>
        <div className="form-control">
            <label className="form-control__label" htmlFor="email">Email :</label>
            <input className="form-control__input" type="email" name="email" id="email" autoComplete="email" required />
        </div>
        <div className="form-control">
            <label className="form-control__label" htmlFor="message">Message :</label>
            <textarea className="form-control__textarea" name="message" id="message" required />
        </div>
        <button type="submit" className="o-button">{status}</button>
    </form>
  );
};

export default ContactForm;