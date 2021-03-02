enum DNANucleotide {
  G = 'G',
  C = 'C',
  T = 'T',
  A = 'A'
}
enum RNANucleotide {
  G = 'G',
  C = 'C',
  U = 'U',
  A = 'A'
}

class Transcriptor {
  private readonly complements = new Map([
    [DNANucleotide.G, RNANucleotide.C],
    [DNANucleotide.C, RNANucleotide.G],
    [DNANucleotide.T, RNANucleotide.A],
    [DNANucleotide.A, RNANucleotide.U]
  ])

  toRna (dna: string): string {
    const dnaSplit: string[] = dna.split('')

    if (!dnaSplit.every(n => Object.values(DNANucleotide).toString().includes(n))) {
      throw new Error('Invalid input DNA.')
    }

    return dnaSplit.map(
      (n) => this.complements.get(n as DNANucleotide)?.toString()
    ).join('')
  }
}

export default Transcriptor
