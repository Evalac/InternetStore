{localStorage.setItem("TEST_KEY","Hello world"),localStorage.setItem("Array",JSON.stringify([1,2,3,4,5])),localStorage.setItem("Object",JSON.stringify({name:"mango"})),console.log(localStorage.getItem("TEST_KEY")),console.log(JSON.parse(localStorage.getItem("Array"))),console.log(JSON.parse(localStorage.getItem("Object")));const e=document.querySelector(".js-local"),o=document.querySelector(".js-session");e.addEventListener("click",(()=>{localStorage.setItem("local","Storage")})),o.addEventListener("click",(()=>{sessionStorage.setItem("session","Storage")}))}
//# sourceMappingURL=05-internetStore.42397386.js.map
