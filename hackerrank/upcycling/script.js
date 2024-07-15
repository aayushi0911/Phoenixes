
document.getElementById('getSuggestions').addEventListener('click', function() {
    const clothType = document.getElementById('clothType').value;
    const material = document.getElementById('material').value;
    const color = document.getElementById('color').value;
    const upload = document.getElementById('upload').files[0];
    
    if (!upload) {
        alert('Please upload a picture of the cloth.');
        return;
    }

    
    const suggestionsLink = `https://ai-fashion-suggestions.com/?clothType=${clothType}&material=${material}&color=${color}`;

    document.getElementById('suggestions').innerHTML = `
        <p>AI suggestions for your cloth:</p>
        <a href="${suggestionsLink}" target="_blank">Click here to see suggestions</a>
    `;
});
