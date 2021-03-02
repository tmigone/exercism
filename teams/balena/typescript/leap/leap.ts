// (div4 && !div100) || (div4 && div100 && div400)
// (div4 && !div100) || (div400)
function isLeapYear (year: number): boolean {
  return (isDivisibleBy(year, 4) && !isDivisibleBy(year, 100)) || isDivisibleBy(year, 400)
}

function isDivisibleBy (dividend: number, divisor: number): boolean {
  return dividend % divisor === 0
}

export default isLeapYear
