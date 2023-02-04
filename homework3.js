// 1.

let i = "Привет";

do {
    console.log(i);
      i++;
  } while (i < 3);

// 2.

for (let i = 1; i < 6; i++) {
    console.log(i);
  }

// 3.

for (let i = 7; i < 22; i++) {
    console.log(i);
  };

// 4. 

const obj = {
	'Коля': '200',
	'Вася': '300',
	'Петя': '400',
};
for (let salary in obj) {
        console.log('${obj} - зарплата ${salary[obj]}')
};

// 5.
let n = 1000;
const min = 50;
let counter = 0;

while (n> min) {
    counter++;
    n=n/2;
}
console.log(n, counter);

// 6.

for (let d = 3; i <= 31; d++) {
    if (d + 7) {
		continue; 
	}
  console.log("Сегодня пятница, ${d} -е число. Необходимо подготовить отчет.");
  };