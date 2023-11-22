import './About.css'
import self from '../../images/self.jpeg'
import Linkbar from '../Linkbar/Linkbar';
import { Link } from 'react-router-dom';
const About = ({mainLinks}) => {
  const font = {fontSize: '20px'}
  return (
    <section className='column-flex descriptive-section' id='aboutSection'>
      <h1 className='page-header'>ABOUT ME</h1>
      <section className='scroll-about-section'>
        <article>
          <p style={font}>As an immigrant from Brazil, my journey has been dedicated to empowering individuals from disadvantaged backgrounds. In my past careers, I've delved into mental health care and recruitment. </p>
          <p style={font}>However, it was a transformative moment in a 'Try Coding' class at the Turing School of Software & Design that revealed my true passion — Software Engineering. The undeniable excitement and fulfillment from that class lingered with me. </p>
          <p style={font}>I am now offering freelance web services, including website development and management. I am always open to new opportunities, networking, and more -- so please feel free to connect with me!</p>
        </article>
      </section>
      <Link to='/contact' className='contact-btn'>Let's connect!</Link>
    </section>
  );
}

export default About