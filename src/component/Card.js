import React from 'react';


function Card({ project }) {

    const languages = project.languages.split(',');
    const links = Object.keys(project.links);

    return (
        <article >
            <h2>{project.title || ''}</h2>
            <p>{project.content || ''}</p>
            <ul>
                {languages.map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>

            <div className='links'>
                {links.map(link => {

                    let result

                    if (link === 'source-code') {
                        result = <a 
                            key={link}
                            target='_blank' 
                            rel='noreferrer' 
                            href={project.links[link]} >Code source</a>
                    }

                    if (link === 'website') {
                        result = <a 
                            key={link}
                            target='_blank' 
                            rel='noreferrer' 
                            href={project.links[link]} >Tester le projet</a>
                    }

                    return result;
                    })}
            </div>
        </article>
    );
}

export default Card;