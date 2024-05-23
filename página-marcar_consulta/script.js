/* barra de pesquisa */
function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');

    const routineCheck = document.getElementById('routineCheck').checked;
    const bloodTest = document.getElementById('bloodTest').checked;

    // Limpar resultados anteriores
    resultsDiv.innerHTML = '';

    if (input || routineCheck || bloodTest) {
        const filteredResults = items.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(input);
            const matchesFilter = (!routineCheck || item.category === 'routine') && (!bloodTest || item.category === 'blood');
            return matchesSearch && matchesFilter;
        });

        if (filteredResults.length > 0) {
            filteredResults.forEach(result => {
                const p = document.createElement('p');
                p.textContent = result.name;
                resultsDiv.appendChild(p);
            });
        } else {
            resultsDiv.textContent = 'Nenhum resultado encontrado.';
        }
    } else {
        resultsDiv.textContent = 'Por favor, digite algo para pesquisar.';
    }
}

// filtros

function toggleFilters() {
    const filters = document.getElementById('filters');
    const arrow = document.getElementById('arrow');
    if (filters.style.display === 'none' || filters.style.display === '') {
        filters.style.display = 'block';
        arrow.textContent = '▲';
    } else {
        filters.style.display = 'none';
        arrow.textContent = '▼';
    }
}

function toggleFilters() {
    const filters = document.getElementById('filters');
    const arrow = document.getElementById('arrow');
    if (filters.style.display === 'none' || filters.style.display === '') {
        filters.style.display = 'block';
        arrow.textContent = '▲';
    } else {
        filters.style.display = 'none';
        arrow.textContent = '▼';
    }
}

// calendário

document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const monthSelect = document.getElementById('month-select');
    const monthNames = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];

    let currentDate = new Date();

    function renderCalendar() {
        // Limpa o calendário
        calendar.querySelector('tbody').innerHTML = '';

        // Configura o mês e ano atuais
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        // Atualiza o seletor de mês
        monthSelect.value = month;

        // Calcula o primeiro e último dia do mês
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        let date = 1;

        // Cria as linhas do calendário
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');

                if (i === 0 && j < firstDay) {
                    cell.innerHTML = '';
                } else if (date > lastDate) {
                    cell.innerHTML = '';
                } else {
                    cell.innerHTML = date;
                    date++;
                }

                row.appendChild(cell);
            }

            calendar.querySelector('tbody').appendChild(row);
        }
    }

    function populateMonthSelect() {
        monthNames.forEach((month, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = month;
            monthSelect.appendChild(option);
        });
    }

    monthSelect.addEventListener('change', function() {
        currentDate.setMonth(parseInt(this.value));
        renderCalendar();
    });

    populateMonthSelect();
    renderCalendar();
});
