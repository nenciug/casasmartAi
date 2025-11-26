<script>
async function getRecommendations(query) {
    const response = await fetch('https://casa-smart-ai-backend.onrender.com/recommend', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query})
    });
    const data = await response.json();
    
    displayRecommendations(data.recommendations);
}

function displayRecommendations(recommendations) {
    const container = document.getElementById('recommendationsContainer');
    container.innerHTML = ''; // curăță containerul anterior

    if (!recommendations || recommendations.length === 0) {
        container.innerHTML = '<p>Nu există recomandări pentru această întrebare.</p>';
        return;
    }

    const ul = document.createElement('ul');
    recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}

document.getElementById('askBtn').addEventListener('click', () => {
    const query = document.getElementById('queryInput').value;
    getRecommendations(query);
});
</script>
