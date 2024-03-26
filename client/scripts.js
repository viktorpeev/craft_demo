const api = "http://localhost:8080/cards"

const display = document.querySelector("#display-data")


const getData = async () => {
    const res = await fetch(api);
    const data = await res.json();

    return data;
}

const displayData = async () => {
    const payload = await getData();

    let dataDisplay = payload?.parks.map((e) => {


        return `
        <section class="custom_card">
          <header class="banner category_${e.category}">${e.category}</header>
          <article>
            <article>
              <header>
                <img src=${e.image} alt="image" />
              </header>
              <section class="card-profile__info">
                <h2 class="card_title">${e.title}</h2>
                <p class="card_body">${e.body}</p>
                <section class="card_link_section">
                    <button class="category_${e.category}">Find Out More</button>
                </section>
              </section>
            </article>
          </article>
        </section>
        `
    }).join("")

    console.log(dataDisplay)


    display.innerHTML = dataDisplay;
}

displayData();