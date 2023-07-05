import './Navbar.css'

const Navbar = ({clickMenu}) => {
  return (
    <nav className='nav'>
      <button aria-expanded='false' className="menu-button material-symbols-outlined" onClick={clickMenu}>menu</button>
      <a target='_blank' href='https://docs.google.com/document/d/1dBflBmkAOu7wCbJQrIY7XsgG6asjzAwJwWdqy5mzQnk/edit?usp=sharing'><button className="resume-button">view resume</button></a>
    </nav>
  );
}

export default Navbar