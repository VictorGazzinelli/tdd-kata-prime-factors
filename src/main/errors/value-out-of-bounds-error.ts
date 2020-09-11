export class ValueOutOfBoundsError extends Error {
  constructor (value: number) {
    super(`Value out of bounds: ${value}`)
    this.name = 'ValueOutOfBoundsError'
  }

  toString (): string {
    return this.name
  }
}
