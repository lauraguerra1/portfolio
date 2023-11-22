import './About.css'

import { Link } from 'react-router-dom';
const About = () => {
  const font = {fontSize: '20px', textAlign: 'left'}
  return (
    <section className='column-flex descriptive-section' id='aboutSection'>
      <h1 className='page-header'>ABOUT ME</h1>
      <section className='scroll-about-section'>
        <article>
          <p style={font}>As a dedicated freelance software engineer, I specialize in collaborating with business owners to discern the unique needs of their companies. My focus lies in crafting comprehensive full-stack software projects, including but not limited to new or upgraded websites and online branding design materials.</p>
          <p style={font}>As an immigrant from Brazil, my journey has been dedicated to empowering individuals from disadvantaged backgrounds. In my past careers, I've delved into mental health care and recruitment. </p>
          <p style={font}>However, it was a transformative moment in a 'Try Coding' class at the Turing School of Software & Design that revealed my true passion — Software Engineering. The undeniable excitement and fulfillment from that class lingered with me. </p>
          <p style={font}>The very next day at work, I eagerly shared the code I wrote with my coworkers. Even though it was just words on a screen, that excitement clarified my path — I needed to take a leap of faith to turn my passion into a fulfilling career.</p>
          <p style={font}>Join me on this dynamic journey as I merge Health & Wellness with Software Development, shaping a more inclusive future. Ready to elevate your business through technology? Let's collaborate and bring your vision to life.</p>
        </article>
      </section>
      <Link to='/contact' className='contact-btn'>Let's connect!</Link>
    </section>
  );
}

export default About