const submit = document.querySelector('.submit');
const languageSubmit = document.querySelector('.languageField');
const sortSubmit = document.querySelector('.order');
const randomSubmit = document.querySelector('.random');

const coursesEn = ["Hamburger, cream sauce and poiled potates",
  "Goan style fish curry and whole grain rice",
  "Vegan Chili sin carne and whole grain rice",
  "Broccoli puree soup, side salad with two napas",
  "Lunch baguette with BBQ-turkey filling",
  "Cheese / Chicken / Vege / Halloum burger and french fries"];

const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
  "Goalaista kalacurrya ja täysjyväriisiä",
  "vegaani Chili sin carne ja täysjyväriisi",
  "Parsakeittoa,lisäkesalaatti kahdella napaksella",
  "Lunch baguette with BBQ-turkey filling",
  "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

function teksti() {
  var kieli = languageSubmit.value;
  if (kieli === 'suomi') {
    courses = coursesFi;
    document.getElementById("box1").innerHTML = coursesFi.map(coursesFi => coursesFi);
  }

  if (kieli === 'english') {
    courses = coursesEn;
    document.getElementById("box1").innerHTML = coursesEn.map(coursesEn => coursesEn);
  }
}

submit.addEventListener('click', teksti);

function sort() {
  courses.sort();
  /*courses.reverse();*/
  document.getElementById("box1").innerHTML = courses;
}

sortSubmit.addEventListener('click', sort);

function random() {
  var random = courses[Math.floor(Math.random() * courses.length)];
  window.alert(random);
}

randomSubmit.addEventListener('click', random);

