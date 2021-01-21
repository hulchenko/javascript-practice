const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

let i = 0;

do {
if (people[i] === "Lola" || people[i] === "Phil") {
    refused.textContent += people[i] + ", ";
}else{
    admitted.textContent += people[i] + ", ";
}
i++;
}
while (i<people.length) {
    //this part to eliminate last 2 symbols and add a fullstop to it. Function is complete before square brackets above.
    refused.textContent = refused.textContent.slice(0, refused.textContent.length-2) + ".";
    admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length-2) + ".";
}
