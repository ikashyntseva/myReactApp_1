export const getCurrentYear = () => new Date().getFullYear()

export const getLastYears = number => {
  const currentYear = getCurrentYear()

  return Array.from({ length: number }, (el, ind) => currentYear - ind)
}
