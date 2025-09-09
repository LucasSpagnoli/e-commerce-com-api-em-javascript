import { filter } from './functions.js'
import { url } from './variables.js'

async function getData(request) {
  try {
    const response = await fetch(`${request}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(`Erro: ${error}`)
    return { error }
  }
}

(async () => {
  const allProducts = await getData(url)
  console.log(allProducts)
  filter(allProducts)
})()
