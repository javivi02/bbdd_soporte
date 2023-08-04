export const updatePortatil = async (token, ID, data) => {

  const response = await fetch(`http://localhost:3333/api/portatiles/${ID}`, {
    method: 'PUT',
    headers: { 'Authorization': `Bearer ${token}` , 'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })

  return await response.json()

}