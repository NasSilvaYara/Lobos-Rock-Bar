# Lobos-Rock-Bar

# 🎸 Rock Bar "Rel" - Projeto Interdisciplinar Fatec Itaquera

[![Status: Online](https://img.shields.io/badge/Status-Online-brightgreen)]([COLOCAR O LINK DO SEU SITE DO GITHUB PAGES AQUI])
[![Tecnologias](https://img.shields.io/badge/Tecnologias-HTML%20%7C%20CSS%20%7C%20JS-blue)](https://fatecitaquera.edu.br/)
[![Curso](https://img.shields.io/badge/Curso-DM%20Fatec%20Itaquera-orange)](https://fatecitaquera.edu.br/)

---

## 🚀 Visualização do Projeto (Site Funcionando)

O site do Bar de Rock "Rel" está hospedado e pode ser acessado no link abaixo:

[**ACESSAR O SITE COMPLETO AQUI**]([COLOCAR O LINK DO SEU SITE DO GITHUB PAGES AQUI])

---

## 💡 Introdução e Conceito (PI Fatec DM)

**[COLOCAR UMA DESCRIÇÃO COMPLETA AQUI - Descreva o tema do projeto interdisciplinar, qual o objetivo do site (vender ingressos, divulgar eventos, cardápio) e o porquê da temática rock 'n' roll. Mínimo 3 parágrafos.]**

*Exemplo de Tópicos para a Descrição:*
* **Público-Alvo:** Fãs de rock, moradores da Zona Leste, estudantes da Fatec.
* **Objetivo:** Centralizar informações de eventos, cardápio e galeria de fotos do bar.
* **Contexto PI:** Aplicação prática dos conceitos de [Mencione as disciplinas aplicadas: P.O.O, Design, etc.].

---

## 🖼️ Galeria de Imagens e Slides

Aqui você pode ver o visual final e a estrutura de design do site.

### 1. Home Page Principal

**[COLOCAR A DESCRIÇÃO: Explique o que a imagem mostra (layout, cores, logo, menu). Ex: "O layout principal foi desenvolvido com foco na usabilidade mobile-first e utiliza cores escuras para refletir o ambiente rock." ]**

![Screenshot da Página Inicial do Bar](./img/home-screenshot.png)

### 2. Destaque dos Slides de Imagens

**[COLOCAR A DESCRIÇÃO: Explique como o seu slider funciona (ex: mostra eventos da semana) e justifique a tecnologia usada (ex: "Foi usado JavaScript puro para otimizar o carregamento e evitar dependências de bibliotecas externas.")]**

*Para colocar a imagem, você deve ter a pasta `img` no seu repositório com o arquivo `home-screenshot.png` (ou similar).*

---

## 💻 Código em Destaque e Formulário

O código a seguir é fundamental para a funcionalidade de [Colocar a funcionalidade principal: Ex: o *slider* de eventos, a validação de um formulário de contato, ou a exibição do cardápio dinâmico].

### Trecho de Código (Exemplo de Validação de Formulário)

**[COLOCAR A DESCRIÇÃO: Explique o que este trecho de código faz. Ex: "Este trecho de JavaScript garante que todos os campos do nosso 'Formulário de Inscrição VIP' sejam preenchidos corretamente antes de enviar os dados."]**

```javascript
// Exemplo: Coloque um código do seu arquivo .js aqui (Máximo 10 linhas)
document.getElementById('form-vip').addEventListener('submit', function(event) {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    if (nome === "" || email === "") {
        event.preventDefault(); // Impede o envio
        alert("Por favor, preencha todos os campos do formulário VIP.");
    }
});
