import './About.css'
const About = () => {
  const font = {fontSize: '22px'}
  return (
    <section className='column-flex descriptive-section' id='aboutSection'>
      <h1>ABOUT ME</h1>
      <article>
        <p style={font}>I believe that inherently, we, as people are defined by our core values, and a core value for me, is giving back and helping others. Over the past five years, I focused my work and education in the mental health treatment field. However, I faced barriers to continuing a traditional education in that field due to my status as an immigrant. I'm extremely proud to be from Brazil, and I didn't want those barriers to stop me from finding a way to continue to give back to others.</p>
        <p style={font}>When I was introduced to the world of Software Engineering, I took an interest in the opportunity it provided to make valuable changes through product design and customer interfaces. I was granted the Inclusion scholarship to attend Turing's program and took the leap of faith to pursue a non-traditional educational path because I felt that it would provide me with a new skill set to help people through a different avenue. As I transition into this new career, I hope to continue to be able to give back to others through a combined focus on Health & Wellness and Software Development.</p>
        <p style={font}>I want to be a part of a company that values its customer experiences and considers inclusivity, as well as consumer well-being, in its product design. For me, giving back to others starts with working in a role that allows me to make an impact in a tangible manner -- I think that the world of software development unlocks a variety of opportunities to do just that!</p>
      </article>
    </section>
  );
}

export default About