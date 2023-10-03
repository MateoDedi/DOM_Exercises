const bold = document.querySelector("b");

bold.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "beige";

bold.style.color = "red";

bold.parentElement.parentElement.style.backgroundColor = "darkblue";
bold.parentElement.parentElement.style.color = "white";

bold.parentElement.nextElementSibling.style.color = "pink";

bold.parentElement.parentElement.parentElement.previousElementSibling.children[0].children[2].style.color = "orange";

bold.parentElement.parentElement.parentElement.previousElementSibling.children[0].children[2].querySelectorAll("a").forEach((element) => {
    element.style.color = "green";
    });

bold.parentElement.parentElement.parentElement.previousElementSibling.getElementsByTagName("h1")[0].style.textTransform="uppercase"

console.log(bold.parentElement.parentElement.parentElement.previousElementSibling.getElementsByTagName("h1")[0]);