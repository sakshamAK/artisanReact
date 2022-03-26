export const star5 = data => data.filter(item => item.starRatings <= 5)

export const star4 = data => data.filter(item => item.starRatings <= 4)

export const star3 = data => data.filter(item => item.starRatings <= 3)

export const starbelow3 = data => data.filter(item => item.starRatings < 3)