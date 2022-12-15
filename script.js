/* ------------------------------ TASK 5 --------------------------------------------
Sukurkite duomenu masyva, kuriame butu talpinami duomenys apie studentus:
1. Vardas
2. Pavarde
3. Amzius
4. Studijavimo datos pradzia

Turint siuos duomenis atlikti filtravima pagal studijavimo datos pradzia. Pavyzdziui,
norime matyti studentus kurie pradejo studijuoti nuo 2022-03-10. Si pasirinkima vartotojas atlieka
paprastu inputu. Filtravimas ivyksta tik tada kai vartotojas paspaudzia mygtuka Submit

P.S Reikalingus HTML elementus prisideti, kaip input, output ir tt
------------------------------------------------------------------------------------ */

const students = [
  {
    name: "Antanas",
    lastname: "Antanaitis",
    age: 19,
    date: 2022 - 09 - 01,
  },
  {
    name: "Bronius",
    lastname: "Bronislovas",
    age: 20,
    date: 2021 - 09 - 01,
  },
  {
    name: "Ceslovas",
    lastname: "Cesaitis",
    age: 21,
    date: 2020 - 09 - 01,
  },
  {
    name: "Darius",
    lastname: "Dariavicius",
    age: 19,
    date: 2022 - 09 - 01,
  },
  {
    name: "Evaldas",
    lastname: "Evaldaitis",
    age: 21,
    date: 2020 - 09 - 01,
  },
  {
    name: "Feliksas",
    lastname: "Feliksavicius",
    age: 20,
    date: 2021 - 09 - 01,
  },
];

const select = document.getElementById("enlisted_date");
const output = document.getElementById("output");

select.addEventListener("change", filterOut);

function filterOut() {
  const htmlData = [];
  if (select.value === "2020") {
    const newData = students.filter((x) => x.date === 2020 - 09 - 01);
    newData.forEach((el) => {
      htmlData.push(`<div>${el.name} ${el.lastname}</div>`);
    });
    output.innerHTML = htmlData.join("");
  } else if (select.value === "2021") {
    const newData = students.filter((x) => x.date === 2021 - 09 - 01);
    newData.forEach((el) => {
      htmlData.push(`<div>${el.name} ${el.lastname}</div>`);
    });
    output.innerHTML = htmlData.join("");
  } else if (select.value === "2022") {
    const newData = students.filter((x) => x.date === 2022 - 09 - 01);
    newData.forEach((el) => {
      htmlData.push(`<div>${el.name} ${el.lastname}</div>`);
    });
    output.innerHTML = htmlData.join("");
  } else {
    return (output.innerText = "");
  }
}

// DRY!

// function arrPush() {
//   newData.forEach((el) => {
//     htmlData.push(`<div>${el.name} ${el.lastname}</div>`);
//   });
//   output.innerHTML = htmlData.join("");
// }
// arrPush();

// function init() {}

// init();
