import AsciiImage from './ascii_image.js';
import aboutMe from '../images/profile.jpeg';

function About() {
  return (
    <>
      <h2>about me</h2>
      <section id="about">
        <AsciiImage file={aboutMe} id="about_me" />
        <p>
        I am currently a freshman Computer Science student at the University of California, Santa Cruz. 
        My areas of interest include Applied Math, Cybersecurity, Computational Graphics, and Astrophysics.
        </p>
      </section>
    </>
  );
}

export default About;
