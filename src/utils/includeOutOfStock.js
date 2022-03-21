export const includeOutOfStock = data => [...data.filter(item => !item.inStock)]
