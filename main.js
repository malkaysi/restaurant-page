(()=>{"use strict";(()=>{const e=document.querySelector("#content"),t=document.createElement("img"),n=document.createElement("h1"),d=document.createElement("p");t.src="https://lilluna.com/wp-content/uploads/2017/10/penne-pasta-resize-1.jpg",n.textContent="The best restaraunt in town!",d.textContent="Try our deluxe pizza and pasta combination - Weekends only!",t.classList.add("image"),e.appendChild(t),e.appendChild(n),e.appendChild(d)})();const e=[{dom:document.createElement("p"),text:"This is the menu <br> Item number One is delicious <br> The second dish is a salad app <br>The third dish is full of cheese"},{dom:document.createElement("p"),text:"Test test test"},{dom:document.createElement("p"),text:"23 menu item for tab 3"}];let t;document.querySelector("#menu"),document.querySelectorAll("div.button").forEach((n=>{n.addEventListener("click",(()=>{t=parseInt(n.id),(t=>{const n=document.querySelector("#menu");let d=e[t],c=document.createElement("p");c.classList.add("tabSelected"),c.textContent=d.text,n.appendChild(c)})(t)}))}))})();