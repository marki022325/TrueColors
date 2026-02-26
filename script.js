document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    const conSection = document.querySelector('.Contributers-section');
    const conBtn = document.getElementById('contributionBtn');
    const conText = document.getElementById('Contributers');

    if (conBtn && conText) {
        conBtn.addEventListener('click', function() {
            conText.innerHTML = `
              Researched by: Irish Abao, Jaimie Signar, 
                <a href="626978030_838213352558617_7841712337375433622_n.jpg" 
                   target="_blank" 
                   class="nathan-link">
                   Nathaniel Eleazar
                </a>, 
                Ruel Cabayao, and Thyrence Clores.
            `;
            conSection.classList.add('is-clicked');
            this.style.background = "rgba(172, 182, 229, 0.2)";
            this.style.borderColor = "#acb6e5";
        });
    }

    const creatorBtn = document.getElementById('creatorBtn');
    const creatorText = document.getElementById('creatorText');

    if (creatorBtn && creatorText) {
        creatorBtn.addEventListener('click', function() {
            creatorText.textContent = "Developer: Mark Rafael M. Alcala";
            this.parentElement.classList.add('is-revealed');
            this.style.background = "rgba(155, 246, 255, 0.2)";
            this.style.borderColor = "#9bf6ff";
        });
    }
});


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; 

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

window.addEventListener("load", reveal);

//set up pfp
document.getElementById('avatar-clickable').addEventListener('click', function() {
    document.getElementById('avatar-input').click();
});

document.getElementById('avatar-input').addEventListener('change', function() {
    const file = this.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('avatar-preview');
            const icon = document.getElementById('plus-icon');
            preview.src = e.target.result;
            preview.style.display = 'block';
            icon.style.display = 'none';
        }

        reader.readAsDataURL(file);
    }
});



const avatarBox = document.getElementById('avatar-clickable');
const hiddenInput = document.getElementById('avatar-input');
const previewImg = document.getElementById('avatar-preview');
const icon = document.getElementById('plus-icon');

avatarBox.addEventListener('click', function() {
    console.log("Circle clicked!"); 
    hiddenInput.click();
});

hiddenInput.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader(); 

        reader.onload = function(e) {
            previewImg.src = e.target.result; 
            previewImg.style.display = 'block'; 
            icon.style.display = 'none'; 
        }

        reader.readAsDataURL(file); 
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Target the Post Button safely
    const postBtn = document.getElementById('postBtn');

    // The ?. prevents an error if the user is logged out (and postBtn is null)
    postBtn?.addEventListener('click', () => {
        const content = document.getElementById('experienceInput').value;
        
        if (content.trim() === "") {
            alert("Please type something before posting!");
        } else {
            alert("Post submitted! (Database connection coming next)");
        }
    });

    // 2. Heart/Like Animation (Works for guest viewing too)
    const mainFeed = document.getElementById('mainFeed');
    
    mainFeed?.addEventListener('click', (e) => {
        const heartBtn = e.target.closest('.heart-btn');
        if (!heartBtn) return;

        // Toggle logic
        const icon = heartBtn.querySelector('i');
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
        heartBtn.classList.toggle('liked');
        
        // Premium Pop Animation
        heartBtn.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.3)' },
            { transform: 'scale(1)' }
        ], { duration: 200 });
    });
});