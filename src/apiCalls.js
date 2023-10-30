const getAuthorizedUser = async(jwt) => {
  const res = await fetch(`https://lgg-portfolio-api.vercel.app/api/v1/${jwt}`);
  if (!res.ok) {
    throw new Error(`Error ${res.status}: Please try again.`)
  }
  const data = await res.json()
  return data;
}

export {getAuthorizedUser}