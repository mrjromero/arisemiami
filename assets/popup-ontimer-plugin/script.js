
(()=>{document.addEventListener("DOMContentLoaded",()=>{document.querySelector("html").classList.contains("is-builder")||document.querySelectorAll(".mbr-popup[data-on-timer-delay]").forEach((b)=>{var c=b.getAttribute("data-on-timer-delay"),a;"undefined"!==typeof bootstrap?("undefined"!==typeof bootstrap.Modal.getInstance&&(a=bootstrap.Modal.getInstance(b)),a||(a=new bootstrap.Modal(b),{keyboard:!1}),setTimeout(()=>{a.show()},1E3*c)):"undefined"!==typeof jQuery&&setTimeout(()=>{$(b).modal({keyboard:!1})},
1E3*c);setTimeout(()=>{a.show()},1E3*c)})})})();
