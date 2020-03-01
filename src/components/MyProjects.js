import React from "react";
import styles from './MyProjects.module.scss';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import img10 from '../assets/images/img10.jpg';

const MyProjects = () =>{
    return(
        <>
            <section className={styles.wrapper}>
                <svg/>
                <h1>Realizacje</h1>
                <p>Bramy - balustrady - przęsła - furtki - schody - konstrukcje stalowe - różne projekty</p>
                <div className={styles.gallery}>
                    <img src={img1}/>
                    <img src={img2}/>
                    <img src={img3}/>
                    <img src={img4}/>
                    <img src={img5}/>
                    <img src={img6}/>
                    <img src={img7}/>
                    <img src={img8}/>
                    <img src={img9}/>
                    <img src={img10}/>
                </div>
            </section>
            </>

    );
}

export default MyProjects;