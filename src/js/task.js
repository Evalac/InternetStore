// потрібно створити функцію яке буде формувати чергу в магазині
// 1 параметр масив, кількість елементів це кількість покупців, значення елементу масиву це час який покупець витратить на касі
// 2 параметр це кількість кас
// Повертає обєкт де ключ це номер касси, значення це час черги на кассі
// 12+2+15=29
//3+5+6+7=21
//{1:29,2:21}

function fn(arr, cash) {
  const obj = {};
  for (let i = 1; i <= cash; i += 1) {
    obj[i] = 0;
  }
  arr.forEach(buyer => {
    const values = Object.values(obj);
    const minValues = Math.min(...values);
    const currentCase = values.indexOf(minValues) + 1;
    obj[currentCase] += buyer;
  });

  return obj;
}

console.log(fn([12, 3, 5, 6, 2, 15, 7], 2));
