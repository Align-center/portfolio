import React, { Fragment, useEffect, useState } from 'react';
import './App.css';

import { Redirect } from 'react-router';

import Header from './component/Header';
import Footer from './component/Footer';
import database from './base';
import { Link } from 'react-router-dom';

function App() {

  const [projects, setProjects] = useState({});
  const [goToProjects, setGoToProjects] = useState(false);

  var card,
    languages;

  useEffect(() => {

    database.ref('/').on('value', snapshot => {

      if (snapshot.val()) {
        setProjects(snapshot.val());
      }
    });
  }, []);

  if (Object.keys(projects).length > 0) {
    languages = projects['project-1'].languages.split(',');
    card = (
      <article className='project' onClick={() => setGoToProjects(true)}>
  
        <h3>{projects['project-1'].title}</h3>

        <p>{projects['project-1'].content}</p>

        <ul>
            {languages.map(language => (
                <li key={language}>{language}</li>
            ))}
        </ul>
      </article>
    );
  }

  if (goToProjects === true) {
    return <Redirect push to={'/projects'} />
  }

  return (
    <Fragment>
      <Header />

      <main className='home'>

        <h2 id='anchor'>Projet à la une</h2>

        {card}

        <Link className="cta" to='/projects'>
          Voir plus de projets 

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="m506.134 241.843-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z"/>
          </svg>
        </Link>

        <article className='download'>

          <h2>Téléchargez mon CV au format PDF</h2>

          <a 
            href={require('./img/cv.pdf').default} 
            download
            className="cta">
            Télécharger le CV
          </a>
        </article>
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;
