export class ResistorColor {
  private readonly maxBands: number = 2
  private readonly bandColors: string[] = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ]

  private readonly colors: string[]

  constructor (colors: string[]) {
    if (colors.length < this.maxBands) {
      throw new Error('At least two colors need to be present')
    }

    this.colors = colors.filter(c => this.bandColors.includes(c))
  }

  value (): number {
    return Number(this.colors
      .slice(0, this.maxBands)
      .map(c => this.bandColors.indexOf(c))
      .join(''))
  }
}
