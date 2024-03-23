let navbar = document.querySelector(".navbar");
document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("active");
};

/*JELASKAN MAKSUD DIBAWAH INI!!!*/

// Select all links in the navbar
const navbarLinks = document.querySelectorAll(".navbar a");

// Add click event listener to each link to close the navbar when clicked
navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});