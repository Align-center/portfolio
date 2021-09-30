import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <h1>
                Lucas Frech <br />
                Développeur Web Front-end
            </h1>

            <p>
                HTML, CSS et ses préprocesseurs, JavaScript et React. Voilà deux ans que je pratique ces langages quotidiennement. En y ajoutant des bases solides en PHP et SQL, on peut dire que je suis un développeur Front-end à l'aise sur des projets conjoints entre des équipes front-end et back-end.
            </p>

            <a href='mailto:lucasfrech@hotmail.fr' className='cta'>
                Me contacter
            </a>

            <a href='#anchor' className='anchor' ><svg className='chevron' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" ><path d="m304.394 139.394-139.39 139.393L25.607 139.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.858-5.858 5.858-15.355 0-21.213-5.857-5.857-15.355-5.858-21.212.001z"/><path d="M154.398 190.607a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-139.39 139.393L25.607 19.393c-5.857-5.858-15.355-5.858-21.213 0-5.858 5.858-5.858 15.355 0 21.213l150.004 150.001z"/></svg></a>
        </header>
    );
}

export default Header;