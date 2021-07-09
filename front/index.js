
const getData = async () => {
  let result = await fetch('http://localhost:3000')
  let resultado = await result.json()
  return resultado;
}

const showData = async () => {
  let result = await getData()
  console.log(result.message)
}
showData();