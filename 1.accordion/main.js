const data=[
  {
    id:"1",question:"What is JavaScript?",
    answer:"JavaScript is a versatile programming language primarily used for web development to create interactive and dynamic web pages."
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

const accordionWrapper=document.querySelector(".accordion");

function createAccordionData(){
  accordionWrapper.innerHTML=data.map((Item)=>
  `<div class="accordion_item">
  <div class="accordion_title">
  <h3>${Item.question}</h3>
  <i class="fa-solid fa-arrow-down"></i>
  </div>
  <div class="accordion_content">
  <p>${Item.answer}</p>
  </div>
  </div>`
  )
  .join(" ");
}
createAccordionData();

const getAccordionTItles=document.querySelectorAll(".accordion_title");

getAccordionTItles.forEach((currentItem)=>{
  currentItem.addEventListener("click",(event)=>{
    if(currentItem.classList.contains("active")){
      currentItem.classList.remove("active");
    }else{
      let getAlreadyAddedActiveClasses=document.querySelectorAll(".active");
      getAlreadyAddedActiveClasses.forEach((currentActive)=>{
        currentActive.classList.remove("active");
      });
      currentItem.classList.add("active");
    }
  });

});