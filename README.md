# NPM Package
## A simple npm package to get product price after discount

```javascript

module.exports = {
    productPrice(orgPrice, discount, discountType = 'percentage') {
        let getOriginalPrice = parseFloat(orgPrice);
        let getDiscount = parseFloat(discount);
        if (discountType == 'flat') {
            return (getOriginalPrice - getDiscount).toFixed(2);
        }
        return (getOriginalPrice - ((getOriginalPrice * getDiscount) / 100)).toFixed(2);
    }
}

```

## Install

```
npm i arindam-product-price

```

## How to use

```javascript

console.log("Percentage Discount = ", arindamProductPrice.productPrice(554.98, 22));
console.log("Flat Discount = ", arindamProductPrice.productPrice(554.98, 22, 'flat'));

```