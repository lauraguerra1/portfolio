const handleError = async (response) => {
  if (!response.ok) {
    throw new Error(`Error ${response.status}: Please try again.`)
  }
  const data = await response.json()
  return data;
}

const fetchEndpoint = (mainEndpoint) => {
  return async(jwt) => {
    const res = await fetch(`https://lgg-portfolio-api.vercel.app/api/v1/${mainEndpoint}${jwt ? `/${jwt}`: ''}`);
    const data = await handleError(res)
    return data
  }
}
const getAuthorizedUser = fetchEndpoint('users')

const getProjects = fetchEndpoint('projects')

const postProject = async (project) => {
  const res = await fetch(`https://lgg-portfolio-api.vercel.app/api/v1/projects`, {
    method: 'POST', 
    body: JSON.stringify(project),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = handleError(res)
  return data
}


export {getAuthorizedUser, getProjects, postProject}