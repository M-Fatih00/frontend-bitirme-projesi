const companyList = document.querySelector(".company-list");
const unseen = document.querySelectorAll(".unseen");
const moreCompanies = document.querySelector("#moreCompanies");
let isExpanded = true;

const questions = document.querySelectorAll(".question");
const answer = document.querySelector(".answer");
const allAnswers = document.querySelectorAll('.answer');

const navbar = document.querySelector('.header-wrapper');


moreCompanies.addEventListener("click", () => {
    if(isExpanded){
        // burada diziye çevirmemizin sebebi querySelectorAll() nodeList türünde nesne dönmesi
        Array.from(unseen).forEach(unseen => {
            unseen.classList.add("active");
            unseen.classList.remove("inActive");
        });

        moreCompanies.innerHTML = `
        Daha Az Sigorta Şirketi Gör <i class="fa fa-chevron-up d-flex align-items-center ms-1"></i>
        `;
        isExpanded = false;

    }else{
        Array.from(unseen).forEach(unseen => {
            unseen.classList.add("inActive");
            unseen.classList.remove("active");
        });

        moreCompanies.innerHTML = `
        +15 Sigorta Şirketini Gör <i class="fa fa-chevron-down d-flex align-items-center ms-1"></i>
        `;
        isExpanded = true;
    }
});

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        allAnswers.forEach(a => {
            if (a !== answer) { 
                a.classList.remove("active");
                a.classList.add("inActive"); 
            }
        });

        if (answer.classList.contains("active")) {
            answer.classList.remove("active");
            answer.classList.add("inActive");

        } else {
            answer.classList.add("active");
            answer.classList.remove("inActive");

        }


    });
});



// header scroll olayı
window.addEventListener('scroll', () => {
  if (window.scrollY > 70) {
    navbar.classList.add('scrolled');

  } else {
    navbar.classList.remove('scrolled');

  }
});


