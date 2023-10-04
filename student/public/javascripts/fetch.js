//view interactivity
const complain = document.querySelector(".problem-lg");
const makeComplain = document.querySelector(".hide");
const form = makeComplain.children[0];
let condition = true;
function occur(c) {
  console.log(c);
  if (c) {
    makeComplain.className = "make-complain";
    form.classList.remove("cmp");
  } else {
    makeComplain.className = "hide";
    form.classList.add("cmp");
  }
  return !c;
}
complain.addEventListener("click", () => {
  condition = occur(condition);
});

const blackCover = document.querySelector(".cover");
const ntc = document.querySelector(".drop-down-notification");
const bell = document.querySelector(".fa-bell");
const cancleNtc = document.querySelector(".cancel");
bell.addEventListener("click", (e) => {	
  blackCover.classList.add("black-cover");
  ntc.classList.add("max-height");
  blackCover.classList.remove("zero-height");
  ntc.firstElementChild.style.display = "block";
  cancelNtc.classList.add("fa-xmark");
});
ntc.addEventListener('click', (e)=>{
    e.stopPropagation()
})
blackCover.addEventListener("click", () => {
  blackCover.classList.remove("black-cover");
  blackCover.classList.remove("max-height");
  blackCover.classList.add("zero-height");
  ntc.firstElementChild.style.display = "none";
  bell.classList.remove("fa-xmark");
});
const shortMsg = document.getElementById('more-details')

// shortMsg.addEventListener('click', async (e)=> {
//     const endpoint = `/student/messages/${shortMsg.id}`
//     const res = await fetch(endpoint,{})
// })