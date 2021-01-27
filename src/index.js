const submit = document.querySelector('.submit');
const languageSubmit = document.querySelector('.languageField');
const sortSubmit = document.querySelector('.order');
const randomSubmit = document.querySelector('.random');
const fazerMenuFI = document.querySelector('.fazerFI');
const fazerMenuEN = document.querySelector('.fazerEN');
const sodexoMenu = document.querySelector('.sodexo');

import FazerMenu from "./fazer-week-example.json";// importataan paikallisessa hakemistossa oleva json tiedosto
import FazerMenuEN from "./fazer-week-example-en.json";// importataan paikallisessa hakemistossa oleva json tiedosto
import SodexoMenu from "./sodexo-day-example.json";// importataan paikallisessa hakemistossa oleva json tiedosto


// function sort() {
//   courses.sort();
//   document.getElementById("box1").innerHTML = courses;
//   window.alert("järjestetty");
// }

// sortSubmit.addEventListener('click', sort);

// function random() {
//   var random = courses[Math.floor(Math.random() * courses.length)];
//   window.alert(random);
// }

// randomSubmit.addEventListener('click', random);


   ///////////////////// FAZER MENU SUOMI /////////////////////

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
      document.getElementById("box1").innerHTML += "+ " + fazerMenuList + "  + " + "<br></br>";
  
      function select(item) {
  
        var dish = item.Name;
        return dish;
      }
    }
  
  }
  fazerMenuFI.addEventListener('click', menuFazer);


     ///////////////////// FAZER MENU ENGLISH /////////////////////

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
        document.getElementById("box1").innerHTML += "+ " + fazerMenuList + "  + " + "<br></br>";
    
        function select(item) {
    
          var dish = item.Name;
          return dish;
        }
      }
    
    }
    fazerMenuEN.addEventListener('click', menuFazerEN);

    ///////////////////// SODEXO MENU /////////////////////

    function menuSodexo() {
      
        var courses = SodexoMenu.courses; //json importattu jo alussa
        document.getElementById("box1").innerHTML = "";
        var x, txt = "";


        for (x in courses) {
          txt += "+ " + courses[x].title_fi + "  +" + "<br></br>";
          };
          
          document.getElementById("box1").innerHTML = txt;
      

      
      
        // for (var i = 0; i < menuListLength; i++) {
      
        //   var menuList = SodexoMenu.LunchMenus[0].SetMenus[i].Meals.map(select);
        //   document.getElementById("box1").innerHTML += menuList + "<br>";
      
        //   function select(item) {
      
        //     var dish = item.Name;
        //     return dish;
        //   }
        // }
      
      }
      sodexoMenu.addEventListener('click', menuSodexo);

