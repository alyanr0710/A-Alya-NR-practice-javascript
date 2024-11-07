// Discography
const albums = [
    { title: "The First Step: Chapter One", year: 2020 },
    { title: "The First Step: Chapter Two", year: 2020 },
    { title: "The First Step: Treasure Effect", year: 2021 }
];

// Member Facts
const members = [
    { name: "Hyunsuk", age: 22, position: "Leader, Rapper" },
    { name: "Jihoon", age: 21, position: "Leader, Vocalist" },
    { name: "Yoshi", age: 21, position: "Rapper" },
    { name: "Junkyu", age: 20, position: "Vocalist" },
    { name: "Jaehyuk", age: 20, position: "Vocalist" },
    { name: "Asahi", age: 19, position: "Vocalist" },
    { name: "Doyoung", age: 19, position: "Dancer" },
    { name: "Haruto", age: 18, position: "Rapper" },
    { name: "Jeongwoo", age: 18, position: "Vocalist" },
    { name: "Junghwan", age: 17, position: "Vocalist, Dancer" }
];

// Group Facts
const groupFacts = [
    "Treasure debuted on August 7, 2020.",
    "They are under YG Entertainment.",
    "Treasure has 10 members.",
    "Their fandom name is Treasure Maker.",
    "They won the Rookie of the Year award in 2020."
];

// Display Discography
const albumTableBody = document.querySelector('#album-table tbody');
albums.forEach(album => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${album.title}</td><td>${album.year}</td>`;
    albumTableBody.appendChild(row);
});

// Display Member Facts
const memberList = document.getElementById('member-list');
members.forEach(member => {
    const li = document.createElement('li');
    li.textContent = `${member.name}, Age: ${member.age}, Position: ${member.position}`;
    memberList.appendChild(li);
});

// Display Group Facts
const groupList = document.getElementById('group-list');
groupFacts.forEach(fact => {
    const li = document.createElement('li');
    li.textContent = fact;
    groupList.appendChild(li);
});
