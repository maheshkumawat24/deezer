import { HttpErrorResponse } from "@angular/common/http";

export default class Utils {
    static convertSecondsToMinutes(duration: number) {
        var minutes = Math.floor(duration / 60);
        var seconds = duration - minutes * 60;
        return this.str_pad_left(minutes, '0', 2) + ':' + this.str_pad_left(seconds, '0', 2);
    }

    static str_pad_left(string, pad, length) {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }

    static handleHttpError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
          }
          // return an observable with a user-facing error message
          return new Error('Valid token not returned');
    }
}