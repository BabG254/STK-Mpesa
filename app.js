document.getElementById('paymentForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;

    // Call your backend to trigger STK Push
    try {
        const response = await fetch('https://your-backend-url.com/stkpush', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber: phone,
                amount: amount
            })
        });
        const data = await response.json();
        if (data.success) {
            document.getElementById('response').textContent = 'Payment request sent!';
        } else {
            document.getElementById('response').textContent = 'Payment failed: ' + data.message;
        }
    } catch (error) {
        document.getElementById('response').textContent = 'Error: ' + error.message;
    }
});
