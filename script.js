// Global variable definitions
let indexMainContent;

let jsonArry = [
  {
    "id" : 1,
    "movie" : "Mission impossible",
    "director" : "Brian De Palma",
    "score" : "6.1",
    "price" : "$20",
    "imgUrl" : "1.jpg",
    "status" : "saleabel"
  },
  {
    "id" : 2,
    "movie" : "Space rescue",
    "director" : "Kerim spenck",
    "score" : "7.4",
    "price" : "$20",
    "imgUrl" : "2.jpg",
    "status" : "saleabel"
  },
  {
    "id" : 3,
    "movie" : "terminator",
    "director" : "James Cameron",
    "score" : "6.3",
    "price" : "$22",
    "imgUrl" : "3.jpg",
    "status" : "saled"
  },
  {
    "id" : 4,
    "movie" : "007",
    "director" : "Sam Mendes",
    "score" : "7.7",
    "price" : "$30",
    "imgUrl" : "4.jpg",
    "status" : "saleabel"
  },
  {
    "id" : 5,
    "movie" : "Assassin's Creed",
    "director" : "Justin Kurzel",
    "score" : "5.9",
    "price" : "$25",
    "imgUrl" : "5.jpg",
    "status" : "saleabel"
  },
  {
    "id" : 6,
    "movie" : "Young Marx",
    "director" : "Hau Peck",
    "score" : "8.7",
    "price" : "$33",
    "imgUrl" : "6.jpg",
    "status" : "saled"
  },
];

// 初始化
window.addEventListener("DOMContentLoaded", function() {
  indexMainContent = document.getElementById("indexcontent");

  for(var i = 0; i < jsonArry.length; i++) {
    dynamicAddElement(jsonArry[i]);
  }
});

// 根据json动态添加div
function dynamicAddElement(jsonInp) {
  let newContentElement = document.createElement("div");
  newContentElement.classList.add("indexContentElement");

  if(jsonInp["status"] == "saled") {
    newContentElement.style.backgroundColor = "#787878";
  }
  else {
    newContentElement.style.backgroundColor = "#26dd50";
  }


  let newContentHeaderImage = document.createElement("img");
  newContentHeaderImage.classList.add("indexContentHeaderImage");
  newContentHeaderImage.src = jsonInp["imgUrl"];
  newContentElement.appendChild(newContentHeaderImage);

  if(jsonInp["status"] == "saled") {
    newContentElement.style.filter = "grayscale(100%)";
  }

  let newContentPetName = document.createElement("h2");
  newContentPetName.innerText = jsonInp["movie"];
  newContentPetName.classList.add("indexContentH2");
  newContentElement.appendChild(newContentPetName);

  let newContentPetBreed = document.createElement("p");
  newContentPetBreed.innerText = jsonInp["director"];
  newContentPetBreed.classList.add("indexContentP");
  newContentElement.appendChild(newContentPetBreed);

  let newContentPetLocation = document.createElement("p");
  newContentPetLocation.innerText = jsonInp["score"];
  newContentPetLocation.classList.add("indexContentP");
  newContentElement.appendChild(newContentPetLocation);

  let newContentPetPrice = document.createElement("p");
  newContentPetPrice.innerText = jsonInp["price"];
  newContentPetPrice.classList.add("indexContentP");
  newContentElement.appendChild(newContentPetPrice);

  indexMainContent.appendChild(newContentElement);
}
