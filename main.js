// User main info
const userPicture = document.querySelector(".userPicture");
const userName = document.querySelector(".userName");
const userId = document.querySelector(".userId");

// Info hover
const hoverNation = document.querySelector(".nation");
const hoverBirthday = document.querySelector(".birthday");
const hoverPhoneNum = document.querySelector(".phoneNum");
const hoverLocation = document.querySelector(".location");
const hoverEmail = document.querySelector(".email");
const displayData = document.querySelector(".displayData");

fetch("https://randomuser.me/api/") //
  .then((response) => response.json())
  .then((json) => {
    const jsonData = json.results[0];
    console.log(jsonData);

    userPicture.innerHTML = `<img src="${jsonData["picture"].large}" alt="" />`;
    userName.innerHTML = `${jsonData["name"].last} ${jsonData["name"].first}`;
    userId.innerHTML = jsonData["id"].name;
    displayData.innerHTML = jsonData["location"].country;

    // addEventListener
    hoverNation.addEventListener("mouseover", () => {
      displayData.innerHTML = jsonData["location"].country;
    });
    hoverBirthday.addEventListener("mouseover", () => {
      displayData.innerHTML = jsonData["dob"].date;
    });
    hoverPhoneNum.addEventListener("mouseover", () => {
      displayData.innerHTML = jsonData["phone"];
    });
    hoverLocation.addEventListener("mouseover", () => {
      displayData.innerHTML = `${jsonData["location"].street.number} 
      ${jsonData["location"].street.name} 
      ${jsonData["location"].city} 
      ${jsonData["location"].state}
      ${jsonData["location"].country}`;
    });
    hoverEmail.addEventListener("mouseover", () => {
      displayData.innerHTML = jsonData["email"];
    });
  })
  .catch(() => console.log("error"));

function infoNation(jsonData) {}

function infoBirthday(jsonData) {}

function infoPhoneNum(jsonData) {}

function infoLocation(jsonData) {}

function infoEmail(jsonData) {}
