export const highToLow = data => data.sort((a,b) => b.price - a.price)

export const lowToHigh = data => data.sort((a,b) => a.price - b.price)