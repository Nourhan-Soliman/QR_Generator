
const userName = document.querySelector('.user_name');
const userEmail = document.querySelector('.user_email');
const userPhone = document.querySelector('.user_phone');
const generateButton = document.querySelector('.generate-qr-code-button');
const qrImage = document.querySelector('.qr-image');

generateButton.onclick = () => {
    const userNameValue = userName.value.trim();
    const userEmailValue = userEmail.value.trim();
    const userPhoneValue = userPhone.value.trim();

    if (!userNameValue || !userEmailValue || !userPhoneValue) {
        alert('Please enter valid credentials!');
        return;
    }

    const allValues = `${userNameValue} ${userEmailValue} ${userPhoneValue}`;
    // const imageSource = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(allValues)}`;

let imageSource = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${allValues}`;
    qrImage.src = imageSource;
};

