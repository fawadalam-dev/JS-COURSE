let Datatheme = {
    house: {
        floor1: [
            { room1: { items: ["books", "table", "chair", "pen"] } },
            { room2: { items: ["laptop", "phone", "computer"] } }
        ],
        floor2: [
            { room1: { bed: ["ali", "khan", "ashfaq"] } },
            { room2: { bed: ["hamdan", "nangyal", "zohan"] } },
            { room3: { name: "zakir" } },
        ],
    },
    school: {
        classes: [
            {
                name: "8th",
                students: [
                    { name: "Ali", marks: "559" },
                    { name: "Khan", marks: "779" }
                ]
            },

            {
                name: "9th",
                students: [
                    { name: "zain", marks: "785" },
                    { name: "wajid", marks: "987" },
                    { name: "sajid", marks: "857" },
                ]
            },
            {
                name: "10th",
                students: [
                    { name: "azlan", marks: "564" },
                    { name: "hamdan", marks: "764" },
                    { name: "hasham", marks: "364" }
                ]
            }
        ]
    },
    store: [
        {
            catgories: "electronic",
            products: [
                { name: "laptop", price: "325000" },
                { name: "mobile", price: "150000" }
            ]
        },
        {
            catgories: "cloths",
            products: [
                { name: "jacket", price: "5600" },
                { name: "shirt", price: "1600" }
            ]

        }
    ]
};
let outputDiv = document.getElementById("output");

outputDiv.innerHTML = `
        <p>Student Name: ${Datatheme.school.classes[1].students[0].name}</p>
        <p>Marks: ${Datatheme.school.classes[1].students[0].marks}</p>
        <p>Product Name: ${Datatheme.store[0].products[1].name}</p>
    `;