let credits = 35500;
let pricePerDroid = 3000;
let totalPrice = 0;
let message = 0;

let addToCart = prompt('Enter the number of droids?');
if (addToCart===null) {
    alert('customer declined');
} else if ((addToCart*pricePerDroid)>credits) {
    alert('insufficient funds!');
} else if ((addToCart*pricePerDroid)<credits) {
    message = credits - (addToCart*pricePerDroid);
    alert (`You bought ${addToCart} droids, your balance ${message} credids.`);
}
<script type="module"></script>
