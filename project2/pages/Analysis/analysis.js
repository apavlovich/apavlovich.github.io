//Videogame Analysis

var platforms = ['3DS', 'DS', 'GB', 'GBA', 'GBC', 'PC', 'PS2', 'PS', 'PS3', 'PS4', 'PSN', 'PSP', 'Wii', 'WiiU', 'WinP', 'X360', 'XOne', 'XB', 'XBL', 'N64', 'NES', 'iOS']

d3.csv('https://raw.githubusercontent.com/apavlovich/apavlovich.github.io/main/project2/resources/vgsales-12-4-2019-short.csv',
(err, rows) => {
    var data = platforms.map(y => {
        var d = rows.filter(r => r.Platform === y)

        return {
            type: 'bar',
            name: y,
            x: d.map(r => r.Year),
            y: d.map(r => r.Global_Sales)
        }
    })

    Plotly.newPlot('graph', data)
})