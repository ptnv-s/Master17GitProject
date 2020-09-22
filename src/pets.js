const pets = [
    {"name": "Matt", "species": "Dog"},
    {"name": "Bob", "species": "Cat"},
    {"name": "Kat", "species": "Pangolin"}
];
 

for (const pet of pets) {
        let table = document.getElementById("pet-table")
        let row = document.createElement("tr")
        let nameCol = document.createElement("td")
        let speciesCol = document.createElement("td")

        nameCol.innerHTML = pet.name 
        speciesCol.innerHTML = pet.species

        table.appendChild(row)
        row.appendChild(nameCol)
        row.appendChild(speciesCol)

        console.log(pet);
}

