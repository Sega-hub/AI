function copyCode() {
    const code = document.querySelector(".move__code__txt").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Код скопирован!");
    });
}

document.addEventListener("DOMContentLoaded", function () {

    const lines = document.querySelectorAll(".line"); 
    
    if (lines.length > 0) {
        window.addEventListener("scroll", animOnScroll);
        function animOnScroll() {
            for (let i = 0; i < lines.length; i++) {
                const animLine = lines[i];
                const animLineHeight = animLine.offsetHeight;
                const animLineOffset = offset(animLine).top;
                const animStart = 0.7;
    
                let lineAnimPoint = window.innerHeight - animLineHeight / animStart;
    
                if (animLineHeight > window.innerHeight) {
                    lineAnimPoint = window.innerHeight - window.innerHeight / animStart;
                }
    
                if ((pageYOffset > animLineOffset - lineAnimPoint) && pageYOffset < (animLineOffset + animLineHeight)) {               
                    animLine.classList.add("play");
                }
            };
        }
    } 

    const texts = document.querySelectorAll("#text");
    
    if (texts.length > 0) {
        window.addEventListener("scroll", textAppearance);
        function textAppearance() {
            for (let i = 0; i < texts.length; i++) {
                const textAnim = texts[i];
                const textHeight = textAnim.offsetHeight;
                const textAnimOffset = offset(textAnim).top;
                const textStart = 1.8;
    
                let textStartPoint = window.innerHeight - textHeight / textStart;
    
                if (textHeight > window.innerHeight) {
                    textStartPoint = window.innerHeight - window.innerHeight / textStart;
                }
    
                if ((pageYOffset > textAnimOffset - textStartPoint) && pageYOffset < (textAnimOffset + textHeight)) {               
                    textAnim.classList.add("appearance");
                }
            };
        }
    } 

    const highlightedCode = document.getElementById("highlightedCode");
    const languageButtons = document.querySelectorAll(".move__languages div, .move__languages button");
    
    const codeSnippets = {
        python: `import requests
url = "https://api.example.com/data"
response = requests.get(url)
print(response.json())`,
        javascript: `fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data));`,
        curl: `curl -X GET "https://api.example.com/data" -H "Accept: application/json"`
    };

    highlightedCode.textContent = codeSnippets.python;
    Prism.highlightElement(highlightedCode);

    function updateActiveButton(activeButton) {
        languageButtons.forEach(button => {
            button.style.borderBottom = "none";
        });
        activeButton.style.borderBottom = "2px solid rgba(23, 58, 215, 1)";
    }
    
    updateActiveButton(document.querySelector(".move__languages__python"));

    languageButtons.forEach(button => {
        button.addEventListener("click", function () {
            let language = "";
            if (button.classList.contains("move__languages__python")) {
                language = "python";
            } else if (button.classList.contains("move__languages__js")) {
                language = "javascript";
            } else if (button.classList.contains("move__languages__language")) {
                language = "curl";
            }

            if (language) {
                highlightedCode.textContent = codeSnippets[language];
                Prism.highlightElement(highlightedCode);
                updateActiveButton(button);
            }
        });
    });

    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const SCROLL_THRESHOLD = 50;
    
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > SCROLL_THRESHOLD) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    
     
        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
    
        lastScrollTop = Math.max(0, scrollTop);
    };
    
    window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));

    function offset(el) {
        const rect = el.getBoundingClientRect(), 
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    } 
    
});


const button1 = document.querySelector(".trend__buttons__models");
const button2 = document.querySelector(".trend__buttons__data");
const button3 = document.querySelector(".trend__buttons__app");

const box1 = document.querySelector(".trend__box__models");
const box2 = document.querySelector(".trend__box__data");
const box3 = document.querySelector(".trend__box__app");

// Назначаем обработчики кликов
button1.addEventListener("click", () => {
    box1.style.display = "flex";
    box2.style.display = "none";
    box3.style.display = "none";
    button1.style.boxShadow = "0px 0px 26.39px 0px #110E68";
    button2.style.boxShadow = "none";
    button3.style.boxShadow = "none";
});
button2.addEventListener("click", () => {
    box1.style.display = "none";
    box2.style.display = "flex";
    box3.style.display = "none";
    button1.style.boxShadow = "none";
    button2.style.boxShadow = "0px 0px 26.39px 0px #110E68";
    button3.style.boxShadow = "none";
});
button3.addEventListener("click", () => {
    box1.style.display = "none";
    box2.style.display = "none";
    box3.style.display = "flex";
    button1.style.boxShadow = "none";
    button2.style.boxShadow = "none";
    button3.style.boxShadow = "0px 0px 26.39px 0px #110E68";
});
