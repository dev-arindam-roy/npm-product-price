
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