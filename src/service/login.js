export const signIn = async (usuario, password) => {

  const response = await fetch('http://localhost:3333/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({Usuario: usuario, Contrasena: password}),
  })

  return await response.json()

}