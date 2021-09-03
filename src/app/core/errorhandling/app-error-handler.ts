import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        alert(`An Unexpected error occured: ${error.originalError.error.message}\n See Log for more details`);
        console.log(error);
    }
  }
