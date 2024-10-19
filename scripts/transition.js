document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in');

    const menuLinks = document.querySelectorAll('nav a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 
            const targetId = this.getAttribute('href').substring(1); 
            const targetElement = document.getElementById(targetId); 

            if (targetElement) {
                document.body.classList.add('fade');

                
                setTimeout(() => {
                    
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    document.body.classList.remove('fade');
                    document.body.classList.add('fade-in');
                }, 0); 
            }
        });
    });
});
