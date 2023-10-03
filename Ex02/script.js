function generateButtons() {
    const container = document.querySelector(".container");
    const h1 = document.querySelector("h1");

    // Update the h1 text
    h1.textContent = "There are a lot of buttons here!";

    // Create and append buttons to the container
    for (let i = 1; i <= 100; i++) {
        const button = document.createElement("button");
        button.textContent = "I am button " + i;
        container.appendChild(button);
    }
}

// Use setTimeout to delay the execution of the function
setTimeout(generateButtons, 2000);
