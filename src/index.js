const submit = document.querySelector('.submit');
const languageSubmit = document.querySelector('.languageField');
const sortSubmit = document.querySelector('.order');
const randomSubmit = document.querySelector('.random');
const fazerMenuFI = document.querySelector('.fazerFI');
const fazerMenuEN = document.querySelector('.fazerEN');

import FazerMenu from "./fazer-week-example.json";// importataan paikallisessa hakemistossa oleva json tiedosto
import FazerMenuEN from "./fazer-week-example-en.json";// importataan paikallisessa hakemistossa oleva json tiedosto
// import SodexoMenu from "./sodexo-day-example.json";// importataan paikallisessa hakemistossa oleva json tiedosto

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
  document.getElementById("box1").innerHTML = courses;
  window.alert("järjestetty");
}

sortSubmit.addEventListener('click', sort);

function random() {
  var random = courses[Math.floor(Math.random() * courses.length)];
  window.alert(random);
}

randomSubmit.addEventListener('click', random);


function menuFazer() {
  //window.alert(FazerMenu.LunchMenus[0].DayOfWeek);
  
    var fazerMenuListLength = FazerMenu.LunchMenus[0].SetMenus.length; //json importattu jo alussa
    document.getElementById("box1").innerHTML = "";
  
    //    var x;
    //   for (x in fazerMenuList){
    //   document.getElementById("box").innerHTML += fazerMenuList[x] + "<br>";
    //   }
    // }
  
  
    for (var i = 0; i < fazerMenuListLength; i++) {
  
      var fazerMenuList = FazerMenu.LunchMenus[0].SetMenus[i].Meals.map(select);
      document.getElementById("box1").innerHTML += fazerMenuList + "<br>";
  
      function select(item) {
  
        var dish = item.Name;
        return dish;
      }
    }
  
  }
  fazerMenuFI.addEventListener('click', menuFazer);

  function menuFazerEN() {
    //window.alert(FazerMenu.LunchMenus[0].DayOfWeek);
    
      var fazerMenuListLength = FazerMenuEN.LunchMenus[0].SetMenus.length; //json importattu jo alussa
      document.getElementById("box1").innerHTML = "";
    
      //    var x;
      //   for (x in fazerMenuList){
      //   document.getElementById("box").innerHTML += fazerMenuList[x] + "<br>";
      //   }
      // }
    
    
      for (var i = 0; i < fazerMenuListLength; i++) {
    
        var fazerMenuList = FazerMenuEN.LunchMenus[0].SetMenus[i].Meals.map(select);
        document.getElementById("box1").innerHTML += fazerMenuList + "<br>";
    
        function select(item) {
    
          var dish = item.Name;
          return dish;
        }
      }
    
    }
    fazerMenuEN.addEventListener('click', menuFazerEN);

