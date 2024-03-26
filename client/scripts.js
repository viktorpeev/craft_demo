const api = "http://localhost:8080/cards"

const display = document.querySelector("#display-data")

const cardButton = (text, category, link) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add(`category_${category}`);
    button.addEventListener('click', () => {
        console.log(link);
        window.location.href = link;
    });

    
    return button.outerHTML;
};


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
        <section id="${index === 1 ? `featured` : ``}" class="custom_card" >
          
          <article>
          <header class="banner category_${e.category}">${e.category}</header>
              <figure>
                <img src=${e.image} alt="image" />
              </figure>
              <section class="card-profile__info">
                <h2 class="card_title">${e.title ? e.title : 'National Park'}</h2>
                <p class="card_body">${e.body}</p>
              </section>
          </article>
          ${e.link ? `
                <section class="card_link_section">
                  ${cardButton(e.linkText, e.category, e.link)}
                </section>
              ` : ''}
        </section>
        `
    }).join("")


    display.innerHTML = dataDisplay;
}

displayData();