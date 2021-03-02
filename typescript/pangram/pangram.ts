
export default class Pangram {
  private readonly text: string
  private readonly ALPHABET_SIZE: number = 26

  constructor (text: string) {
    this.text = text
  }

  isPangram (): boolean {
    // Replace all non a-z chars with empty string
    // Remove duplicates by using Set which enforces unique values
    const alphabet = new Set(
      this.text
        .toLowerCase()
        .replace(/[^a-z]/g, '')
    )
    return alphabet.size === this.ALPHABET_SIZE
  }
}
