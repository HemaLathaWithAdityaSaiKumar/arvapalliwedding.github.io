const weddingDate = new Date("2026-03-08T02:38:00+05:30").getTime();

function updateCountdown(){
  const now = Date.now();
  const gap = weddingDate - now;

  if(gap <= 0){
    return;
  }

  const values = [
    Math.floor(gap/(1000*60*60*24)),
    Math.floor((gap/(1000*60*60))%24),
    Math.floor((gap/(1000*60))%60),
    Math.floor((gap/1000)%60)
  ];

  const ids=["days","hours","minutes","seconds"];

  ids.forEach((id,i)=>{
    document.getElementById(id).innerText =
      String(values[i]).padStart(2,"0");
  });
}

setInterval(updateCountdown,1000);
updateCountdown();

window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    const windowHeight=window.innerHeight;
    const elementTop=el.getBoundingClientRect().top;
    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
});
