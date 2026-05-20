export function parseProductPrice(price) {
  return Number(String(price).replace(/\./g, "").replace(",", "."))
}

export function matchesPriceRange(product, min, max) {
  const value = parseProductPrice(product.price)

  if (min !== "" && !Number.isNaN(Number(min)) && value < Number(min)) {
    return false
  }

  if (max !== "" && !Number.isNaN(Number(max)) && value > Number(max)) {
    return false
  }

  return true
}

export function matchesColors(product, selectedColors) {
  if (selectedColors.length === 0) return true
  return selectedColors.includes(product.color)
}

export function matchesSizes(product, selectedSizes) {
  if (selectedSizes.length === 0) return true
  if (!product.sizes?.length) return false
  return selectedSizes.some((size) => product.sizes.includes(size))
}
