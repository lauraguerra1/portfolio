import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <button className="menu-button material-symbols-outlined">{'menu'}</button>
      <a target='_blank' href='https://docs.google.com/document/d/1dBflBmkAOu7wCbJQrIY7XsgG6asjzAwJwWdqy5mzQnk/edit?usp=sharing'><button className="resume-button">view resume</button></a>
    </nav>
  );
}

export default Navbar