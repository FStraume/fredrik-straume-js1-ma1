const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1 
const cat = {
    complain: function () {
        console.log("Meow!");
    }
}

//Question 2 

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.classList.add("subheading");

//Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

//Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p style='background-color: yellow'>" + "New paragraph" + "</p>";

//Question 7

function logName(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

logName(cats);

//Question 8

let displayCats = "";
const container = document.querySelector(".cat-container");

function createCats(cats) {

    for (let i = 0; i < cats.length; i++) {

        let catAge = "Age unknown";

        if (cats[i].age !== undefined) {
            catAge = cats[i].age;
        }

        displayCats = displayCats + "<div>" + "<h5>" + cats[i].name + "</h5>";
        displayCats = displayCats + "<p>" + catAge + "</p>" + "</div>";

    }

    return displayCats;
}
createCats(cats);

container.innerHTML = displayCats;