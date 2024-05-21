function search() {
    const input = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('results');
    
    // Limpar resultados anteriores
    resultsDiv.innerHTML = '';

    if (input) {
        // Simulação de um resultado de pesquisa
        const results = [
            'Resultado 1 para "' + input + '"',
            'Resultado 2 para "' + input + '"',
            'Resultado 3 para "' + input + '"',
        ];

        // Exibir resultados
        results.forEach(result => {
            const p = document.createElement('p');
            p.textContent = result;
            resultsDiv.appendChild(p);
        });
    } else {
        resultsDiv.textContent = 'Por favor, digite algo para pesquisar.';
    }
}