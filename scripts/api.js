import { filter, search } from './functions.js'
import { home, url, categoryBtn, searchBar, carouselBtnLeft, carouselBtnRight } from './variables.js'

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


  for (let btn of categoryBtn) {
    btn.addEventListener('click', (elem) => {
      let idCat = elem.currentTarget.dataset.id
      idCat = idCat.replace('-', ' ');
      filter(allProducts, idCat)
    })
  }

  home.addEventListener('click', (elem) => {
    filter(allProducts)
  })

  searchBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      search(allProducts, searchBar.value)
    }
  })

  carouselBtnLeft.addEventListener('click', () => {
    const cards = document.querySelectorAll('.card')
    const visibleCards = Array.from(cards).filter(card => !card.classList.contains('hidden'))
    const firstVisibleCard = visibleCards[0]
    const cardToShow = firstVisibleCard.previousElementSibling

    if (cardToShow) {
      const lastVisibleCard = visibleCards[visibleCards.length - 1]
      lastVisibleCard.classList.add('hidden')
      cardToShow.classList.remove('hidden')
    }

  })

  carouselBtnRight.addEventListener('click', () => {
    const cards = document.querySelectorAll('.card');
    const visibleCards = Array.from(cards).filter(card => !card.classList.contains('hidden'));
    const lastVisibleCard = visibleCards[visibleCards.length - 1];
    const cardToShow = lastVisibleCard.nextElementSibling;

    if (cardToShow) {
      const firstVisibleCard = visibleCards[0];
      firstVisibleCard.classList.add('hidden');
      cardToShow.classList.remove('hidden');
    }

  })

})()