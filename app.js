

window.onload = function() {
    // Existing code...
    document.getElementById('heart-rate').innerText = '72 bpm';
    document.getElementById('blood-pressure').innerText = '120/80 mmHg';
    document.getElementById('oxygen-level').innerText = '98%';
    document.getElementById('body-temperature').innerText = '98.6°F';
    document.getElementById('cholesterol-level').innerText = '200 mg/dL';
    document.getElementById('glucose-level').innerText = '100 mg/dL';

    var ecgData = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            label: 'ECG',
            data: [12, 19, 3, 5, 2, 3, 7, 8, 4, 6],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    var ecgConfig = {
        type: 'line',
        data: ecgData,
    };

    var oxygenData = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            label: 'Oxygen Saturation',
            data: [98, 97, 98, 99, 98, 97, 98, 99, 98, 97],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    var oxygenConfig = {
        type: 'line',
        data: oxygenData,
    };

    var ecgGraph = new Chart(
        document.getElementById('ecg-graph'),
        ecgConfig
    );

    var oxygenGraph = new Chart(
        document.getElementById('oxygen-graph'),
        oxygenConfig
    );
}
