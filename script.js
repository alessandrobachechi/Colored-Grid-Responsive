
document.addEventListener('DOMContentLoaded', function() {
    const colonne = document.querySelectorAll('.colonna');

    colonne.forEach(colonna => {
        let righe = 5;
        let colonneCelle = 5;

        if (colonna.id === 'colonna2') {
            righe = 2;
            colonneCelle = 2;
        }

        if (colonna.id === 'colonna1') {
            righe = 1;
            colonneCelle = 5;
        }

        for (let i = 0; i < righe; i++) {
            for (let i = 0; i < colonneCelle; i++) {
                const cella = document.createElement('div');
                cella.classList.add('cella');
                cella.style.backgroundColor = getRandomColor();
                colonna.appendChild(cella);
            }
        }
    });

}); 
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


