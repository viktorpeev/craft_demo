const cardButton = (text, category, link) => {
    return `
      <button onclick="window.location.href = '${link}'" class="custom_card__button custom_card__category_${category}">${text}</button>
    `;
};

export default cardButton;
