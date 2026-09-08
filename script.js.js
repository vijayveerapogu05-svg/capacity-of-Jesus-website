function openPaymentModal(title, price) {
    document.getElementById('bookTitle').innerText = title;
    document.getElementById('bookPrice').innerText = '₹' + price;
    document.getElementById('paymentModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

function handlePayment(event) {
    event.preventDefault();
    
    const name = document.getElementById('custName').value;
    const email = document.getElementById('custEmail').value;
    const title = document.getElementById('bookTitle').innerText;

    alert(`ధన్యవాదాలు ${name}! \n\n${title} కొనుగోలు చేయడానికి పేమెంట్ గేట్‌వే ఓపెన్ అవుతుంది.\nపేమెంట్ పూర్తయిన తర్వాత PDF లింక్ మీ ఈమెయిల్ (${email}) కి పంపబడుతుంది.`);
    
    // ఇక్కడ Razorpay / Payment Gateway API ఇంటిగ్రేట్ చేయాల్సి ఉంటుంది.
    closeModal();
}