// 1 завдання

let lang = "ua";
let message;

switch (lang) {
  case "ua":
    message = "Травень";
    break;

  case "en":
    message = "July";
    break;

  case "fr":
    message = "Janvier";
    break;

  default:
    message = "Такої мови не існує";
}
console.log(message);

// 2 завдання

// let modal = prompt("Який напій ви бажаєте Кава, Чай чи Сік");
// let price;

// switch (modal) {
//   case "кава":
//     price = alert("Ви вибрали каву з вас 350$");
//     break;

//   case "чай":
//     price = alert("Ви вибрали чай з вас 200$");
//     break;

//   case "сік":
//     price = alert("Ви вибрали сік з вас 50$");
//     break;

//   default:
//     price = alert(
//       "Вибачте в нас такого напаю не подають виберіть з переліченого"
//     );
// }

// 3 завдання

// let day = prompt("Який день тижня сьогодні?");
// let sourceWorking;

//  switch (day) {
//    case "понеділок":
//      sourceWorking = prompt("робочий");
//      break;

//    case "вівторок":
//      sourceWorking = prompt("робочий");
//      break;

//    case "середа":
//      sourceWorking = prompt("робочий");
//      break;

//    case "четвер":
//      sourceWorking = prompt("робочий");
//      break;

//    case "п'ятниця":
//      sourceWorking = prompt("робочий");
//      break;

//    case "субота":
//      sourceWorking = prompt("вихідний");
//      break;

//    case "неділя":
//      sourceWorking = prompt("вихідний");
//      break;

//    default:
//      sourceWorking = prompt(
//        "Такого дня не існує!"
//      );
//  }

// 4 завдання

// let day1 = prompt("Який номер поточного місяця?");
// let number;

//  switch (day1) {
//    case "5":
//      number = prompt("Правильно травень");
//      break;

//    default:
//      number = prompt("У цього місяця не таке число");
//  }

// 5 завдання

// for (let i = 7; i <= 70; i += 7) {
//     console.log(`Табличка множеня на 7  ${i}`);
// }

// 6 завдання

// const employees = 27;
// for (let i = 12; i <= employees; i++) {
//     console.log(i);
// }

// 7 завдання


// let min = 0;
// let max = 10;
// let num = 18;

// for (let i = min; i <= max; i++) {
//  if (i === 9 / 3) {
//     console.log(`Ми знайшли добуток з 9 тай 3 ${num}`);
//      break
//      }
// }


 // 8 завдання

// let min1 = 1;
// let max2 = 100;
// let num3 = 49;

// for (let i = min1; i <= max2; i++) {
//  if (i === num3) {
//     console.log(`Ми знайшли ${num3}`);
//      break
//      }
// }

// 9 завдання

// for (let i = 10; i <= 14; i++) {

//   console.log(i);
// }
// for (let i = 16; i <= 30; i++) {
//   console.log(i);
// }

// 10 завдання

// const goods = 5;
// let totalSalary = 0;
// const max = 5000;
// const min = 500;
// for (let i = 1; i <= goods; i++) {
//     let salary = (Math.random() * (max - min) + min);
//     salary = Number(salary);
//     totalSalary = salary + totalSalary;
//     console.log(totalSalary.toFixed(0));
// }

// 11 завдання

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// 12 завдання

// let figure = prompt("Ведіть число не бльше 100");
// let maximum = 100;
// if (figure < 100) {
//   for (let i = figure; i <= maximum; i++) {
//   console.log(i);
// }
// } else {
//   figure = alert("Завилике число ведіть менше 100");
// }
