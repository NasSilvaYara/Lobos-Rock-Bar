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

    const menuData = {
            "Drinks": [
                {
                    nome: "ALEXANDER",
                    ingredientes: "Licor de cacau, Leite condensado, conhaque, canela e gelo",
                    preco: "18.00",
                    imagem: "img/bebidas/drinksalexander.png",
                },
                {
                    nome: "ICE KISS",
                    ingredientes: "Vodka de frutas vermelhas, Leite condensado, morango e gelo",
                    preco: "18.00",
                    imagem: "img/bebidas/drinkicekiss.png",
                },
                {
                    nome: "CUBA LIBRE",
                    ingredientes: "Rum, Coca-Cola, Fatia de limão e gelo",
                    preco: "18.00",
                    imagem: "img/bebidas/drinkcubalibre.png",
                },
                {
                    nome: "NEGRONI",
                    ingredientes: "Vermoth rosso, campari, gin, laranja e limão e gelo.",
                    preco: "20.00",
                    imagem: "img/bebidas/drinknegroni.png",
                },
                {
                    nome: "FRONZEN",
                    ingredientes: "Skol Beats, Leite condensado, limão e gelo.",
                    preco: "20.00",
                    imagem: "img/bebidas/drinkfronzen.png",
                },
                {
                    nome: "JAGER BOMGER",
                    ingredientes: "Jagermaster com Redbull ou Heineken.",
                    preco: "32.00",
                    imagem: "img/bebidas/drinkjagerbomger.png",
                },
                {
                    nome: "MOJITO",
                    ingredientes: "Rum branco, soda ou água c/gás, hotela, limão e gelo.",
                    preco: "30.00",
                    imagem: "img/bebidas/drinkmojito.png",
                },
                {
                    nome: "GIN TÔNICA",
                    ingredientes: "Gin, Água Tônica (Limão, Morango ou maracujá)",
                    preco: "20.00",
                    imagem: "img/bebidas/drinkgintonica.png",
                },
                {
                    nome: "HI-FI",
                    ingredientes: "Smirnoff, Fanta Laranja, gelo e rodela de laranja.",
                    preco: "18.00",
                    imagem: "img/bebidas/drinkhi-fi.png",
                },
                {
                    nome: "MELANCIA BABY",
                    ingredientes: "Beba seu drink direto na melancia com smirnoff, saque ou cachaça e ainda degusta a propria fruta (Acompanha colher).",
                    preco: "18.00",
                    imagem: "img/bebidas/drinkmelancia baby.png",
                },
                {
                    nome: "CANELINHA PRÓ",
                    ingredientes: "Canelinha, Leite condensado, limão, canela em pau e gelo.",
                    preco: "15.00",
                    imagem: "img/bebidas/drinkcanelinhapro.png",
                },
                {
                    nome: "GIN MELANCIA",
                    ingredientes: "Gin de melancia, gelo de melancia e energético melancia.",
                    tag: "POPULAR",
                    preco: "20.00",
                    imagem: "img/bebidas/drinkginmelancia.png",
                },
                {
                    nome: "CHEVETTE",
                    preco: "18.00",
                    imagem: "img/bebidas/drinkchavette.png",
                },
                {
                    nome: "VODKA RED FRUITS",
                    ingredientes: "Vodka de frutas vermelhas, energético e gelo.",
                    preco: "15.00",
                    imagem: "img/bebidas/drinkvodkaredfruits.png",
                },
            ],
            "Caipirinhas": [
                {
                    nome: "CAIPIRINHA LIMÃO",
                    preco: "c/ cachaça ou saque: 18.00 c/Vodka: 20.00",
                    imagem: "img/bebidas/CaipirinhaLimao.png",
                },
                {
                    nome: "CAIPIRINHA MARACUJA",
                    preco: "c/cachaça ou saque: 20.00 c/Vodka: 22.00",
                    imagem: "img/bebidas/CaipirinhaMaracuja.png",
                },
                {
                    nome: "CAIPIRINHA MORANGO",
                    preco: "c/ cachaça ou saque: 20.00 c/Vodka: 22.00",
                    imagem: "img/bebidas/CaipirinhaMorango.png",
                }
            ],
            "Doses": [
                {
                    nome: "DREHER COM LIMÃO E MEL",
                    preco: "8.00",
                    imagem: "Img/bebidas/dosedreher.png",
                },
                {
                    nome: "KARIRI COM MEL E LIMÃO",
                    preco: "8.00",
                    imagem: "img/bebidas/dosekariri.png",
                },
                {
                    nome: "MARIA MOLE",
                    preco: "8.00",
                    imagem: "img/bebidas/dosemariamole.png",
                },
                {
                    nome: "SANGUE DE MORCEGO",
                    preco: "8.00",
                    imagem: "img/bebidas/dosesanguedemorcego.png",
                },
                {
                    nome: "BOMBEIRINHO",
                    preco: "8.00",
                    imagem: "img/bebidas/dosebombeirinho.png",
                },
                {
                    nome: "CANELINHA",
                    preco: "7.00",
                    imagem: "img/bebidas/dosecanelinha.png",
                },
                {
                    nome: "VODKA SMIRNOFF",
                    preco: "10.00",
                    imagem: "img/bebidas/dosevodkasmirnoff.png",
                },
                {
                    nome: "CONTINI",
                    preco: "8.00",
                    imagem: "img/bebidas/dosecontini.png",
                },
                {
                    nome: "RUN MONTILA",
                    preco: "8.00",
                    imagem: "img/bebidas/doserunmontila.png",
                },
            ],
            "Shots": [
                {
                    nome: "ASAS MINAS",
                    preco: "8.00",
                    imagem: "img/bebidas/shotassasminas.png",
                },
                {
                    nome: "JAGERMEISTER",
                    preco: "15.00",
                    imagem: "img/bebidas/shotjagermeister.png",
                },
                {
                    nome: "CURAÇAU BLUE",
                    preco: "10.00",
                    imagem: "img/bebidas/shotcuraçaublue.png",
                },
                {
                    nome: "SELETA",
                    preco: "8.00",
                    imagem: "img/bebidas/shotseleta.png",
                },
                {
                    nome: "TEQUILA JOSÉ CUERVO",
                    preco: "15.00",
                    imagem: "img/bebidas/shottequila.png",
                },
                {
                    nome: "GIN",
                    preco: "8.00",
                    imagem: "img/bebidas/shotgin.png",
                },
                {
                    nome: "ABSINTO",
                    preco: "10.00",
                    imagem: "img/bebidas/shotabisinto.png",
                },
                {
                    nome: "VELHO BARREIRO CAFÉ",
                    preco: "8.00",
                    imagem: "img/bebidas/shotvelhobarreiro.png",
                },
            ],
            "Whisky": [
                {
                    nome: "JACK DANIEL'S BLACK",
                    preco: "30.00",
                    imagem: "img/bebidas/whiskyjackblack.png",
                },
                {
                    nome: "JACK DANIEL'S FIRE",
                    preco: "30.00",
                    imagem: "img/bebidas/whiskyjackfire.png",
                },
                {
                    nome: "RED LABEL",
                    preco: "20.00",
                    imagem: "img/bebidas/whiskyredlabel.png",
                },
                {
                    nome: "BLACK LABEL",
                    preco: "35.00",
                    imagem: "img/bebidas/whiskyblacklabel.png",
                },
                {
                    nome: "WHITE HORSE",
                    preco: "15.00",
                    imagem: "img/bebidas/whiskywhitehorse.png",
                },
            ],
            "Vinhos": [
                {
                    nome: "GARRAFA PERGOLA",
                    preco: "40.00",
                    imagem: "img/bebidas/vinhopergola.png",
                },
                {
                    nome: "GARRAFA CABERNET SAUVIGNON",
                    preco: "40.00",
                    imagem: "img/bebidas/vinhocarbenet.png",
                },
            ],
            "Bebidas não alcoólicas": [
                {
                    nome: "COCA LATA",
                    preco: "7.00",
                    imagem: "img/bebidas/BNAcocalata.png",
                },
                {
                    nome: "GUARANÁ LATA",
                    preco: "7.00",
                    imagem: "img/bebidas/BNAguarana.png",
                },
                {
                    nome: "ÁGUA S/C GÁS",
                    preco: "6.00",
                    imagem: "img/bebidas/BNAaguacgas.png",
                },
                {
                    nome: "SODA ITALIANA",
                    preco: "10.00",
                    imagem: "img/bebidas/BNAsodaitaliana.png",
                },
                {
                    nome: "SUCO DE POLPA",
                    preco: "9.00",
                    imagem: "img/bebidas/BNAsucodepolpa.png",
                },
                {
                    nome: "RED BULL",
                    preco: "15.00",
                    imagem: "img/bebidas/BNAredbull.png",
                },
                {
                    nome: "SUCO DE LIMÃO NATURAL",
                    preco: "9.00",
                    imagem: "img/bebidas/BNAsucodelimao.png",
                },
            ],
            "Cervejas": [
                {
                    nome: "SKOL 300ML",
                    preco: "7.00",
                    imagem: "img/bebidas/cervejaskol.png",
                },
                {
                    nome: "BUDWISER LONG NECK",
                    preco: "12.00",
                    imagem: "img/bebidas/cervejabundwiser.png",
                },
                {
                    nome: "STELLA LONG NECK",
                    preco: "12.00",
                    imagem: "img/bebidas/cervejastella.png",
                },
                {
                    nome: "BRAHMA P MALTE 350ML",
                    preco: "7.00",
                    imagem: "img/bebidas/cervejabrahma.png",
                },
                {
                    nome: "SKOL BEATS LONG NECK",
                    preco: "14.00",
                    imagem: "img/bebidas/cervejaskolbeats.png",
                },
                {
                    nome: "SMIRNOFF ICE LONG NECK",
                    preco: "15.00",
                    imagem: "img/bebidas/cervejasmirnoff.png",
                },
                {
                    nome: "51 ICE LONG NECK",
                    preco: "12.00",
                    imagem: "img/bebidas/cerveja51.png",
                },
                {
                    nome: "DRAFT",
                    preco: "20.00",
                    imagem: "img/bebidas/cervejadraft.png",
                },
                {
                    nome: "XEQUE-MATE",
                    preco: "7.00",
                    imagem: "img/bebidas/cervejaxeque.png",
                },
            ]
        };

        let categoriaatual = "Drinks";
        let indiceatual = 0;
        let bebidasatuais = menuData[categoriaatual];

        function atualizarbebidas(indice) {
            const totalbebidas = bebidasatuais.length;
            const indice2 = (totalbebidas > 1) ? (indice + 1) % totalbebidas : 0;
            const bebida1 = bebidasatuais[indice];
            const bebida2 = (totalbebidas > 1) ? bebidasatuais[indice2] : null;


            document.getElementById('bebidalnome').textContent = bebida1 ? bebida1.nome : "N/A";
 
            document.getElementById('bebidalingredientes').textContent = bebida1 ? (bebida1.ingredientes && bebida1.ingredientes.length > 50 ? bebida1.ingredientes.slice(0, 50) + '...' : bebida1.ingredientes || "---") : "Sem dados.";
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
