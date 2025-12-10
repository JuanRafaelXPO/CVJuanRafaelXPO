document.addEventListener("DOMContentLoaded", function() {
    const elemento = document.getElementById("texto-semestre");
    
    if (elemento) {
        const inicio = new Date(2025, 1, 1); // Fevereiro de 2025
        const hoje = new Date();
        
        let anos = hoje.getFullYear() - inicio.getFullYear();
        let sem = (anos * 2) + (hoje.getMonth() >= 6 ? 2 : 1); 
        
        if (sem > 4) {
            elemento.innerHTML = "<strong>Status:</strong> Concluído";
        } else {
            // Garante que não mostre 0 ou negativo antes de começar
            const semestreExibido = sem < 1 ? 1 : sem;
            elemento.innerText = "Status: " + semestreExibido + "° Semestre";
        }
    }
});