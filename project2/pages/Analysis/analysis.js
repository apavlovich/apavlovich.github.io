//Videogame Analysis

d3.csv('resources/vgsales-12-4-2019-short.csv', function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) {
            return row[key];
        });
    }

    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'Sales by Publisher',
        x: unpack(rows, 'Year'),
        y: unpack(rows, 'Publisher.Global_Sales'),
        line: {color: '#17BECF'}
    }

    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Sales by Platform',
        x: unpack(rows, 'Year'),
        y: unpack(rows, 'Platform.Global_Sales'),
        line: {color: '#7F7F7F'}
    }

    var data = [trace1, trace2];

    var layout = {
        title: 'Time Series with Rangeslider',
        xaxis: {
            autorange: true,
            range: ['1970', '2020'],
            rangeselector: {buttons: [
                {
                    count: 1,
                    label: '1y',
                    step: 'year',
                    stepmode: 'backward'
                },
                {
                    count: 6,
                    label: '6y',
                    step: 'year',
                    stepmode: 'backward'
                },
                {step: 'all'}
            ]},
            rangeslider: {range: ['1970', '2020']},
            type: 'year'
        },
        yaxis: {
            autorange: true,
            range: ['0', '25'],
            type: 'linear'
        }
    };

    Plotly.newPlot('timeseries', data, layout);
})