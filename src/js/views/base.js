export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search_field'),
    searchRes: document.querySelector('.results'),
    searchResList: document.querySelector('.result__list'),
    searchResPages: document.querySelector('.results_pages'),
    recipe: document.querySelector('.recipe'),
    shopping: document.querySelector('shopping__list'),
    likesMenu: document.querySelector('.likes__field'),
    likesList: document.querySelector('.likes__list')
};

export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader) loader.parentElement.removeChild(loader);
}