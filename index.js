document.addEventListener('DOMContentLoaded', function() {
    const currentLang = document.getElementById('currentLang');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');

  
    currentLang.addEventListener('click', () => {
        langDropdown.classList.toggle('show');
    });

    
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            currentLang.textContent = lang.toUpperCase() + ' ▼';
            langDropdown.classList.remove('show');
            
           
        });
    });


    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            langDropdown.classList.remove('show');
        }
    });
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

  
    function changeLanguage(lang) {
        console.log(`Смена языка на: ${lang}`);
        
    }
});
