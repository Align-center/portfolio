import React from 'react';
import './Footer.css';

function Footer() {

    const requireImage = path => {
        try {
          return require(`../img/${path}`).default;
        } catch (err) {
          console.error(err);
        }
      }

    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <a target='_blank' rel='noreferrer' href="https://github.com/Align-center/">
                            <img src={requireImage('git.png')} alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/lucas-frech">
                            <img src={requireImage('linkedin.png')} alt="GitHub" />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;