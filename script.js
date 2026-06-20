/**
 * ==============================================
 * PIPELINE DE ANONIMIZAÇÃO DE RETINA - SCRIPT
 * Autora: Kassandra Maria de Sousa Rabêlo
 * IFPI - Campus Floriano, 2026
 * ==============================================
 */

(function() {
    'use strict';

    // ==========================================
    // 1. NAVEGAÇÃO POR ABAS
    // ==========================================
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    function activateTab(tabId) {
        // Desativar todas as abas
        contents.forEach(c => c.classList.remove('active-tab'));
        tabs.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
        });

        // Ativar a aba selecionada
        const targetContent = document.getElementById(tabId);
        if (targetContent) {
            targetContent.classList.add('active-tab');
        }

        const targetButton = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        if (targetButton) {
            targetButton.classList.add('active');
            targetButton.setAttribute('aria-selected', 'true');
        }
    }

    tabs.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const tabId = this.getAttribute('data-tab');
            if (tabId) {
                activateTab(tabId);
            }
        });
    });

    // ==========================================
    // 2. FAQ - EXPANSÃO/COLAPSO
    // ==========================================
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(btn => {
        btn.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Fechar outros FAQs (opcional - melhora usabilidade)
            faqQuestions.forEach(otherBtn => {
                if (otherBtn !== this) {
                    otherBtn.setAttribute('aria-expanded', 'false');
                    const otherAnswer = otherBtn.nextElementSibling;
                    if (otherAnswer) {
                        otherAnswer.classList.remove('active');
                        otherAnswer.style.maxHeight = '0';
                    }
                }
            });

            // Alternar o clicado
            this.setAttribute('aria-expanded', !isExpanded);
            if (answer) {
                answer.classList.toggle('active');
                if (answer.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = '0';
                }
            }
        });
    });

    // ==========================================
    // 3. LINKS DINÂMICOS 
    // ==========================================
    const colabLink = document.getElementById('colabLink');
    const githubLink = document.getElementById('githubLink');


    const LINKS = {
        colab: 'https://colab.research.google.com/drive/18ON8p39b-rbWDcYEHKAtP92Lvq5Z5ALy?usp=sharing',
        github: 'https://github.com/KassandraMRabelo/pipeline-anonimizacao-retina'
    };

    if (colabLink) {
        colabLink.href = LINKS.colab;
        colabLink.target = '_blank';
        colabLink.rel = 'noopener noreferrer';
    }

    if (githubLink) {
        githubLink.href = LINKS.github;
        githubLink.target = '_blank';
        githubLink.rel = 'noopener noreferrer';
    }

    // ==========================================
    // 4. ABRIR ABA VIA URL 
    // ==========================================
    // Permite que links para a página abram uma aba específica
    // Ex: pagina.html#tab2

    function checkUrlHash() {
        const hash = window.location.hash;
        if (hash) {
            const tabId = hash.replace('#', '');
            const validTabs = ['tab1', 'tab2', 'tab3', 'tab4', 'tab5'];
            if (validTabs.includes(tabId)) {
                activateTab(tabId);
            }
        }
    }

    window.addEventListener('hashchange', checkUrlHash);
    checkUrlHash();

    // ==========================================
    // 5. LOG DE INICIALIZAÇÃO (para debug)
    // ==========================================
    console.log('✅ Pipeline de Anonimização de Retina - Guia carregado com sucesso!');
    console.log('📌 Autora: Kassandra Maria de Sousa Rabêlo');
    console.log('📌 IFPI - Campus Floriano, 2026');

})();