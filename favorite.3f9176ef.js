const t=document.querySelector(".js-favorite");var a;const n=null!==(a=JSON.parse(localStorage.getItem("favorite")))&&void 0!==a?a:[],e=n.map((({id:t,img:a,name:n,price:e,description:i})=>`<li class="cart--Iteam" data-id="${t}">\n        <img src="${a}" alt="${n}" width="300px" />\n        <h1 class="item--Name">${n}</h1>\n        <p ><a class="js-info" href="#">More information</a></p>\n        <div>\n        <button class="js-favorite">Add to favorite </button>\n        <button class="js-basket">Add to basket</button>\n        </div>\n      </li>`)).join("");t.innerHTML=e;
//# sourceMappingURL=favorite.3f9176ef.js.map
