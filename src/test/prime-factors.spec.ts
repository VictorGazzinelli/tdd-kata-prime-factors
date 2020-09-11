import { PrimeFactors } from '@/main/prime-factors/prime-factors'
import { ValueOutOfBoundsError } from '@/main/errors/value-out-of-bounds-error'

function makeSut (): PrimeFactors {
  return new PrimeFactors()
}

describe('PrimeFactors', () => {
  const factorPrimeErrorCasesArr: Array<[number, ValueOutOfBoundsError]> = [
    [-1, new ValueOutOfBoundsError(-1)],
    [0, new ValueOutOfBoundsError(0)],
    [1, new ValueOutOfBoundsError(1)],
    [1.9999, new ValueOutOfBoundsError(1.9999)],
    [2.0001, new ValueOutOfBoundsError(2.0001)]
  ]

  describe('.factorPrime()', () => {
    /**
     * You are not allowed to write any production code unless it is to make a failing unit test pass.
     * You are not allowed to write any more of a unit test than is sufficient to fail, and compilation failures are failures.
     * You are not allowed to write any more production code than is sufficient to pass the one failing unit test.
    */

    test.each(factorPrimeErrorCasesArr)('when given %f, should throw new ValueOutOfBoundsError()', (n, expectedError) => {
      // Assign
      const sut = makeSut()
      let thrownError

      // Act
      try {
        sut.factorPrime(n)
      } catch (error) {
        thrownError = error
      }

      // Assert
      expect(thrownError).toEqual(expectedError)
    })

    const factorPrimeSuccessCasesArr: Array<[number, number[]]> = [
      [2, [2]]
    ]

    test.each(factorPrimeSuccessCasesArr)('when given %i, should return (%p)', (n, expectedResult) => {
      // Assign
      const sut = makeSut()

      // Act
      const actualResult = sut.factorPrime(n)

      // Assert
      expect(actualResult.sort()).toEqual(expectedResult.sort())
    })
  })
})
