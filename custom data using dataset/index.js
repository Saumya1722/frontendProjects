const cartButtons= document.querySelectorAll('.add-to-cart');
const feedback= document.querySelector('#click-message');

cartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const clickedButton = event.target;

        const productId = clickedButton.dataset.productId;

        const price= clickedButton.dataset.productPrice;

        let message = `
        Added Item!
        ID: ${productId},
        Price: $${price}
        to your cart.`;

        feedback.textContent =  message;

        clickedButton.dataset.status='added';
        clickedButton.textContent='ADDED!';


    });
});