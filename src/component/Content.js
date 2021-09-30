import React, { useState } from 'react';
import './Content.css';

import { useSwipeable } from 'react-swipeable';

function Content({ data }) {

    const [showPopup, setShowPopup] = useState(false);
    var className = 'pop-up hidden';

    const handleLinks = () => {

        const hidePopup = () => {
            setTimeout(() => {
                setShowPopup(false);
            }, 2000);
        }

        setShowPopup(true);
        hidePopup();
    }

    const handlers = useSwipeable({
        onSwipedUp: e => {
            handleLinks();
        }
    });

    if (showPopup === true) {
        className = className.replace(/hidden/gi, '');
    }

    if (data !== undefined) {

        var languages, links;

        if (Object.keys(data).length > 0) {
            
            languages = data.languages.split(',') || [];
            links = Object.keys(data.links) || [];
        }


        return (
            <article 
                className='story-content'
                {...handlers} >
                <h1>{data.title || ''}</h1>
                <p>{data.content || ''}</p>
                <ul>
                    {languages.map(language => {
                        return <li key={language} >{language}</li>
                    })}
                </ul>


                <div className={className}>
                    {links.map(link => {

                        let result

                        if (link === 'source-code') {
                            result = <a 
                                key={link}
                                target='_blank' 
                                rel='noreferrer' 
                                href={data.links[link]} >Code source</a>
                        }

                        if (link === 'website') {
                            result = <a 
                                key={link}
                                target='_blank' 
                                rel='noreferrer' 
                                href={data.links[link]} >Tester le projet</a>
                        }

                        return result;
                    })}
                </div>

                <p 
                    className='swipe-up'
                    onClick={handleLinks} >

                    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7L9 1L17 7" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <span>En savoir plus</span>
                </p>
            </article>
        );
    }

    return '';
}

export default Content;