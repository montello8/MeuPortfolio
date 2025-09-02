

// Seleciona a seção sobre
const sobreSection = document.querySelector('.sobre');

// Cria o observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('sobre-visible');
        }
    });
}, { threshold: 0.3 }); // 30% da seção visível

observer.observe(sobreSection);


// Seção serviços
const servicosSection = document.querySelector('.servicos');

// Observer para serviços
const observerServicos = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('servicos-visible');
        }
    });
}, { threshold: 0.3 });

observerServicos.observe(servicosSection);
// Seção portfólio
const portfolioSection = document.querySelector('.portfolio');

// Observer para portfólio
const observerPortfolio = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('portfolio-visible');
        }
    });
}, { threshold: 0.3 });

observerPortfolio.observe(portfolioSection);
