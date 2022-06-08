const reviews = [
    {
        id: 1,
        place: "Praia de Atalaia",
        region: "Região Sul",
        img:
            "/assets/img/praia.png",
        text:
            "Com 9 km de extensão, a praia de Atalaia, Aracaju (SE), tem sua orla ocupada por hotéis, restaurantes e calçadão com quadras e ciclovia."

    },
    {
        id: 2,
        place: "Mercado Municipal",
        region: "Região Centro",
        img:
            "/assets/img/mercado.png",
        text:
            "No Mercado Municipal Antônio Franco, em Aracaju (SE), encontram-se peças de artesanato mais populares, entre bordados, cerâmicas, redes, rendas e objetos de palha."

    },
    {
        id: 3,
        place: "Foz do Rio Real",
        region: "Litoral Sul",
        img:
            "/assets/img/praia-saco.png",
        text:
            "A foz do Rio Real fica na Praia do Saco, Estância (SE), uma das mais preservadas da região."

    },
    {
        id: 4,
        place: "Praia da Orla",
        region: "Região Sul",
        img:
            "/assets/img/atalaia.png",
        text:
            "A praia da Orla de Atalaia é a mais famosa da cidade – e conta com uma boa infraestrutura para atender aos turistas."

    },
    {
        id: 5,
        place: "Lago da Orla",
        region: "Região Sul",
        img:
            "/assets/img/lago.png",
        text:
            "Os lagos artificiais da cidade ficam próximos ao Oceanário, uma boa opção para passeios com crianças. Na saída, vale a pena parar para observar a região e tomar uma água de coco."

    },
    {
        id: 6,
        place: "Mercado Central",
        region: "Região Centro",
        img:
            "/assets/img/mercado-central.png",
        text:
            "Mercado Albano Aranco, Aracaju em Sergipe."

    },
    {
        id: 7,
        place: "Sede do Governo",
        region: "Região Centro",
        img:
            "/assets/img/governo.png",
        text:
            "Sede do governo do estado até a década de 80, o Palácio Museu Olímpio Campos preserva alguns móveis originais, rádio e telefone antigos."
    },
    {
        id: 8,
        place: "Museu da Gente Sergipana",
        region: "Região Centro",
        img:
            "/assets/img/museu.png",
        text:
            "O espaço Praças Sergipanas, do Museu da Gente Sergipana faz uma alusão à memória do Carrossel do Tobias, tradicional brinquedo dos festejos natalinos da Praça da Catedral em Aracaju."

    },

];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const region = document.getElementById("region");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.place;
    region.textContent = item.region;
    info.textContent = item.text;
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.place;
    region.textContent = item.region;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;

    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
    currentItem--;

    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showPerson(currentItem);
});

/*
randomBtn.addEventListener("click", function () {
    console.log("Olá Mundo JavaScript");

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
*/
