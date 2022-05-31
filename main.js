// User main info
const userPicture = document.querySelector(".userPicture");
const userName = document.querySelector(".userName");
const userGender = document.querySelector(".userGender");

// Info hover
const hoverNation = document.querySelector(".nation");
const hoverBirthday = document.querySelector(".birthday");
const hoverPhoneNum = document.querySelector(".phoneNum");
const hoverLocation = document.querySelector(".location");
const hoverEmail = document.querySelector(".email");
const displayData = document.querySelector(".displayData");
const explanation = document.querySelector(".explanation");

fetch("https://randomuser.me/api/") //
  .then((response) => response.json())
  .then((json) => {
    const jsonData = json.results[0];
    console.log(typeof jsonData["dob"].date);

    userPicture.innerHTML = `<img src="${jsonData["picture"].large}" alt="" />`;
    userName.innerHTML = `${jsonData["name"].last} ${jsonData["name"].first}`;
    userGender.innerHTML = jsonData["gender"];
    explanation.innerHTML = "My country is";
    displayData.innerHTML = jsonData["location"].country;

    // addEventListener (mouseover)
    hoverNation.addEventListener("mouseover", () => {
      explanation.innerHTML = "My country is";
      displayData.innerHTML = jsonData["location"].country;
    });
    hoverBirthday.addEventListener("mouseover", () => {
      explanation.innerHTML = "My birthday is";
      displayData.innerHTML = jsonData["dob"].date.substring(0, 10);
    });
    hoverPhoneNum.addEventListener("mouseover", () => {
      explanation.innerHTML = "My phone number is";
      displayData.innerHTML = jsonData["phone"];
    });
    hoverLocation.addEventListener("mouseover", () => {
      explanation.innerHTML = "My address is";
      displayData.innerHTML = `${jsonData["location"].street.number} 
      ${jsonData["location"].street.name} 
      ${jsonData["location"].city} 
      ${jsonData["location"].state}
      ${jsonData["location"].country}`;
    });
    hoverEmail.addEventListener("mouseover", () => {
      explanation.innerHTML = "My email is";
      displayData.innerHTML = jsonData["email"];
    });
  })
  .catch(() => console.log("error"));
