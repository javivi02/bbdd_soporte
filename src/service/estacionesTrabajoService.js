export const getEstacionesTrabajo= async (token) => {

  const response = await fetch('http://localhost:3333/api/estacionesTrabajo', {
    headers: {
      'Authorization': `Bearer ${token}`, // notice the Bearer before your token
    },
  })
  return await response.json()

}