  'use strict'; //use strict მოუდი გვეხმარება შეცდომების პოვნაში //ასევე შეიძლება კონკრეტული ფრჩიხლების შიგნით დაგვხვდეს ეს use strict და უშვალოდ მის შიგნით იმუშავებს ეს ვალიდაცია, ჯობია გლობალურად ჩავრთოთ და მთელ კოდზე იქონიებს გავლენას.

  // switch case - მაგალითები!!!

    let a = 2 + 2;

    switch (a){
      case 3:
        alert('too small');
        break;
      case 4:
        alert('exactly');
        break;
      case 5:
        alert('too big');
        break;
      default:
        alert("i don't know such values")
    }

// array (მასივი)

let userNames = ['ani', 'nino', 'lasha', 'luka'];
               //  0      1        2        3               index მნიშვნელობები

console.log(userNames[3]);


let userAge = [4, 5, 6, 20, 11];

console.log(userAge[4]);

// array nested მასივი 
         //              0   1    2                         index მნიშვნელობები
let numbers = [10, 20, [22, 202, 180], 12, 42, 89, 101]
         //     0   1         2         3   4   5   6       index მნიშვნელობები
         //მასივზე წვდომა 
         console.log(numbers[2]);
         // ჩადგმულ მასივზე წვდომა 
         console.log(numbers[2][1]);
         //მასივის სიგრძის გასაგებად ვწერთ lenght
         console.log(numbers.length);

        //  console.log(users[numbers.length -1]);  // დაბეჭდავს ბოლო მნიშვნელობას 101 ს თუ -2 იქნებოდა დაბეჭდავდა ბოლოს წინას 89 ს




//objects ობიექტი  (ობიექტს აქვს ფიგურული ბრჭყალები{})

// let userInfo = {
//    key:value     //ეს არის ობიექტის სინტაქსი
// }

let userInfo = {
  userNamee: 'nika',
  userAgee: 25,
  usetStatus: 'active',
  usetHobbies:['reading', 'cooking', ],
  userPhone: {
    code: 597,
    number: 54545454
  },
  userComments: [
    {
      commentId: 1,
      comentText: 'hello1'
    },
    {
       commentId: 2,
      comentText: 'hello2'
    }
  ]

}

// ობიექტიდან მნიშვნელობის ამოღბა ხდება 2 გზით
// პირველი dot notation
// console.log(userInfo.usetHobbies[0]);
// console.log(userInfo.userPhone.number);
console.log(userInfo.userComments[0].comentText);

// მეორე brackete notation 
// console.log(userInfo['usetHobbies'][0]);
// console.log(userInfo['userPhone']['number']);
console.log(userInfo['userComments'][0]['comentText']);


// სტრინგ მნიშვნელობის შეცვლა

let userNewInfo = {            //ეს არის ობიექტი რადგან ფიგურული ბრჭყალები აქვს მასივს აქვს [] ასეთი ოთხკუთხედი ბრჭყალები მასივი/array
userStatus: true,
userNameee: 'levani'
}
userNewInfo.userNameee = 'lasha'; //მნიშვნელობის ცვლილება
userNewInfo.identAge = 30; //ახალი მნიშვნელობის დამატება
delete userNewInfo.userStatus; //თუ რამის წაშლა გვინდა
console.log(userNewInfo);

//მოკლედ ჩვენ განვიხილეთ ობიექტი და მასივი object/array







// loop (ციკლი) Loop შესაძლებლობას გვაძლევს ერთსა და იმავე ბრძანებების განმეორებას ბევრჯერ
// შეგვიძლია გადავუაროთ თითოეულ მნიშვნელობას და შევასრულოთ კონკრეტული ოპერაცია ყველა ელემენტზე

// ციკლის განხილვა array/მასივზე(ობიექტზე ჯერ არა, ობიექტს სხვა ჩანაწერი სჭირდება)

// loop array
let namex = ['anna', 'mariami', 'salome', 'nika', 'giorgi'];

console.log(namex[0]);
// ციკლის ჩაწერა შეგვიძლია რამოდენიმე გზით მაგ. for loop 
// for loop
 for (let i = 0; i < 4; i++) { //for ის ფრჩხილებში გადაცემულია 3 პირობა ვქმნით ცვლადს რომელსაც ქვია i და საწყისი მნიშვნელობა აქვს 0.....
  console.log(namex[i]);       //მეორე პირობა უნდა იყოს ჭეშმარიტი იმისათვის რომ ფორ ციკლმა გააგრძელოს მუშაობა
 }                             //მესამე პირობაშ ი იზრდება 1 ით ი++.


//  for (let i = 0; i < namex.length; i++) { //თუ გვინდა თავად გათვალოს რამხელაა და ყველას გადაურბინოს რაც მასივშია ვწერთ namex.lenght
//   console.log(namex[i]);       
//  }       


// for of ით ჩვენ შეგვიძლია მივწვდეთ მნიშვნელობებს/values

for (let itm of namex) { //ესეთი მარტივი სინტაქსით თავისით მარტივად გადაუვლის ბოლომდე მასივში მოცემულ სახელებს.
  console.log(itm);     //ეს არის თანამედროვე ჩანაწერი
}

// for in ით შეგვიძლია მივწვდეთ ინდექსებს/index

for (let element in namex) {
  console.log(element); //აქ უკვე პასუხები იქნება ინდექსებიი...
}


let newArray = [ [15, 200, 20], [35, 22, 223], [565, 25, 17]];

for (let i = 0; i < newArray.length; i++){
  const nestedArray = newArray[i];
  console.log(nestedArray); //ამის პასუხი იქნება და დაბეჭდავს მთლიანად ჩადგმულ მასივებს - [15, 200, 20]  [35, 22, 223] [565, 25, 17]
  for (let items = 0; items < nestedArray.length; i++){
    const arrayValue = nestedArray[items]
    console.log(arrayValue[items]);
  }
}


// while loop
let namesUsers = ['mari', 'nika', 'sandro']

let index = 0;

while(index < namesUsers.length) {
  console.log(namesUsers[index]);
  index++;
}





// დავალების მაგალითი                   //დაბეჭდოს ისეთ რიცხვები რომლებიც მეტია 100ზე მხოლოდ...
let numberNewArray = [14, 25, 36, 187, 364, 20, 13];

for (let itemsss of numberNewArray) {
  if (itemsss > 100) {
    console.log(itemsss);
  }
}