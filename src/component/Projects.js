import React, { useState, useEffect } from 'react';
import { Fragment } from 'react/cjs/react.production.min';

import database from '../base';
import Card from './Card';
import Footer from './Footer';

function Projects() {

    const [projects, setProjects] = useState(() => {

        let initVal;
        database.ref('/').on('value', snapshot => {

            if (snapshot.val()) {
              initVal = snapshot.val();
            }
        });

        return initVal || {};
    });

    useEffect(() => {

        database.ref('/').on('value', snapshot => {

            if (snapshot.val()) {
              setProjects(snapshot.val());
            }
          });
    }, []);

    const cards = Object.keys(projects).map(project => (
        <Card project={projects[project]} />
    ));      

    return (
        <Fragment>
            <main className='projects'>

                <h1>Mes projets récents</h1>

                <section>
                    {cards}
                </section>
            </main>
            <Footer />
        </Fragment>
    );
}

export default Projects;