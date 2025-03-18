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

//     const highlightedCode = document.getElementById("highlightedCode");
//     const languageButtons = document.querySelectorAll(".move__languages div, .move__languages button");
    
//     const codeSnippets = {
//         python: `import requests
// url = "https://api.example.com/data"
// response = requests.get(url)
// print(response.json())`,
//         javascript: `fetch("https://api.example.com/data")
//   .then(response => response.json())
//   .then(data => console.log(data));`,
//         curl: `curl -X GET "https://api.example.com/data" -H "Accept: application/json"`
//     };

//     highlightedCode.textContent = codeSnippets.python;
//     Prism.highlightElement(highlightedCode);

//     function updateActiveButton(activeButton) {
//         languageButtons.forEach(button => {
//             button.style.borderBottom = "none";
//         });
//         activeButton.style.borderBottom = "2px solid rgba(23, 58, 215, 1)";
//     }
    
//     updateActiveButton(document.querySelector(".move__languages__python"));

//     languageButtons.forEach(button => {
//         button.addEventListener("click", function () {
//             let language = "";
//             if (button.classList.contains("move__languages__python")) {
//                 language = "python";
//             } else if (button.classList.contains("move__languages__js")) {
//                 language = "javascript";
//             } else if (button.classList.contains("move__languages__language")) {
//                 language = "curl";
//             }

//             if (language) {
//                 highlightedCode.textContent = codeSnippets[language];
//                 Prism.highlightElement(highlightedCode);
//                 updateActiveButton(button);
//             }
//         });
//     });

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

    //mouse wheel scroll
    const slider = document.querySelector(".API__slider");

    function onWheel(e) {
        e = e || window.event;
        let delta = e.deltaY || e.detail || e.wheelDelta;

        slider.scrollLeft += delta * 2; // Регулируем скорость прокрутки (можно менять)

        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }

    if (slider.addEventListener) {
        if ("onwheel" in document) {
            slider.addEventListener("wheel", onWheel);
        } else if ("onmousewheel" in document) {
            slider.addEventListener("mousewheel", onWheel);
        } else {
            slider.addEventListener("MozMousePixelScroll", onWheel);
        }
    } else {
        slider.attachEvent("onmousewheel", onWheel); // Для старых IE
    }

    //slider choice

    
    const buttons = document.querySelectorAll(".API__buttons__button");
    const sliders = document.querySelectorAll(".API__slider__item");
    const languages = document.querySelectorAll(".move__languages button");
    const codeText = document.getElementById("highlightedCode");
    const sliderContainer = document.querySelector(".API__slider"); // Родительский контейнер слайдов

    let selectedLanguage = "Python"; // Язык по умолчанию
    let selectedIndex = 0; // Индекс выбранного API


    // Функция обновления кода
    function updateCode() {
        const apiNames = ["DeepSeek-R1", "Qwen2.5-72B-Instruct", "Qwen2.5-VL-72B-Instruct", "Kolors", "Whisper-large-v3-turbo", "Fish Speech 1.5"];
        const codeSnippets = {
            "Python": [
                "# Код для DeepSeek-R1\nprint(\"DeepSeek-R1 activated\")",
                "# Код для Qwen2.5-72B-Instruct\nprint(\"Qwen2.5-72B-Instruct activated\")",
                "# Код для Qwen2.5-VL-72B-Instruct\nprint(\"Qwen2.5-VL-72B-Instruct activated\")",
                "# Код для Kolors\nprint(\"Kolors activated\")",
                "# Код для Whisper-large-v3-turbo\nprint(\"Whisper-large-v3-turbo activated\")",
                "# Код для Fish Speech 1.5\nprint(\"Fish Speech 1.5 activated\")"
            ],
            "JavaScript": [
                "// Код для DeepSeek-R1\nconsole.log(\"DeepSeek-R1 activated\");",
                "// Код для Qwen2.5-72B-Instruct\nconsole.log(\"Qwen2.5-72B-Instruct activated\");",
                "// Код для Qwen2.5-VL-72B-Instruct\nconsole.log(\"Qwen2.5-VL-72B-Instruct activated\");",
                "// Код для Kolors\nconsole.log(\"Kolors activated\");",
                "// Код для Whisper-large-v3-turbo\nconsole.log(\"Whisper-large-v3-turbo activated\");",
                "// Код для Fish Speech 1.5\nconsole.log(\"Fish Speech 1.5 activated\");"
            ],
            "cURL": [
                "# Код для DeepSeek-R1\ncurl -X GET 'https://api.deepseek.com'",
                "# Код для Qwen2.5-72B-Instruct\ncurl -X GET 'https://api.qwen.com'",
                "# Код для Qwen2.5-VL-72B-Instruct\ncurl -X GET 'https://api.qwen-vl.com'",
                "# Код для Kolors\ncurl -X GET 'https://api.kolors.com'",
                "# Код для Whisper-large-v3-turbo\ncurl -X GET 'https://api.whisper.com'",
                "# Код для Fish Speech 1.5\ncurl -X GET 'https://api.fishspeech.com'"
            ]
        };
        codeText.textContent = codeSnippets[selectedLanguage][selectedIndex];
        Prism.highlightElement(codeText);
    }

    // Функция выбора API и прокрутки слайдера
    function selectAPI(index) {
        buttons.forEach(btn => btn.classList.remove("selected"));
        sliders.forEach(slider => slider.classList.remove("selected"));

        buttons[index].classList.add("selected");
        sliders[index].classList.add("selected");
        selectedIndex = index;
        updateCode();
        
        // Прокрутка слайдера до выбранного элемента
        sliders[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }

    // Обработчик выбора API через кнопки
    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            selectAPI(index);
        });
    });

    // Обработчик выбора API через слайдеры
    sliders.forEach((slider, index) => {
        slider.addEventListener("click", function () {
            selectAPI(index);
        });
    });

    // Обработчик смены языка
    languages.forEach(language => {
        language.addEventListener("click", function () {
            languages.forEach(lang => lang.classList.remove("selected"));
            this.classList.add("selected");
            selectedLanguage = this.querySelector("p").textContent;
            updateCode();
        });
    });

    // Функция копирования кода
    window.copyCode = function () {
        navigator.clipboard.writeText(codeText.textContent).then(() => {
            alert("Код скопирован!");
        });
    };

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
