const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const buttonId = button.id;
    const block = document.getElementById(buttonId.replace('button-', ''));
    const ocult = document.getElementById(buttonId.replace('button-', 'ocult-'));
    const lista = document.querySelectorAll(`#${buttonId.replace('button-', 'lista-')} li`);

    if (block) {
      const isExpanded = button.dataset.expanded === 'true';
      ocult.style.display =isExpanded ? "none" : "block";
      block.style.height = isExpanded ? "350px" : "420px";
      block.style.backgroundColor = isExpanded ? "#ffffff" : "#3B6978";
      button.textContent = isExpanded ? "Mais Informações" : "Menos Informações";
      button.style.color = isExpanded ? "#3b6978" : "#ffffff";
      button.style.marginTop = isExpanded ? "31%" : " 35%"

      lista.forEach(lista => {
        lista.style.color = isExpanded ? "#204051" : "#ffffff";
      });

      button.dataset.expanded = isExpanded ? 'false' : 'true';
    } else {
      console.error("Error: Block or list element not found.");
    }
  });
});


  

  