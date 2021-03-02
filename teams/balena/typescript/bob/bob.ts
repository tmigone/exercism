class Bob {
  hey (text: string): string {
    if (this.isQuestion(text) && this.isYell(text)) {
      return "Calm down, I know what I'm doing!"
    } else if (this.isQuestion(text)) {
      return 'Sure.'
    } else if (this.isYell(text)) {
      return 'Whoa, chill out!'
    } else if (this.isNothing(text)) {
      return 'Fine. Be that way!'
    } else {
      return 'Whatever.'
    }
  }

  private isQuestion (text: string): boolean {
    return text.endsWith('?')
  }

  private isYell (text: string): boolean {
    const onlyLetters = text.replace(/[^a-zA-Z]/g, '')
    return onlyLetters.match(/[A-Z]/g)?.length === onlyLetters.length
  }

  private isNothing (text: string): boolean {
    return text.replace(/[\t\n\r]/g, '').match(/[a-zA-Z]/g)?.length === 0
  }
}

export default Bob
