const reviews = [
{
    id: 1,
    name: 'Portune',
    job: 'Teacher',
    img:  'IMG_1781.jpeg' ,
    text: 'You had excellent habits, especially earlier on in the year. You consistently came to revise old assessments and improve your understanding of concepts we covered.',
},

{
    id: 1,
    name: 'Mr.L',
    job: 'Teacher',
    img: 'https://media.licdn.com/dms/image/v2/C4D03AQH1hb_YiDgvkQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662519432541?e=1758153600&v=beta&t=MC62_CrVz7GcvVBxuiM9GyHoiLj5tp1Gl7DgPVbbCoU',
    text: 'Your doing a great job in class and continue to be a positive influence to those in the class and continue to ask questions. Continue to be attentive in class and keep up the great effort.',
},

{
    id: 1,
    name: 'Ms.Fofana',
    job: 'Teacher',
    img: 'https://media.licdn.com/dms/image/v2/C4D03AQHVr0vTj5Fauw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1526950414817?e=1758153600&v=beta&t=goeQLEr5M130XOKEZLny-_6HZ_mIFaB9PRof8aloJEY',
    text: 'MJ is a remakable helper in the classroon, consistently stepping up to support both peers and teachers. His leadership skills shine brightly as he encourages others to share their thoughts.',
},

];

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Start at first review
let currentItem = 0;

// Function to show person
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Initial load
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

// Next button
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// Prev button
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});



























// console.log("Hello World");

// let myString = "a2b3c";
// console.log(myString);

//  let myNumVar = 123;
//  console.log(typeof myNumVar); 

//  console.log(10 + " eggs");
//  console.log(10+ 7 + "eggs");
//  console.log("eggs" + 10  + 7);

// console.log(10<=20);
// //Both Conditions Need to be true
// console.log(7>3)&&(5<10);

// //One condition must be true
// console.log(10 >3)||(10>12);

// //If the statement is logical or not
// console.log(!5>3);

// function introduction(name, age){
//     console.log("Hello, my name is " + name  +" and I am " + age  + " years old.")
// } 

// introduction("MJ", 14)

// const hour = new  Date ().getHours();
// let greeting = "";

// if (hour<12){
//     greeting = "Good morning ☀️";
// }else if (hour<18){
//     greeting = "Good afternoon";
// }else  {
//     greeting = "Good  evening";
// }

// document.getElementById("greeting").innerText = greeting;