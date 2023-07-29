export const getPrestamos = async (token) => {

  const response = await fetch(`http://localhost:3333/api/prestamos`, {
    headers: {
      'Authorization': `Bearer ${token}`, // notice the Bearer before your token
    },
  })
  return await response.json()

}