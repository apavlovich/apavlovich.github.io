//Videogame Analysis

//read in data
var years = ['1970', '1973', '1975', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']

Plotly.d3.csv('../../resources/vgsales-12-4-2019-short.csv'),
(err, rows) => {
    var data = years.map(y => {
        var d = rows.filter(r => r.Year === y)

        return {
            type: 'bar',
            name: y,
            x: d.map(r => r.Platform),
            y: d.map(r => r.Global_Sales)
        }
    })

    Plotly.newPlot('graph', data)
}