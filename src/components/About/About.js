import './About.css'
import self from '../../images/self.jpeg'
import Linkbar from '../Linkbar/Linkbar';
const About = ({mainLinks}) => {
  const font = {fontSize: '20px'}
  return (
    <section className='column-flex descriptive-section' id='aboutSection'>
      <h1>ABOUT ME</h1>
      <section className='scroll-about-section'>
        <img className='about-pic' src={self} alt='portrait of laura garcia guerra' />
        <article className='about-article'>
          <p style={font}>My love for software engineering is deeply rooted in my passion for problem-solving. I thrive on puzzles, logic, and mathematics, and software engineering offers the perfect playground for these intellectual pursuits. </p>
          <p style={font}>What truly drives me in this field is my unwavering commitment to making a meaningful impact. I believe in the potential of technology to break down barriers, be they financial or related to mental health. My mission as a software engineer is to craft innovative solutions that empower individuals to overcome obstacles and reach their full potential. </p>
          <p style={font}>Let's connect! Contact me via LinkedIn or Email! <Linkbar links={mainLinks} /></p>
        </article>
      </section>
    </section>
  );
}

export default About