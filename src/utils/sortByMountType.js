export const wallType = data => data.filter(item => item.mountType === "Wall")

export const tableTopType = data => data.filter(item => item.mountType === "Table Top")

export const ceilingType = data => data.filter(item => item.mountType === "Ceiling")

export const floorType = data => data.filter(item => item.mountType === "Floor")