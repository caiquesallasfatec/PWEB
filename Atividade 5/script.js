document.addEventListener("DOMContentLoaded", function() {
    var slideDiv = document.querySelector('.slide-text');
    setTimeout(function() {
        slideDiv.style.opacity = '1'; // Torna o texto visível
        slideDiv.style.transform = 'translateX(0)'; // Move o texto para o centro
    }, 1000);
});

function fetchTemperature() {
    // URL da API
    var url = "https://api.open-meteo.com/v1/forecast?latitude=-23.5017&longitude=-47.4581&current=temperature_2m&hourly=temperature_2m&forecast_days=1";

    // Faz a requisição
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Obtém a temperatura atual
            var temperature = data.current.temperature_2m;

            // Atualiza o conteúdo do elemento h1 com a temperatura
            document.getElementById("temperature").innerText = "Temperatura Atual: " + temperature + "°C";
        })
        .catch(error => {
            // Em caso de erro na requisição, exibe uma mensagem de erro
            console.error('Ocorreu um erro ao obter a temperatura:', error);
        });
}

fetchTemperature();