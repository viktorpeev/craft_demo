import cardButton from './components/CardButton.js'


const api = "http://localhost:8080/cards"

const display = document.querySelector("#display-data")


const getData = async () => {
    const res = await fetch(api);
    const data = await res.json();

    return data;
}

const displayData = async () => {
    const payload = await getData();

    let dataDisplay = payload?.parks.map((e, index) => {
        if (!e.image) return;

        return `
        <section class="${index === 1 ? `active` : ``} custom_card" >
          <article>
          <header class="custom_card__banner custom_card__category_${e.category}">${e.category}</header>
              <figure>
                <img src=${e.image} alt="image" />
              </figure>
              <section>
                <h2 class="custom_card__title">${e.title ? e.title : 'National Park'}</h2>
                <p class="custom_card__body">${e.body}</p>
              </section>
          </article>
          ${e.link ? `
                <section class="custom_card__link-section">
                  ${cardButton(e.linkText, e.category, e.link)}
                </section>
              ` : ''}
        </section>
        `
    }).join("")


    display.innerHTML = dataDisplay;
}

displayData();