const acesskey = "-x0YWnt2RoYDcRGGK3sOqltYGXTdPeGhDCg2i1164dI";
const formEl = document.querySelector("form");
const searchinputEl = document.getElementById("search-input");

const searchResultsEl = document.querySelector(".search-results");
const btnshowMore = document.getElementById("show-more");

let inputData = '';
let page = 1;


async  function searchImage() {
    inputData = searchinputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${acesskey}`;


    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchinputEl.innerHTML = "";
    }
    const results = data.results;
    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img")
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        
        imageLink.target = '_blank';

        imageLink.textContent = result.alt_description;



        //append image ,link
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResultsEl.appendChild(imageWrapper);

    
        
    });
    page++;






    if (page > 1) {
        document.getElementById("show-more")
            .style.display = "block";
    }
    


}


formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});

btnshowMore.addEventListener("click", () => {
    searchImage()
});