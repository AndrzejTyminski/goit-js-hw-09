!function(){function o(o,n){return console.log(o,n),new Promise((function(e,t){setTimeout((function(){Math.random()>.3?e({position:o,delay:n}):t({position:o,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var e=new FormData(n.target);console.log(e);var t=parseInt(e.get("delay")),c=parseInt(e.get("step")),a=parseInt(e.get("amount"));console.log(t,c,a);for(var i=0;i<a;i++)o(i+1,t+i*c).then((function(o){var n=o.position,e=o.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(e,"ms"))})).catch((function(o){var n=o.position,e=o.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(e,"ms"))}))})),o(),o(2,1500).then((function(o){var n=o.position,e=o.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(e,"ms"))})).catch((function(o){var n=o.position,e=o.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(e,"ms"))}))}();
//# sourceMappingURL=03-promises.06533b4c.js.map
