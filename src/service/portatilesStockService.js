export const getPortatilesStock = async (token) => {

  const response = await fetch('http://localhost:3333/api/portatiles?stock=true', {
    headers: {
      'Authorization': `Bearer ${token}`, // notice the Bearer before your token
    },
  })
  return await response.json()

}