import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './About.css';
import Footer from './Footer';

function About() {
    return (
        <Fragment>
            <main className='about'>

                <h1>A propos de moi</h1>

                <p>
                    Salut ! Je suis <strong>Lucas</strong>, un <strong>développeur web front-end</strong> basé sur <strong>Marseille</strong>. <br />
                    Voilà deux ans que je suis actif dans ce milieu, et un des mes objectifs depuis le début est de faire en sorte que les utilisateurs de mes sites aient la meilleure expérience possible ; tout en permettant a mes clients d'avoir la visibilité dont ils ont besoins.
                </p>

                <p>
                    D'un point de vue plus personnel, je suis un un grand fan de musique en tout genre et quasi impossible à battre à un blindtest. Je fais aussi de l'illustration et de la gravure sur mon temps libre. <br />
                    Dans tout les cas je n'aime pas ne rien faire, je suis curieux de tout et appliqué dans tout ce que je fais.
                </p>

                <p>
                    Si jamais mon profil vous interesse, n'hésitez pas à me contacter ou téléchargez mon cv pour avoir plus de détails sur mes expériences passées et mes compétences.
                </p>

                <button className="cta">Télécharger mon CV au format PDF</button>
            </main>
            <Footer />
        </Fragment>
    );
}

export default About;