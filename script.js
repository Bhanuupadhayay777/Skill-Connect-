console.log("SkillConnect Website Started Successfully");


const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You! Your message has been submitted.");

form.reset();

});

}