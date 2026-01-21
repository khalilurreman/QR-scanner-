// Function to handle successful scan
function onScanSuccess(decodedText, decodedResult) {
    // Show the result in the HTML
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<strong>Result:</strong> <a href="${decodedText}" target="_blank">${decodedText}</a>`;
    
    // Show copy button
    document.getElementById('copy-btn').style.display = "inline-block";

    // Optional: Stop scanning after one success
    // html5QrcodeScanner.clear();
}

// Function to handle scan failure (optional)
function onScanFailure(error) {
    // We don't want to show errors constantly, so we leave this empty
}

// Initialize the scanner
let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", 
    { 
        fps: 10,           // Frames per second
        qrbox: { width: 250, height: 250 }, // Scanning box size
        aspectRatio: 1.0   // Square view
    }
);

// Render the scanner in the 'reader' div
html5QrcodeScanner.render(onScanSuccess, onScanFailure);

// Function to copy the result to clipboard
function copyResult() {
    const resultText = document.getElementById('result').innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
