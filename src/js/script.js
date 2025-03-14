function copyCode() {
    const code = document.querySelector(".move__code__txt").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Код скопирован!");
    });
}

document.addEventListener("DOMContentLoaded", function () {
    let highlightedCode = document.getElementById("highlightedCode");

    // Код, который ты хочешь подсветить
    let codeContent = `
function offset(el) {
const rect = el.getBoundingClientRect(), 
scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function offset(el) {
const rect = el.getBoundingClientRect(), 
scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function offset(el) {
const rect = el.getBoundingClientRect(), 
scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
    `;

    // Устанавливаем текст в <code>
    highlightedCode.textContent = codeContent;

    // Подсвечиваем код с помощью Prism.js
    Prism.highlightElement(highlightedCode);
});