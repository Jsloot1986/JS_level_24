let button_countries = document.getElementById("button-countries");
let listUl = document.getElementById("item");
let answer ="";

function addCountries(country) {
    listLi = document.createElement('li');
    listLi.innerHTML = country;
    answer.appendChild(listLi);
}


function getCountries(e){
let countries = randomPersonData.map(element => element.region);
let countries2 = [];
countries.forEach(country =>{
    if(countries2.includes(country)){}else countries2.push(country)
});
countries2 = countries2.sort();
    answer.innerHTML = "";
    countries2.forEach(country => addCountries(country));
    if (answer.classList.contains("show_img"))
        answer.classList.remove("show_img");
}


button_countries.addEventListener("click", getCountries);

