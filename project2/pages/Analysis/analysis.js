//Videogame Analysis

var genres = ['Action', 'Action-Adventure', 'Adventure', 'Board Game', 'Education', 'Fighting', 'Misc', 'MMO', 'Music', 'Party', 'Platform', 'Puzzle', 'Racing', 'Role-Playing', 'Sandbox', 'Shooter', 'Simulation', 'Sports', 'Strategy', 'Visual Novel']

d3.csv('https://raw.githubusercontent.com/apavlovich/apavlovich.github.io/main/project2/resources/vgsales-12-4-2019-short.csv',
(err, rows) => {
    var data = genres.map(y => {
        var d = rows.filter(r => r.Genre === y)

        return {
            type: 'bar',
            name: y,
            x: d.map(r => r.Year),
            y: d.map(r => r.Global_Sales)
        }
    })

    Plotly.newPlot('graph', data)
})
