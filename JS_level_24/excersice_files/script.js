let button_countries = document.getElementById("button-countries");
let button_matches = document.getElementById("button-matches");
let listUl = document.getElementById("item");


function addCountries(country) {
    listLi = document.createElement('li');
    listLi.innerHTML = country;
    listUl.appendChild(listLi);
}


function getCountries(e){
let countries = randomPersonData.map(element => element.region);
let countries2 = [];
countries.forEach(country =>{
    if(countries2.includes(country)){}else countries2.push(country)
});
countries2 = countries2.sort();
    listUl.innerHTML = "";
    countries2.forEach(country => addCountries(country));
    if (listUl.classList.contains("show_img"))
        listUl.classList.remove("show_img");
}

function getAstro(day, month) {
    let astro = "";
    switch (month) {
        case 1:
            if (day <= 21) astro = "Capricorn"
            else astro = "Aquarius";
            break;
        case 2:
            if (day <= 19) astro = "Aquarius"
            else astro = "Pisces";
            break;
        case 3:
            if (day <= 20) astro = "Pisces"
            else astro = "Aries";
            break
        case 4:
            if (day <= 20) astro = "Aries"
            else astro = "Taurus";
            break;
        case 5:
            if (day <= 20) astro = "Taurus"
            else astro = "Gemini";
            break;
        case 6:
            if (day <= 21) astro = "Gemini"
            else astro = "Cancer";
            break;
        case 7:
            if (day <= 22) astro = "Cancer"
            else astro = "Leo";
            break;
        case 8:
            if (day <= 23) astro = "Leo"
            else astro = "Virgo";
            break;
        case 9:
            if (day <= 22) astro = "Virgo"
            else astro = "Libra";
            break;
        case 10:
            if (day <= 23) astro = "Libra"
            else astro = "Scorpio";
            break
        case 11:
            if (day <= 22) astro = "Scorpio"
            else astro = "Sagittarius";
            break;
        case 12:
            if (day <= 21) astro = "Sagittarius"
            else astro = "Carpicorn"

    }
    return astro;
}
function makeMatchesList(photo, name, surname, region, age, astro, matchbutton) {
    let image = document.createElement("img");
    let box = document.createElement("div");
    image.setAttribute("src", photo);
    image.setAttribute("alt", name + " " + surname);
    image.setAttribute("width", "100%");
    box.classList.add("match_img")
    box.appendChild(image);
    p1 = document.createElement('p');
    p1.innerHTML = name + " " + surname;
    p1.classList.add('match_p1');
    p2 = document.createElement('p2');
    p2.innerHTML = region;
    p2.classList.add('match_p2');
    p3 = document.createElement('p');
    p3.innerHTML = age;
    p3.classList.add('match_p3');
    p4 = document.createElement('p');
    p4.innerHTML = astro;
    p4.classList.add("match_p4");
    button_match = document.createElement("button");
    if (matchbutton === "back") {
        button_match.innerHTML = "all persons";
        button_match.classList.add("button_all_persons");
        console.log(button_match);
    } else {
        button_match.innerHTML = "Make Match"
        button_match.classList.add("button-matches");
    }
    let listLi = document.createElement("li");
    listLi.appendChild(box);
    listLi.appendChild(p1);
    listLi.appendChild(p2);
    listLi.appendChild(p3);
    listLi.appendChild(p4);
    if (matchbutton === "yes" || matchbutton === "back")
        regel.appendChild(button_match);
    ListLi.classList.add("show_matches")
    listUl.appendChild(listLi);
}


function makeMatchMakingListAllPersons(adults) {
    adults.forEach(element => {
        makeMatchesList(element.photo, element.name, element.surname, element.region, element.age, element.astro, "yes");
    })
}

function makeMatches(e) {
    let parent = e.target.parentElement;
    let childeren = parent.children;
    let childerenArr = Array.from(childeren);
    let nameSurname_ref = "";
    let country_ref = "";
    let age_ref = 0;
    let astro_ref = "";
    let photo_ref = "";
    childerenArr.forEach((element, index) => {
        if (element.classList.contains("match_img")) {
            let children2 = Array.from(element.children);
            children2.forEach((item, index) => {
                if (item.hasAttribute("src"))
                    photo_ref = item.getAttribute("src");
            })
        }
        if (element.classList.contains("match_p1"))
            nameSurname_ref = element.textContent;
        if (element.classList.contains("match_p2"))
            country_ref = element.textContent;
        if (element.classList.contains("match_p3"))
            age_ref = parseInt(element.textContent);
        if (element.classList.contains("match_p4"))
            astro_ref = element.textContent;
    })
    console.log(nameSurname_ref + " " + country_ref + " " + age_ref.toString() + " " + astro_ref + " " + photo_ref);
    console.log("adults " + adults.length);
    let matches = adults.filter(item => {
        if (item.astro === astro_ref) {
            if ((item.name + " " + item.surname) === nameSurname_ref) { return false; } else { return true; }
        } else { return false }
    });
    console.log("total matches " + matches.length);

    listUl.innerHTML = "";
    console.log("Fullname " + nameSurname_ref + " " + country_ref + " " + age_ref.toString() + " " + astro_ref + " " + photo_ref);
    makeMatchesList(photo_ref, nameSurname_ref, "", country_ref, age_ref.toString(), astro_ref, "back");
    let listLi = document.createElement("li");
    listLi.innerHTML = "Matched with : ";
    listUl.appendChild(listLi);
    matches.forEach(element => makeMatchesList(element.photo, element.name, element.surname, element.region, element.age, element.astro, "no"));
    let button_match_back = document.getElementsByClassName("button_all_persons");
    button_match_back[0].addEventListener("click", getAllMatches());
}

function getAllMatches(e) {
    listUl.innerHTML = "";
    if (listUl.classList.contains("show_img"))
        listUl.classList.remove("show_img");
    adults = randomPersonData.filter(element => {
        let birthday = element.birthday.dmy.substring(6, 10);
        if ((parseInt(new Date().getFullYear()) - parseInt(birthday)) >= 18)
            return true;
        else return false;
    });
    adults.map(item => {
        if (item.surname === "María Elena Carrillo")
            console.log(item.name + " " + item.surname);
        day = parseInt(item.birthday.dmy.substring(0, 2));
        month = parseInt(item.birthday.dmy.substring(3, 5));
        astro = getAstro(day, month);
        if (item.surname === "María Elena Carrillo")
            console.log("Astro :" + astro);
        item["astro"] = astro;
    })

    adults = adults.sort(function(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    })
    getAllMatches(adults);
    buttonsMatchMaking = document.getElementsByClassName("button-match");
    buttonsMatchMakingArr = Array.from(buttonsMatchMaking);
    buttonsMatchMakingArr.forEach(item => item.addEventListener("click", makeMatches));
}
let birthday = 0;
let month = 0;
let year = 0;
let listLi = "";
let country = "";
let age = 0;
let adults = [];
let astro = "";
let photo = "";
let age_ref = 0;


button_countries.addEventListener("click", getCountries);
button_matches.addEventListener("click", getAllMatches);
