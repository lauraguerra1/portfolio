import Toggler from "../../Toggler/Toggler";

const NewProjectForm = ({ updateProject, submitProject, project, adjustLoginNeeded, setPostSuccess }) => {

  const mainInputs = ['Title', 'Description', 'Tech', 'Link', 'Gh', 'Image'].map(input => {
    const updateInputValue = updateProject(input.toLowerCase());
    return (
      <div className='column-flex-default form-piece' key={input}>
        <label htmlFor={input.toLowerCase()} className='align-self-start'>{input === 'Gh' ? 'GitHub': input}</label>  
        <input type='text' id={input.toLowerCase()} name={input.toLowerCase()} onChange={updateInputValue} value={project[input.toLowerCase()]} required/>
      </div>
    )
  })

  return (
    <form id='newProjForm' onFocus={() => setPostSuccess('')} onSubmit={submitProject} className='w-80 column-flex-default'>
      <h1 style={{textAlign: 'center', marginBottom: '30px'}}>New Project</h1>
        <div className='display-grid'>
          {mainInputs}
        </div>
        <div className='instructions-options'>
          <p>Login Instructions Needed? </p> 
          <Toggler onClick={adjustLoginNeeded} value={project.loginInfo} option1='Yes' option2='No'/>
        </div>
        {
          project.loginInfo &&
          <div className='display-grid'>
          <div className='column-flex-default form-piece'>
          <label htmlFor='username' className='align-self-start'>Username</label>  
          <input type='text' id='username' name='username' value={project.username} onChange={(e) => updateProject(e.target.name)(e)} required/>
          </div>
          <div className='column-flex-default form-piece'>
          <label htmlFor='password' className='align-self-start'>Password</label>  
          <input type='text' id='password' name='password' value={project.password} onChange={(e) => updateProject(e.target.name)(e)} required/>
          </div>
          </div>
        }
        <button>Add Project</button>
      </form>
  )
}

export default NewProjectForm