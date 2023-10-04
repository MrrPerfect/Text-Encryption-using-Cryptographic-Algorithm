function encrypt() {
    // Get input from the user
    var message = document.getElementById('text').value;
    var secretKey = document.getElementById('key').value;

    // Encrypt the message
    var encryptedMessage = CryptoJS.AES.encrypt(message, secretKey);

    // Display the encrypted message
    document.getElementById('encryptedText').innerText = 'Encrypted text: ' + encryptedMessage;
}

function decrypt() {
    // Get input from the user
    var encryptedMessage = document.getElementById('encryptedText').innerText.replace('Encrypted text: ', '');
    var secretKey = document.getElementById('key').value;

    // Decrypt the message
    var decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
    var decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);

    // Display the decrypted message
    document.getElementById('decryptedText').innerText = 'Decrypted text: ' + decryptedMessage;
}
