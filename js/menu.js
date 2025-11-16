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

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const fechar = document.querySelector(".fechar");

    document.querySelectorAll(".galeria img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    fechar.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // fechar clicando fora da imagem
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

