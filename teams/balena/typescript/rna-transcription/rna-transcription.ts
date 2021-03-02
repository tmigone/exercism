type DNANucleotide = 'G' | 'C' | 'T' | 'A'
type RNANucleotide = 'G' | 'C' | 'U' | 'A'

class Transcriptor {
  private readonly complements: Record<DNANucleotide, RNANucleotide> = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  }

  toRna (strand: string): string {
    const dnaSplit: string[] = strand.split('')

    if (!dnaSplit.every(n => n)
    if (!dnaSplit.every(n => Object.values(DNANucleotide).toString().includes(n))) {
      throw new Error('Invalid input DNA.')
    }

    return dnaSplit.map((n) => this.complements.get(n as DNANucleotide)?.toString()).join('')
  }
}

export default Transcriptor
