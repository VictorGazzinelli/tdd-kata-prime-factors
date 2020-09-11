import { FactorPrime } from '@/main/protocols/factor-prime'
import { ValueOutOfBoundsError } from '@/main/errors/value-out-of-bounds-error'

export class PrimeFactors implements FactorPrime {
  factorPrime (n: number): number[] {
    if (!this.isNatural(n) || n < 2) { throw new ValueOutOfBoundsError(n) }
    return []
  }

  private isNatural (n: number): boolean {
    return Number.isInteger(n) && n >= 0
  }
}
