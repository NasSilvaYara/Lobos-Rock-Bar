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

    const menuData = {

                "Drinks": [
                    { nome: "Alexander", ingredientes: "Licor de cacau, Leite condensado, conhaque, canela e gelo", preco: "18.00", imagem: "img/bebidas/drinksalexander.png" },
                    { nome: "Ice kiss", ingredientes: "Vodka de frutas vermelhas, Leite condensado, morango e gelo", preco: "18.00", imagem: "img/bebidas/drinkicekiss.png" },
                    { nome: "Cuba libre", ingredientes: "Rum, Coca-Cola, Fatia de limão e gelo", preco: "18.00", imagem: "img/bebidas/drinkcubalibre.png" },
                    { nome: "Negroni", ingredientes: "Vermoth rosso, campari, gin, laranja e limão e gelo.", preco: "20.00", imagem: "img/bebidas/drinknegroni.png" },
                    { nome: "Fronzen", ingredientes: "Skol Beats, Leite condensado, limão e gelo.", preco: "20.00", imagem: "img/bebidas/drinkfronzen.png" },
                    { nome: "Jager bomger", ingredientes: "Jagermaster com Redbull ou Heineken.", preco: "32.00", imagem: "img/bebidas/drinkjagerbomger.png" },
                    { nome: "Mojito", ingredientes: "Rum branco, soda ou água c/gás, hotela, limão e gelo.", preco: "30.00", imagem: "img/bebidas/drinkmojito.png" },
                    { nome: "Gin tônica", ingredientes: "Gin, Água Tônica (Limão, Morango ou maracujá)", preco: "20.00", imagem: "img/bebidas/drinkgintonica.png" },
                    { nome: "Hi-fi", ingredientes: "Smirnoff, Fanta Laranja, gelo e rodela de laranja.", preco: "18.00", imagem: "img/bebidas/drinkhi-fi.png" },
                    { nome: "Melancia baby", ingredientes: "Beba seu drink direto na melancia...", preco: "18.00", imagem: "img/bebidas/drinkmelancia baby.png" },
                    { nome: "Canelinha pró", ingredientes: "Canelinha, Leite condensado, limão, canela em pau e gelo.", preco: "15.00", imagem: "img/bebidas/drinkcanelinhapro.png" },
                    { nome: "Gin melancia", ingredientes: "Gin de melancia, gelo de melancia e energético melancia.", tag: "POPULAR", preco: "20.00", imagem: "img/bebidas/drinkginmelancia.png" },
                    { nome: "Chevette", preco: "18.00", imagem: "img/bebidas/drinkchavette.png" },
                    { nome: "Vodka red fruits", ingredientes: "Vodka de frutas vermelhas, energético e gelo.", preco: "15.00", imagem: "img/bebidas/drinkvodkaredfruits.png" }
                ],

                "Caipirinhas": [
                    { nome: "Caipirinha limão", ingredientes: "c/ cachaça ou saque: R$ 18.00 c/Vodka: R$ 20.00", imagem: "img/bebidas/CaipirinhaLimao.png" },
                    { nome: "Caipirinha maracujá", ingredientes: "c/cachaça ou saque: R$ 20.00 c/Vodka: R$ 22.00", imagem: "img/bebidas/CaipirinhaMaracuja.png" },
                    { nome: "Caipirinha morango", ingredientes: "c/ cachaça ou saque: R$ 20.00 c/Vodka: R$ 22.00", imagem: "img/bebidas/CaipirinhaMorango.png" }
                ],

                "Doses": [
                    { nome: "Dreher com limão e mel", preco: "8.00", imagem: "Img/bebidas/dosedreher.png" },
                    { nome: "Kariri com mel e limão", preco: "8.00", imagem: "img/bebidas/dosekariri.png" },
                    { nome: "Velho barreiro mel e limão", preco: "8.00", imagem: "img/bebidas/dosevelhobarreiro.png" },
                    { nome: "Maria mole", preco: "8.00", imagem: "img/bebidas/dosemariamole.png" },
                    { nome: "Sangue de morcego", preco: "8.00", imagem: "img/bebidas/dosesanguedemorcego.png" },
                    { nome: "Bombeirinho", preco: "8.00", imagem: "img/bebidas/dosebombeirinho.png" },
                    { nome: "Canelinha", preco: "7.00", imagem: "img/bebidas/dosecanelinha.png" },
                    { nome: "Vodka smirnoff", preco: "10.00", imagem: "img/bebidas/dosevodkasmirnoff.png" },
                    { nome: "Contini", preco: "8.00", imagem: "img/bebidas/dosecontini.png" },
                    { nome: "Run montila", preco: "8.00", imagem: "img/bebidas/doserunmontila.png" }
                ],

                "Shots": [
                    { nome: "Asas minas", preco: "8.00", imagem: "img/bebidas/shotassasminas.png" },
                    { nome: "Jagermeister", preco: "15.00", imagem: "img/bebidas/shotjagermeister.png" },
                    { nome: "Curaçau blue", preco: "10.00", imagem: "img/bebidas/shotcuraçaublue.png" },
                    { nome: "Seleta", preco: "8.00", imagem: "img/bebidas/shotseleta.png" },
                    { nome: "Tequila José cuervo", preco: "15.00", imagem: "img/bebidas/shottequila.png" },
                    { nome: "Gin", preco: "8.00", imagem: "img/bebidas/shotgin.png" },
                    { nome: "Absinto", preco: "10.00", imagem: "img/bebidas/shotabisinto.png" },
                    { nome: "Velho barreiro café", preco: "8.00", imagem: "img/bebidas/shotvelhobarreiro.png" }
                ],

                "Whisky": [
                    { nome: "Jack daniel's black", preco: "30.00", imagem: "img/bebidas/whiskyjackblack.png" },
                    { nome: "Jack daniel's fire", preco: "30.00", imagem: "img/bebidas/whiskyjackfire.png" },
                    { nome: "Red label", preco: "20.00", imagem: "img/bebidas/whiskyredlabel.png" },
                    { nome: "Black label", preco: "35.00", imagem: "img/bebidas/whiskyblacklabel.png" },
                    { nome: "White horse", preco: "15.00", imagem: "img/bebidas/whiskywhitehorse.png" }
                ],

                "Vinhos": [
                    { nome: "Garrafa pergola", preco: "40.00", imagem: "img/bebidas/vinhopergola.png" },
                    { nome: "Garrafa cabernet sauvignon", preco: "40.00", imagem: "img/bebidas/vinhocarbenet.png" },
                    { nome: "Garrafa chalise", preco: "35.00", imagem: "img/bebidas/vinhochalise.png" }
                ],

                "Bebidas não alcoólicas": [
                    { nome: "Coca lata", preco: "7.00", imagem: "img/bebidas/BNAcocalata.png" },
                    { nome: "Guaraná lata", preco: "7.00", imagem: "img/bebidas/BNAguarana.png" },
                    { nome: "Água s/c gás", preco: "6.00", imagem: "img/bebidas/BNAaguacgas.png" },
                    { nome: "Red bull", preco: "15.00", imagem: "img/bebidas/BNAredbull.png" },
                    { nome: "Soda italiana", preco: "10.00", imagem: "img/bebidas/BNAsodaitaliana.png" },
                    { nome: "Suco de polpa", preco: "9.00", imagem: "img/bebidas/BNAsucodepolpa.png" },
                    { nome: "Suco de limão natural", preco: "9.00", imagem: "img/bebidas/BNAsucodelimao.png" }
                ],

                "Cervejas": [
                    { nome: "Skol 300ml", preco: "7.00", imagem: "img/bebidas/cervejaskol.png" },
                    { nome: "Heineken long neck", preco: "12.00", imagem: "img/bebidas/cervejaheineken.png" },
                    { nome: "Budwiser long neck", preco: "12.00", imagem: "img/bebidas/cervejabundwiser.png" },
                    { nome: "Stella long neck", preco: "12.00", imagem: "img/bebidas/cervejastella.png" },
                    { nome: "Brahma p malte 350ml", preco: "7.00", imagem: "img/bebidas/cervejabrahma.png" },
                    { nome: "Corona long neck", preco: "7.00", imagem: "img/bebidas/cervejacorona.png" },
                    { nome: "Skol beats long neck", preco: "14.00", imagem: "img/bebidas/cervejaskolbeats.png" },
                    { nome: "Smirnoff ice long neck", preco: "15.00", imagem: "img/bebidas/cervejasmirnoff.png" },
                    { nome: "51 ice long neck", preco: "12.00", imagem: "img/bebidas/cerveja51.png" },
                    { nome: "Draft", preco: "20.00", imagem: "img/bebidas/cervejadraft.png" },
                    { nome: "Xeque-mate", preco: "7.00", imagem: "img/bebidas/cervejaxeque.png" }
                ]
    }

        let categoriaatual = "Drinks";
        let indiceatual = 0;
        let bebidasatuais = menuData[categoriaatual];

        function atualizarbebidas(indice) {
            const totalbebidas = bebidasatuais.length;
            const indice2 = (totalbebidas > 1) ? (indice + 1) % totalbebidas : 0;
            const bebida1 = bebidasatuais[indice];
            const bebida2 = (totalbebidas > 1) ? bebidasatuais[indice2] : null;


            document.getElementById('bebidalnome').textContent = bebida1 ? bebida1.nome : "N/A";
 
            document.getElementById('bebidalingredientes').textContent = bebida1 ? (bebida1.ingredientes && bebida1.ingredientes.length > 200 ? bebida1.ingredientes.slice(0, 200) + '...' : bebida1.ingredientes || "---") : "Sem dados.";
            document.getElementById('bebidaltag').textContent = bebida1 ? bebida1.tag || "---" : "---";


            const preco1Div = document.getElementById('bebidalpreco');
            preco1Div.innerHTML = bebida1 ? `<span class="moeda">R$</span> ${bebida1.preco}` : `<span class="moeda">R$</span> 0.00`;

            const copo1 = document.getElementById('bebidalcopo');
            copo1.innerHTML = ''; 

            if (bebida1 && bebida1.imagem) {
                const img = document.createElement('img');
                img.src = bebida1.imagem;
                img.alt = bebida1.nome;
                copo1.appendChild(img);
            }

            const nome2 = document.getElementById('bebida2nome');
            const ingredientes2 = document.getElementById('bebida2ingredientes');
            const tag2 = document.getElementById('bebida2tag');
            const preco2Div = document.getElementById('bebida2preco');
            const copo2 = document.getElementById('bebida2copo');

            copo2.innerHTML = '';
            if (bebida2) {
                nome2.textContent = bebida2.nome;
                ingredientes2.textContent = bebida2.ingredientes ? (bebida2.ingredientes.length > 50 ? bebida2.ingredientes.slice(0, 50) + '...' : bebida2.ingredientes || "---") : "---";
                tag2.textContent = bebida2.tag || "---";
                preco2Div.innerHTML = `<span class="moeda">R$</span> ${bebida2.preco}`;
                
                if (bebida2.imagem) {
                    const img = document.createElement('img');
                    img.src = bebida2.imagem;
                    img.alt = bebida2.nome;
                    copo2.appendChild(img);
                }
            } else {
 
                nome2.textContent = "ESPAÇO";
                ingredientes2.textContent = "Categoria com apenas 1 item. Navegue de volta para a primeira bebida.";
                tag2.textContent = "---";
                preco2Div.innerHTML = `<span class="moeda">R$</span> VAZIO`;
            }
        }

        function proximabebida() {
            if (bebidasatuais.length < 2) {

                indiceatual = (indiceatual + 1) % bebidasatuais.length;
            } else {
                let proximoindice = indiceatual + 2;
                if (proximoindice >= bebidasatuais.length) {
                    proximoindice = 0;
                }
                indiceatual = proximoindice;
            }
            atualizarbebidas(indiceatual);
        }

        function bebidaanterior() {
            if (bebidasatuais.length < 2) {

                indiceatual = (indiceatual - 1 + bebidasatuais.length) % bebidasatuais.length;
            } else {
                let indiceanterior = indiceatual - 2;
                if (indiceanterior < 0) {

                    if (bebidasatuais.length % 2 !== 0) {
                        indiceanterior = bebidasatuais.length - 1;
                    } else {

                        indiceanterior = bebidasatuais.length - 2;
                    }
                }
                indiceatual = indiceanterior;
            }
            atualizarbebidas(indiceatual);
        }
        


        function mudarcategoria(novacategoria) {
            if (categoriaatual === novacategoria) return;

            categoriaatual = novacategoria;
            bebidasatuais = menuData[categoriaatual];
            indiceatual = 0;

            atualizarbebidas(indiceatual);
            document.querySelectorAll('.botaocategoria').forEach(botao => {
                botao.classList.remove('ativo');
                if (botao.dataset.categoria === novacategoria) {
                    botao.classList.add('ativo');
                }
            });
        }

        function criarmenu() {
            const listacategorias = document.getElementById('lista-categorias'); 
            
            if (!listacategorias) {
                console.error("Elemento 'lista-categorias' não encontrado no HTML.");
                return;
            }
            
            listacategorias.innerHTML = '';

            Object.keys(menuData).forEach(nomecategoria => {
                const botao = document.createElement('button');
                botao.textContent = nomecategoria;
                botao.classList.add('botaocategoria');
                botao.dataset.categoria = nomecategoria;
                botao.onclick = () => mudarcategoria(nomecategoria);
                listacategorias.appendChild(botao);
            });

            const botaoinicial = document.querySelector(`.botaocategoria[data-categoria="${categoriaatual}"]`);
            if (botaoinicial) {
                botaoinicial.classList.add('ativo');
            }
        }

        window.onload = function() {
            criarmenu(); 
            document.getElementById('setaesquerda').onclick = bebidaanterior;
            document.getElementById('setadireita').onclick = proximabebida;
            atualizarbebidas(indiceatual);
        };

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

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
    const iconOpen = document.querySelector('.icon-abrir');
    const iconClose = document.querySelector('.icon-fechar');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            iconOpen.style.display = 'block';
            iconClose.style.display = 'none';
        });
    });
});


