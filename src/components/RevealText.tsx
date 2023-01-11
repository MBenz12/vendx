import gsap, { Power3 } from "gsap";

let splitWords = function (selector: any) {
    var elements = document.querySelectorAll(selector);

    elements.forEach(function (el) {
        el.dataset.splitText = el.textContent;
        el.innerHTML = el.textContent
            .split(/\s/)
            .map(function (word: string) {
                return word
                    .split("-")
                    .map(function (word: string) {
                        return '<span class="word">' + word + "</span>";
                    })
                    .join('<span class="hyphen">-</span>');
            })
            .join('<span class="whitespace"> </span>');
    });
};

let splitLines = function (selector: string) {
    var elements = document.querySelectorAll(selector);

    splitWords(selector);

    elements.forEach(function (el) {
        var lines = getLines(el);

        var wrappedLines = "";
        lines.forEach(function (wordsArr) {
            wrappedLines += '<span class="line"><span class="words">';
            wordsArr.forEach(function (word) {
                wrappedLines += word.outerHTML;
            });
            wrappedLines += "</span></span>";
        });
        el.innerHTML = wrappedLines;
    });
};

let getLines = function (el: { querySelectorAll: (arg0: string) => any; }) {
    var lines = [];
    var line: any[];
    var words = el.querySelectorAll("span");
    var lastTop;
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.offsetTop !== lastTop) {
            // Don't start with whitespace
            if (!word.classList.contains("whitespace")) {
                lastTop = word.offsetTop;

                line = [];
                lines.push(line);
            }
        }
        // @ts-ignore
        line.push(word);
    }
    return lines;
};

const load = () => {
    splitLines(".reveal-text");
    let revealText = document.querySelectorAll(".reveal-text");
    revealText.forEach((element) => {
        const lines = element.querySelectorAll(".words");

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                toggleActions: "restart none none reset"
            }
        });
        tl.set(element, { autoAlpha: 1 });
        tl.from(lines, 1, {
            yPercent: 100,
            // @ts-ignore
            ease: Power3.out,
            stagger: 0.3,
            delay: 0.1
        });
    });
}

export default load;