const people = [
    {"name": "Larry", "age": 28},
    {"name": "Curly", "age": 27},
    {"name": "Mo", "age": 31},
];



for (const person of people) {
    // Build a table (using the dom) and add the people above
    let table = document.getElementById('people-table');
    let row = document.createElement('tr');
    let nameCol = document.createElement('td');
    let ageCol = document.createElement('td');
    nameCol.innerHTML = person.name;
    ageCol.innerHTML = person.age;
    table.appendChild(row);
    row.appendChild(nameCol);
    row.appendChild(ageCol);
    console.log(person);
}


