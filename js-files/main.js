const eventLists = document.querySelectorAll(".events-list li");
let eventImg = document.querySelector(".event-img");
let eventTitle = document.querySelector(".event-title");
let eventDesc = document.querySelector(".event-desc");

eventLists.forEach((li, index) => {
  li.addEventListener("click", () => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        let element = data[index];
        eventImg.src = element.img;
        eventTitle.textContent = element.title;
        eventDesc.textContent = element.desc;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
