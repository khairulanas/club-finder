import "../component/search-bar.js"
import "../component/club-list.js"
import DataSource from "../data/data-source.js"

const main = () => {
    const searchElement = document.querySelector("search-bar");
    // const buttonSearchElement = document.querySelector("#searchButtonElement"); //deleted
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (error) {
            fallbackResult(error);
        }


    };

    const renderResult = results => {
        clubListElement.clubs = results;
        // clubListElement.innerHTML = "";
        // results.forEach(club => {
        //     // const name = club.name;
        //     // const fanArt = club.fanArt;
        //     // const description = club.description;

        //     const { name, fanArt, description } = club

        //     const clubElement = document.createElement("div");
        //     clubElement.setAttribute("class", "club");

        //     clubElement.innerHTML = `
        //     <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
        //     <div class="club-info">
        //         <h2>${name}</h2>
        //         <p>${description}</p>
        //     </div>`;
        //     clubListElement.appendChild(clubElement);
        // })
    };

    const fallbackResult = message => {
        clubListElement.renderError = message;
        // clubListElement.innerHTML = "";
        // clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main