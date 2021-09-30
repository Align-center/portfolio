import React, { useEffect, useState } from 'react';
import './Projects.css';

import database from '../base';
import Controls from './Controls';
import Content from './Content';
import Tuto from './Tuto';

function MobileProjects() {

    const [projects, setProjects] = useState(() => {

        let initVal;
        database.ref('/').on('value', snapshot => {

            if (snapshot.val()) {
              initVal = snapshot.val();
            }
        });

        return initVal || {};
    });
    const [pageIndex, setPageIndex] = useState(0);
    const projectIndex = Object.keys(projects)[pageIndex];
    const backgrounds = [
        'radial-gradient(circle, rgba(255,255,255,1) 14%, rgba(255,252,0,1) 100%)',
        'linear-gradient(127deg, rgba(221,214,243,1) 0%, rgba(250,172,168,1) 100%)',
        'linear-gradient(127deg, rgba(247,248,248,1) 0%, rgba(172,187,120,1) 100%)',
        'linear-gradient(127deg, rgba(255,251,213,1) 29%, rgba(178,10,44,1) 100%)',
        'radial-gradient(circle, rgba(201,214,255,1) 29%, rgba(226,226,226,1) 91%)',
        'radial-gradient(circle, rgba(74,194,154,1) 13%, rgba(189,255,243,1) 100%)'
    ];

    useEffect(() => {

        database.ref('/').on('value', snapshot => {

            if (snapshot.val()) {
              setProjects(snapshot.val());
            }
          });
    }, []);

    const getLength = () => {
        return Object.keys(projects);
    }

    const handleClick = e => {

        let swipe = e.target.closest('.swipe-up');
        let popUp = e.target.closest('.pop-up');
        let tuto = e.target.closest('.tuto');

        if (swipe !== null || popUp !== null || tuto !== null) {
            return;
        }

        let width = e.target.offsetWidth,
            x = e.nativeEvent.offsetX,
            separation = (width / 5) * 2,
            lengthArr = getLength(),
            tempPageIndex = pageIndex;

        if (x > separation) {

            if (tempPageIndex + 1 < lengthArr.length) {

                setPageIndex(tempPageIndex + 1);
            }
        } else {

            if (tempPageIndex - 1 >= 0) {

                setPageIndex(tempPageIndex - 1);
            }
        }
    }

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <main 
            className='projects-story' 
            onClick={handleClick}
            style={{background: backgrounds[getRandomInt(0,5)]}} >
            <Controls length={getLength()} pageIndex={pageIndex} />
            <Content data={projects[projectIndex]} />
            <Tuto />
        </main>
    );
}

export default MobileProjects;