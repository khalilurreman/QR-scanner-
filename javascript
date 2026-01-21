// Initialize QR Code logic
const displayArea = document.getElementById("qrcode-display");
const qrcode = new QRCode(displayArea, {
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

function generateQR() {
    const userInput = document.getElementById("qr-input");
    const downloadBtn = document.getElementById("download-btn");

    if (userInput.value.trim() === "") {
        alert("Please enter some text or a link first!");
        return;
    }

    qrcode.clear(); 
    qrcode.makeCode(userInput.value);
    
    // Show the download button after generating
    downloadBtn.style.display = "block";
}

function downloadQR() {
    const img = displayArea.querySelector("img");
    const canvas = displayArea.querySelector("canvas");

    if (img && img.src) {
        const link = document.createElement("a");
        link.href = img.src;
        link.download = "my-qr-code.png";
        link.click();
    } else if (canvas) {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "my-qr-code.png";
        link.click();
    }
}
