const elements = require("./product.elements");
module.exports ={
    clickOnAddToCart: async () => {
        await page.click(elements.addToCartButton);
    }
}