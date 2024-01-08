const parser = new DOMParser();

const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");


let student = xmlDOM.querySelectorAll('student');

let list = [];
let i = 0;

student.forEach(item => {
    list[i] = {     
      name: item.querySelector('first').textContent + ' ' + item.querySelector('second').textContent,
      age: item.querySelector('age').textContent,
      prof: item.querySelector('prof').textContent,
      lang: item.querySelector('name').getAttribute('lang'),
      }
  i++;
});

console.log({list: list});