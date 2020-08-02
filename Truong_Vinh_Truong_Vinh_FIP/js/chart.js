var updatingChart = new Chart(document.getElementById('top_brands'), {
    type: 'bar',
    data: {
        labels: ['Pampers', 'Hoegaarden', 'Saigon', 'Sapporo', 'Bud'],
        datasets: [
        {
            label: 'Beer Bottle (mil)',
            data: ['1000', '806', '247', '73', '64'],
            backgroundColor: [ '#005d1f', '#b22234','#ffdf00', '#cd7f32', '#ff0000']
        }
    ]
},
 options: {
    scales: {
        xAxes: [{
            display: false
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },

        title: {
            display: true,
            text: 'Total Bottle Has Been Exported'

        }
    }

});

function updateAllData(chart, data) {
    chart.data.datasets[0].data = data;
    chart.update();
}

function updateConfig(chart, title) {
    chart.options.title.text = title;
    chart.update();
}

setTimeout(function() {
    updateAllData(updatingChart, ['33', '29', '14', '11', '5'])
    updateConfig(updatingChart, 'Income per Month (Million Dollar)');
}, 10000)