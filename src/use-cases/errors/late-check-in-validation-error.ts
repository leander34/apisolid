export class LateCheckInValidationError extends Error {
  constructor() {
    super(
      'the check-in can be only validation until 20 minutes of its creation',
    )
  }
}
