export const checkJWT = async (token) => {

  try {

    const response = await fetch('http://localhost:3000/api/check', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })

    return await response.text()

  } catch (error) {
    console.log(error)
  }

}