document.querySelectorAll(".timeline-item").forEach((item) => {
  item.addEventListener("click", function () {
    const year = this.getAttribute("data-year");

    document
      .querySelectorAll(".timeline-item")
      .forEach((el) => el.classList.remove("active"));
    this.classList.add("active");

    const content = document.querySelector(".timeline-content");
    content.innerHTML = `
          <div class="timeline-entry">
              <img src="images/${getImageByYear(year)}" alt="${year}">
              <div class="entry-text">
                  <h1>${year}</h1>
                  <h2>${getContentByYear(year)}</h2>
              </div>
          </div>
      `;
  });
});

function getContentByYear(year) {
  const contentMap = {
    "April 2018":
      "We are one of India's leading drone firms in providing end-to-end Drone Solutions.",
    "April 2019":
      "Expansion into new markets with innovative drone technologies.",
    "April 2020":
      "Introduction of AI-driven drone systems for smart monitoring.",
    "April 2021":
      "Partnership with global leaders for advanced drone analytics.",
    "April 2022": "Launch of eco-friendly drones for sustainable solutions.",
    "April 2023": "Enhanced services with 5G-enabled drone connectivity.",
    "April 2024":
      "Pioneering next-gen autonomous drones for various industries.",
  };
  return contentMap[year] || "";
}

function getImageByYear(year) {
  const imageMap = {
    "April 2018": "april-2018.jpg",
    "April 2019": "april-2019.jpg",
    "April 2020": "april-2020.jpg",
    "April 2021": "april-2021.jpg",
    "April 2022": "april-2022.jpg",
    "April 2023": "april-2023.jpg",
    "April 2024": "april-2024.jpg",
  };
  return imageMap[year] || "";
}
