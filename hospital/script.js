function sendEmail() {
    const defaultReceiver = 'manomano8321@gmail.com';
    const defaultContent = 'Hey buddy!';

    const userId = document.getElementById('userIdInput').value;
    const sender = userId + '@yourdomain.com';

    const mailtoLink = `mailto:${defaultReceiver}?subject=Default Subject&body=${encodeURIComponent(defaultContent)}&from=${encodeURIComponent(sender)}`;

    // Create a temporary anchor element to open the email client
    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink;

    // Dispatch a click event on the anchor element to open the email client
    const event = new MouseEvent('click');
    tempLink.dispatchEvent(event);
}
function goBack() {
    window.history.back();
}