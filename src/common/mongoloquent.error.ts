export default class MongoloquentError extends Error {
  constructor(message: string = "MongoloquentError") {
    super(message)
  }
}
