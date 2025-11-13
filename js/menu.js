    document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const iconOpen = document.querySelector('.icon-abrir');
    const iconClose = document.querySelector('.icon-fechar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        
        const menuAtivo = navbar.classList.contains('active');
        iconOpen.style.display = menuAtivo ? 'none' : 'block';
        iconClose.style.display = menuAtivo ? 'block' : 'none';
    });
});

  
  
  
  document.addEventListener("DOMContentLoaded", () => {

            const carousel = document.getElementById("mainCarousel");
            const slidesContainer = document.querySelector(".Carrosel1");
            const slides = slidesContainer ? Array.from(slidesContainer.querySelectorAll(".slide")) : [];
            const btnProximo = document.querySelector(".proximo");
            const btnAnterior = document.querySelector(".anterior");
            const indicatorsContainer = document.getElementById("carouselIndicators");

            if (!slides.length || !carousel || !indicatorsContainer) {
                console.error("Carrossel não pode ser inicializado. Verifique se as classes .Carrosel, .Carrosel1, .slide e os IDs #mainCarousel, #carouselIndicators existem no HTML.");
                return;
            }

            const totalSlides = slides.length;
            let currentIndex = 0; 

            const spacing = 300; 

            const perspectiveClasses = ['active-center', 'active-right-1', 'active-right-2', 'active-right-3', 'active-left-1', 'active-left-2', 'active-left-3'];


            slides.forEach((_, i) => {
                const bolinha = document.createElement("span");
                bolinha.classList.add("bolinha-item");
                if (i === 0) bolinha.classList.add("ativo");
                bolinha.addEventListener("click", () => moveTo(i));
                indicatorsContainer.appendChild(bolinha);
            });
            
            const indicators = indicatorsContainer.querySelectorAll(".bolinha-item");

            /**
             * @param {number} centerIndex 
             */
            function updateSlidePositions(centerIndex) {
                slides.forEach((slide, i) => {
                    slide.classList.remove(...perspectiveClasses);
                    slide.style.transform = '';

                    let relativeIndex = i - centerIndex;

                    if (relativeIndex > totalSlides / 2) {
                        relativeIndex -= totalSlides;
                    } else if (relativeIndex < -totalSlides / 2) {
                        relativeIndex += totalSlides;
                    }

                    if (relativeIndex === 0) {
                        slide.classList.add('active-center');
                        slide.style.transform = 'translateX(0) scale(1.0)';
                        slide.style.zIndex = 5;
                        slide.style.opacity = 1;
                        return;
                    }
                    
                    if (relativeIndex > 0 && relativeIndex <= 3) {
                        slide.classList.add(`active-right-${relativeIndex}`);
                        slide.style.transform = `translateX(${relativeIndex * spacing}px) scale(${1.0 - relativeIndex * 0.15})`; 
                        slide.style.zIndex = 5 - relativeIndex;
                        slide.style.opacity = 1 - relativeIndex * 0.25;
                        return;
                    }

                    if (relativeIndex < 0 && relativeIndex >= -3) {
                        const absIndex = Math.abs(relativeIndex);
                        slide.classList.add(`active-left-${absIndex}`);
                        slide.style.transform = `translateX(${relativeIndex * spacing}px) scale(${1.0 - absIndex * 0.15})`; 
                        slide.style.zIndex = 5 - absIndex;
                        slide.style.opacity = 1 - absIndex * 0.25;
                        return;
                    }

                    slide.style.transform = 'translateX(0) scale(0.5)';
                    slide.style.zIndex = 0;
                    slide.style.opacity = 0;
                });
                
                indicators.forEach((indicator, i) => {
                    indicator.classList.toggle("ativo", i === centerIndex);
                });
            }

            /**
             * @param {number} newIndex 
             */
            function moveTo(newIndex) {
                currentIndex = (newIndex % totalSlides + totalSlides) % totalSlides;
                updateSlidePositions(currentIndex);
            }

            if (btnProximo) {
                btnProximo.addEventListener("click", () => moveTo(currentIndex + 1));
            }
            if (btnAnterior) {
                btnAnterior.addEventListener("click", () => moveTo(currentIndex - 1));
            }

            slides.forEach(slide => {
                slide.addEventListener('click', (e) => {
                    const index = parseInt(slide.dataset.index, 10);
                    if (index !== currentIndex) {
                        moveTo(index);
                    }
                });
            });


            updateSlidePositions(currentIndex);

             setInterval(() => moveTo(currentIndex + 1), 5000); 
        });

        document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('.navbar li.nav-item a');
    
    // 2. Seleciona todas as seções (usando os mesmos IDs dos links)
    // O map percorre os links e retorna uma lista de elementos de seção correspondentes.
    const sections = Array.from(navLinks).map(link => {
        // Pega o ID da seção (ex: "#eventos")
        const sectionId = link.getAttribute('href');
        // Retorna o elemento da seção correspondente
        return document.querySelector(sectionId);
    }).filter(section => section !== null); // Remove itens nulos, se houver

    // Função para remover a classe 'active' de todos os links
    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    // Função para adicionar a classe 'active' ao link correspondente
    function setActiveLink(sectionId) {
        removeActiveClass();
        const activeLink = document.querySelector(`.navbar li.nav-item a[href="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Lógica de Monitoramento de Rolagem (Scrollspy)
    function onScroll() {
        // Pega a posição do topo da janela de visualização + um pequeno offset (margem)
        const scrollPosition = window.scrollY + 100; 

        // Itera pelas seções
        sections.forEach(section => {
            if (section) {
                // Posição de onde a seção começa
                const sectionTop = section.offsetTop;
                // Posição de onde a seção termina
                const sectionBottom = section.offsetTop + section.offsetHeight;
                
                // Verifica se a posição de rolagem está DENTRO dos limites da seção
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setActiveLink('#' + section.id);
                }
            }
        });
    }

    //  Lógica para Atualizar ao Clicar (Garante o active imediato)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Se você quiser que o active seja imediato ao clique, descomente estas duas linhas:
            // removeActiveClass();
            // link.classList.add('active');
            
            // Depois de clicar, o scroll do navegador muda, e a função onScroll
            // irá cuidar da atualização correta.
            
            // É bom forçar um pequeno delay para garantir que onScroll rode depois do scroll terminar
            setTimeout(onScroll, 300); 
        });
    });

    //  Adiciona o listener de evento de rolagem
    window.addEventListener('scroll', onScroll);

    // Garante que o estado inicial (ao carregar a página) esteja correto
    onScroll(); 
});

        
