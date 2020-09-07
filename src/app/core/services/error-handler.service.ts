import { ErrorHandler, Injectable } from '@angular/core'

@Injectable()
export class ErrorHandlerService extends ErrorHandler {
  constructor() {
    super()
  }

  public handleError(error: any) {
    super.handleError(error)
  }
}
