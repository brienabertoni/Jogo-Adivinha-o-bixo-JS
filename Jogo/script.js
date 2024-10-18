// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as divs dentro do elemento com a classe 'container'
    const sections = document.querySelectorAll('.container > div');
    // Seleciona o botão de início pelo seu ID 'startButton'
    const startButton = document.getElementById('startButton');

    // Adiciona um evento de clique ao botão de início
    startButton.addEventListener('click', function() {
        // Chama a função showSection para exibir a seção com o ID 'classSelection'
        showSection('classSelection');
    });

    // Seleciona todos os botões com a classe 'optionButton'
    document.querySelectorAll('.optionButton').forEach(button => {
        // Adiciona um evento de clique a cada botão
        button.addEventListener('click', function() {
            // Obtém o valor do atributo 'data-next' do botão clicado
            const nextSectionId = this.getAttribute('data-next');
            // Chama a função showSection para exibir a próxima seção com o ID especificado
            showSection(nextSectionId);
        });
    });

    // Seleciona todos os botões com a classe 'backButton'
    document.querySelectorAll('.backButton').forEach(button => {
        // Adiciona um evento de clique a cada botão
        button.addEventListener('click', function() {
            // Obtém o valor do atributo 'data-prev' do botão clicado
            const prevSectionId = this.getAttribute('data-prev');
            // Chama a função showSection para exibir a seção anterior com o ID especificado
            showSection(prevSectionId);
        });
    });

    // Função para exibir a seção com o ID especificado e ocultar todas as outras
    function showSection(id) {
        // Percorre todas as seções
        sections.forEach(section => {
            // Se o ID da seção corresponder ao ID especificado, exibe a seção
            if (section.id === id) {
                section.style.display = 'block';
            } else {
                // Caso contrário, oculta a seção
                section.style.display = 'none';
            }
        });
    }
});
