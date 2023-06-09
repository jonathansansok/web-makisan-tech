window.addEventListener("load", function () {
    const words = [
        "Innovadores",
        "Creativos",
        "Responsables",
        "Comprometidos",
        "Flexibles",
        "Apasionados",
        "Confiables"
    ];

    const options = {
        strings: words,
        typeSpeed: 90, 
        backSpeed: 90, 
        loop: true,
        showCursor: false,
        smartBackspace: true,
        startDelay: 500,
        onComplete: function (self) {
            const cursor = document.querySelector(".typed-cursor");
            cursor.style.opacity = 1;
        },
        preStringTyped: function () {
            const cursor = document.querySelector(".typed-cursor");
            cursor.style.opacity = 1;
        }
    };

    const typed = new Typed(".words-wrapper", options);
    const wrapperElement = document.querySelector(".words-wrapper");
    const wordsElement = wrapperElement.querySelector(".typed-strings");
    gsap.set(wordsElement.children, { opacity: 0 });
    gsap.fromTo(
        wordsElement.children,
        { x: "-100%" },
        { duration: 0.5, x: "0%", opacity: 1, stagger: 0.2, ease: "power2.out" }
    );
});

