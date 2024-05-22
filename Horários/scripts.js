document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.navb');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.hora');
    let activeInfo = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            activeInfo = button.getAttribute('data-info');
        });
    });

    const confirmButton = document.getElementById('confirm-button');
    confirmButton.addEventListener('click', () => {
        if (activeInfo) {
            localStorage.setItem('activeInfo', activeInfo);
            window.location.href = 'Confirmar Dados.html';
        } else {
            alert('Por favor, selecione um botão antes de confirmar.');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.agendarB');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const url = button.getAttribute('data-url');
            window.location.href = url;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const info = localStorage.getItem('activeInfo');
    const infoField = document.getElementById('info-field');

    if (info) {
        infoField.value = info;
        localStorage.removeItem('activeInfo');
    } else {
        infoField.value = 'Nenhuma informação recebida.';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const iconecor = document.getElementById('iconecor');
    const icone = document.getElementById('icone');

    icone.addEventListener('click', () => {
        iconecor.classList.toggle('clicked');
    });
});