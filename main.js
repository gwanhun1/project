const $first = document.querySelector(".first");
const $name = document.querySelector(".name");
const $what = document.querySelector(".what");
const $one = document.querySelector(".one");
const $two = document.querySelector(".two");
const $three = document.querySelector(".three");
const $four = document.querySelector(".four");
const $back = document.querySelector(".back");
const $aboutMeBack = document.querySelector(".aboutMeBack");
const $aboutContact = document.querySelector(".aboutContact");
const $skillBack = document.querySelector(".skillBack");
const $projectBack = document.querySelector(".projectBack");
const $contactBack = document.querySelector(".contactBack");
const $up = document.querySelector(".up");
const $sideAbout = document.querySelector(".sideAbout");
const $sideSkill = document.querySelector(".sideSkill");
const $sideProject = document.querySelector(".sideProject");
const $down = document.querySelector(".down");
const $jsz = document.querySelector(".jsz");
const $cssz = document.querySelector(".cssz");
const $htmlz = document.querySelector(".htmlz");
const $githubz = document.querySelector(".githubz");
const $reactz = document.querySelector(".reactz");

window.addEventListener('scroll', function () { 
      let value = this.window.scrollY;
      if (value > 400) {
            $first.style.animation = 'firstComeBack 1s ease-out forwards';
            $name.style.animation = 'secondComeBack 1s ease-out forwards';
            $what.style.animation = 'thirdComeBack 1s ease-out forwards';
      } else { 
            $first.style.animation = 'firstBack 1s ease-out forwards';
            $name.style.animation = 'secondBack 1s ease-out forwards';
            $what.style.animation = 'thirdBack 1s ease-out forwards';
      }
})


$one.addEventListener('click', function () {
      $aboutMeBack.scrollIntoView({ behavior: "smooth" });
});
$two.addEventListener('click', function () {
      $skillBack.scrollIntoView({ behavior: "smooth" });
});
$three.addEventListener('click', function () {
      $projectBack.scrollIntoView({ behavior: "smooth" });
});


$up.addEventListener('click', function () {
      $back.scrollIntoView({ behavior: "smooth" , block:"center"});
});
$sideAbout.addEventListener('click', function () {
      $one.scrollIntoView({ behavior: "smooth", block:"center" });
});
$sideSkill.addEventListener('click', function () {
      $two.scrollIntoView({ behavior: "smooth" , block:"center"});
});
$sideProject.addEventListener('click', function () {
      $three.scrollIntoView({ behavior: "smooth", block:"center" });
});
$down.addEventListener('click', function () {
      $contactBack.scrollIntoView({ behavior: "smooth" });
});


$aboutContact.addEventListener('click', function () {
      $contactBack.scrollIntoView({ behavior: "smooth", block:"center" });
});

window.addEventListener('scroll', function () { 
      let value = this.window.scrollY;
      if (value > 4800) {
            $jsz.style.animation = 'js 1.5s ease-out forwards';
      } else { 
            $jsz.style.animation = 'jsb 1.5s ease-out forwards';
      }
})
window.addEventListener('scroll', function () { 
      let value = this.window.scrollY;
      if (value > 4800) {
            $cssz.style.animation = 'css 1.6s ease-out forwards';
      } else { 
            $cssz.style.animation = 'cssb 1.6s ease-out forwards';
      }
})
window.addEventListener('scroll', function () { 
      let value = this.window.scrollY;
      if (value > 4800) {
            $htmlz.style.animation = 'html 1.4s ease-out forwards';
      } else { 
            $htmlz.style.animation = 'htmlb 1.4s ease-out forwards';
      }
})
window.addEventListener('scroll', function () { 
      let value = this.window.scrollY;
      if (value > 4800) {
            $githubz.style.animation = 'github 1.7s ease-out forwards';
      } else { 
            $githubz.style.animation = 'githubb 1.7s ease-out forwards';
      }
})
window.addEventListener('scroll', function () { 
      let value = this.window.scrollY;
      if (value > 4800) {
            $reactz.style.animation = 'react 1.7s ease-out forwards';
      } else { 
            $reactz.style.animation = 'reactb 1.7s ease-out forwards';
      }
})


//5000~6150

// window.addEventListener("scroll", function () { 
//       if (this.scrollY > 600 && this.scrollY<1499) {
//             $one.scrollIntoView({ behavior: "smooth" });
//       }
//       else if (this.scrollY > 1500 && this.scrollY<2601) {
//             $two.scrollIntoView({ behavior: "smooth" });
//       }
//       else if (this.scrollY > 2600) {     
//             $three.scrollIntoView({ behavior: "smooth" });
//       }
// })