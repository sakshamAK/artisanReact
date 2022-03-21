export const highToLow = state => state.sort((a,b) => b.price - a.price)

export const lowToHigh = state => state.sort((a,b) => a.price - b.price)