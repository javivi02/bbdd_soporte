export const getPortatiles = async () => {

  const response = await fetch('http://localhost:3000/api/portatiles');
  return await response.json();


}