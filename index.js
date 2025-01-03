const phoneNumber = "123456789"

// Get all the links and the tip element
const linksElemets = document.querySelectorAll('.link-tip');
const tip = document.getElementById('tip');

const translations = {
    tiktok: 'TikTok',
    x: 'X',
    instagram: 'Instagram',
    email: "Me Envie um Email",
    phoneNumber: "Copie Meu Número de Telefone"
};

console.log(linksElemets);

linksElemets.forEach(linkElement => {

    linkElement.addEventListener('mousemove', function(e) {
        tip.innerText = translations[linkElement.dataset.name];

        // get mouse position on e and assign to variables
        const x = e.pageX;
        const y = e.pageY;

        tip.style.top = y - 30 + 'px';
        tip.style.left = x + 20 + 'px';
    });

    linkElement.addEventListener('click', () => {
        tip.innerText = translations[linkElement.dataset.name];
    })

    linkElement.addEventListener('mouseover', function(e) {
        tip.style.opacity = 1;
    });

    linkElement.addEventListener('mouseleave', function() {
        tip.style.opacity = 0;
    });

});

// Hide header on scroll down
let lastScrollTop = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = '-200px'; // Adjust this value based on the header height
    } else {
        header.style.top = '0px';
    }

    lastScrollTop = scrollTop;
});


// copy phone number to clipboard
async function writeClipboardText(text) {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
    } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (error) {
            console.error(error.message);
        }
        document.body.removeChild(textArea);
    }
}

document.getElementById('button-link').addEventListener( 'click', () => {
        writeClipboardText(phoneNumber);
        translations["phoneNumber"] = "Número Copiado!";
    }
);
