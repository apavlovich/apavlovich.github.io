//Videogame Analysis

var years = ['2600', '5200', '7800', '3DO', '3DS', 'Aco', 'ACPC', 'AJ', 'Amig', 'And', 'ApII', 'Arc', 'AST', 'BBCM', 'BRW', 'C128', 'C64', 'CD32', 'CDi', 'DC', 'DS', 'DSi', 'DSiW', 'FMT', 'GB', 'GBA', 'GBC', 'GC', 'GEN', 'GG', 'GIZ', 'Int', 'iOS', 'iQue', 'Linux', 'Lynx', 'Mob', 'MS', 'MSD', 'MSX', 'N64', 'NES', 'NG', 'NGage', 'NS', 'OSX', 'Ouya']

Plotly.d3.csv('https://raw.githubusercontent.com/apavlovich/apavlovich.github.io/main/project2/resources/vgsales-12-4-2019-short.csv',
(err, rows) => {
    var data = Platform.map(y => {
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