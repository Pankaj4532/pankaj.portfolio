const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");
const typedText = document.querySelector(".typed-text");
const titles = ["Backend Developer", "Web Developer", "Java Developer"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

menuIcon.onclick = () => {
    navLinks.classList.toggle(".active");
}



document.getElementById("contact-form").addEventListener("submit", function (e){
    e.preventDefault();
    emailjs.sendForm("service_helvx6q", "template_15i8pl8", this)
    .then(function() {
        alert("Message sent successfully!");
    }, function(error) {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
    });

    this.reset();
});



function type() {
    const current = titles[titleIndex];
    
    if (isDeleting) {
        charIndex--;
        if(charIndex < 0) charIndex = 0;
    } else {
        charIndex++;
        if(charIndex > current.length) charIndex = current.length;
    }

    typedText.textContent = current.substring(0, charIndex);

    if (!isDeleting && charIndex === current.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

//Download CV functionality

document.getElementById('download-cv').addEventListener('click', function() {
    const link =document.createElement('a');
    link.href = 'assets/Pankaj_Sapkal_Resume.pdf'; // Path to your CV file
    link.download= 'PankajSapkal.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


document.addEventListener("DOMContentLoaded", type);
