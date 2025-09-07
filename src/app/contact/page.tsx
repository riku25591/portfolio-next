import ContactForm from "../modules/ContactForm";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact'
}

const Contact = () => {
    return (
      <>
        <p className="intro">Vous souhaitez collaborer ? Envoyez-moi <a href="mailto:maxime.louf@live.fr">un mail</a>, ou remplissez le formulaire suivant</p>
        <section className="section">
            <div className="l-container">
                <ContactForm />
            </div>
        </section>
      </>
    );
  }
  
  export default Contact;
