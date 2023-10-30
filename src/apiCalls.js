const handleError = async (response) => {
  if (!response.ok) {
    throw new Error(`Error ${response.status}: Please try again.`)
  }
  const data = await response.json()
  return data;
}

const getInfo = (mainEndpoint) => {
  return async(jwt) => {
    const res = await fetch(`https://lgg-portfolio-api.vercel.app/api/v1/${mainEndpoint}${jwt ? `/${jwt}`: ''}`);
    const data = await handleError(res)
    return data
  }
}
const getAuthorizedUser = getInfo('users')

const getProjects = getInfo('projects')



export {getAuthorizedUser, getProjects}