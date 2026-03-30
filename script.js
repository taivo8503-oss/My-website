/* tạo sao rơi */
setInterval(()=>{
 let star=document.createElement("div");
 star.innerHTML="⭐";
 star.className="star";
 star.style.left=Math.random()*100+"vw";
 star.style.animationDuration=Math.random()*3+2+"s";
 document.body.appendChild(star);
 setTimeout(()=>star.remove(),5000);
},200);

/* mật khẩu */
function checkPass(){
 let pass=document.getElementById("password").value;
 if(pass==="01012024"){  // bạn đổi mật khẩu tại đây
   document.getElementById("lockScreen").style.display="none";
   document.getElementById("book").classList.remove("hidden");
   document.getElementById("music").play();
 }else{
   document.getElementById("error").innerHTML="Sai mật khẩu 😢";
 }
}

/* lật trang */
let pageIndex = 0;
let pages;

window.onload = function(){
    pages = document.querySelectorAll(".page");
}

function nextPage(){
    if(pageIndex < pages.length){
        pages[pageIndex].style.display="none";
        pageIndex++;
    }
}

/* nổ tim */
function heartExplosion(){
 for(let i=0;i<40;i++){
  let h=document.createElement("div");
  h.innerHTML="💖";
  h.className="heart";
  h.style.left=Math.random()*100+"vw";
  h.style.top=Math.random()*100+"vh";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),1000);
 }
}