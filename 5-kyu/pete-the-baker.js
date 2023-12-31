// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
const cakes = (recipe, available) => {
  const recipeAmount = {}

  for (const key in recipe) {
    if (!available[key] || available[key] < recipe[key]) {
      return 0
    }

    while (recipe[key] <= available[key]) {
      available[key] -= recipe[key]
      recipeAmount[key] = recipeAmount[key] + 1 || 1
    }
  }
  
  return Math.min(...Object.values(recipeAmount))
}