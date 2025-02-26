renderPackageCards();

function renderPackageCards() {
    const packages = [
        {
            id: 1,
            name: "Chirala Beach",
            image: "img/chirala-beach.jpg",
            description: "Enjoy a spiritual journey to Yadagirigutta with our exclusive 1-day trip package.",
            price: 1199,
        },
        {
            id: 2,
            name: "Yadagirigutta",
            image: "img/yadagirigutta.jpg",
            description: "Enjoy a spiritual journey to Yadagirigutta with our exclusive 1-day trip package.",
            price: 1199,
        },
        {
            id: 3,
            name: "Ananthagiri Hills",
            image: "img/ananthagiri-hills.jpg",
            description: "Enjoy nature's beauty at Ananthagiri Hills with our exclusive 1-day trip package. ",
            price: 1199,
        },
    ];

    const packageContainer = document.getElementById("package-container");
    packages.forEach(package => {
        const card = document.createElement("div");
        card.classList.add("package-card");
        card.innerHTML = `
            <img src="${package.image}" alt="${package.name}">
            <h3>${package.name}</h3>
            <p>${package.description}</p>
            <p>Price: ${package.price}</p>
        `;
        packageContainer.appendChild(card);
    });
}
