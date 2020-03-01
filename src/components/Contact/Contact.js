import React from "react";
import styles from './Contact.module.scss';

import img1 from '../../assets/welder.svg';
import FloatingLabel from 'floating-label-react';
import './ContactForm.scss';
import Inputs from "./Input/Input";


const Contact = () => {

    return(
        <>
            <section className={styles.wrapper}>
                <img/>  <h1>Skontaktuj się ze mną</h1>

                <div className={styles.contactWrapper}>

              <Inputs name='name' label='Imię i nazwisko / Nazwa firmy' maxLength={30}/>
                <Inputs name='e-mail' label='E-mail' maxLength={30}/>
                <Inputs name='topic' label='Temat wiadomości' maxLength={60}/>
                <Inputs tag="textarea" name='message' label='Treść' maxLength={300}/>



                </div>

                <h3 className={styles.contactInfo}>667 838 591</h3>
                <h3 className={styles.contactInfo}>myjak.uslugispawalnicze@gmail.com</h3>
            </section>
            </>
    );
}

export default Contact;
