export const getPortatil = async (token, ID) => {

  const response = await fetch(`http://localhost:3333/api/portatiles/${ID}`, {
    headers: {
      'Authorization': `Bearer ${token}`, // notice the Bearer before your token
    },
  })
  return await response.json()

}