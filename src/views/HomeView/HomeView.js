import React from "react";
import styles from './HomeView.module.scss';
import './MouseScrollAnimation.scss';
import welderIMG from '../../assets/weld.svg';
import MyProjects from "../../components/MyProjects";
import Contact from "../../components/Contact/Contact";


const HomeView = () => {

    return(
    <>
       <section className={styles.wrapper}>

           <div className={styles.contactInfo}>
               <h3>667 838 591</h3>
               <h3>myjak.uslugispawalnicze@gmail.com</h3>
           </div>

           <div className={styles.icon}/>
           <header>

               <h1>Usługi Spawalnicze</h1>
               <h2>Adrian Myjak</h2>


               <p> Realizuję kompleksowe zlecenia spawalnicze związane z projektowaniem oraz <b>tworzeniem konstrukcji stalowych</b>, produktów wykorzystywanych w hodowli zwierząt, bram i ogrodzeń, a także elementów specjalnych. Wykorzystuje stal nierdzewną, czarną oraz aluminium oraz metody MAG i TIG. </p>


           </header>
           <button className={styles.callNow}>Wykonane zlecenia</button>

           <div className="mouse_scroll">

               <div className="mouse">
                   <div className="wheel"></div>
               </div>
               <div>
                   <span className="m_scroll_arrows unu"></span>
                   <span className="m_scroll_arrows doi"></span>
                   <span className="m_scroll_arrows trei"></span>
               </div>
           </div>

       </section>

        <MyProjects/>
        <Contact/>
    </>
    );
}

export default HomeView;