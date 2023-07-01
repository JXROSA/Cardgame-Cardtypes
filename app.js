const reviews = [
 {
  id: 1,
  name: "King",
  job: "Pusher",
  img:
   "https://t4.ftcdn.net/jpg/00/53/65/65/360_F_53656507_6aRlz7GvglpFMAbtf1zSsllWlepJfeTb.jpg",
  text: "The kinds job is to push the fron line to the back, he can also pull the backline forward but it ends your turn"
 },
 {
  id: 2,
  name: "Queen",
  job: "Archer",
  img: "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/128317/824396/190958-1024__23628.1681618649.jpg?c=2?imbypass=on",
  text: "Able to attack BackLine"
 },
 {
  id: 3,
  name: "Jack",
  job: "Mobile ",
  img: "https://cdn1.vectorstock.com/i/1000x1000/68/55/poker-playing-card-jack-spade-vector-8696855.jpg",
  text: "pushes to front line and can attack or move back whenever as long as there is duo front line"
 },
 {
  id: 4,
  name: "Joker",
  job: "Joker of all trades",
  img: "https://i.pinimg.com/736x/b4/1b/2b/b41b2bb30b0e1aafc50a13e7ae6939f9--joker-card-jester.jpg",
  text: "Able to do evertything but doesnt have a plus three attribute"
 }]

// select items 

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
 const item = reviews[currentItem];
 img.src = item.img;
 author.textContent = item.name;
 job.textContent = item.job;
 info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
 const item = reviews[person];
 img.src = item.img;
 author.textContent = item.name;
 job.textContent = item.job;
 info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
 currentItem++;
 if (currentItem > reviews.length - 1) {
  currentItem = 0;
 }
 showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
 currentItem--;
 if (currentItem < 0) {
  currentItem = reviews.length - 1;
 }
 showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {

 currentItem = Math.floor(Math.random() * reviews.length);
 showPerson(currentItem);
});