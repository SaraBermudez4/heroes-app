const paneles = document.querySelectorAll('.panel')

paneles.forEach(panel => {
    panel.addEventListener('click', () => {
        if (panel.classList.contains("active")) {
            panel.classList.remove('active')
        } else {
            removeActiveClass()
            panel.classList.add('active')
        }
    })
});

function removeActiveClass() {
    paneles.forEach(panel => {
        panel.classList.remove('active')
    })
}
let div = document.getElementById('divTable')

let heroes = [
    {
        id: 1,
        superHero: 'Spider Man',
        team: 'Avengers',
        publisher: 'Marvel Comics',
    },
    {
        id: 2,
        superHero: 'Iron man',
        team: 'Avengers',
        publisher: 'Marvel Comics',
    },
    {
        id: 3,
        superHero: 'Thor',
        team: 'Avengers',
        publisher: 'Marvel Comics',
    },
    {
        id: 4,
        superHero: 'Wolverin',
        team: 'X-men',
        publisher: 'Marvel Comics',
    },
    {
        id: 5,
        superHero: 'Silver',
        team: '4 fantasticos',
        publisher: 'Marvel Comics',
    },
    {
        id: 6,
        superHero: 'Hulk',
        team: 'Avengers',
        publisher: 'Marvel Comics',
    },
    {
        id: 7,
        superHero: 'Ojo de halcón',
        team: 'Avengers',
        publisher: 'Marvel Comics',
    },
    {
        id: 8,
        superHero: 'Daredevil',
        team: '4 fantasticos',
        publisher: 'Marvel Comics',
    },
    {
        id: 9,
        superHero: 'Ciclope',
        team: 'X-men',
        publisher: 'Marvel Comics',
    },
    {
        id: 10,
        superHero: 'Capitan America',
        team: 'Avengers',
        publisher: 'Marvel Comics',
    }
]

function pintarTable(heroes) {
    let myTable = `<table id="table-card">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>SuperHero</th>
                                <th>Team</th>
                                <th>Publisher</th>
                            </tr>
                        </thead>
                        <tbody>`;
    heroes.forEach(heroe => {
        myTable += `<tr>
                        <td>${heroe.id}</td>
                        <td>${heroe.superHero}</td>
                        <td>${heroe.team}</td>
                        <td>${heroe.publisher}</td>
                    </tr>
        `
    });
    myTable += `</tbody>
                </table>`
    div.innerHTML = myTable;
}

pintarTable(heroes)