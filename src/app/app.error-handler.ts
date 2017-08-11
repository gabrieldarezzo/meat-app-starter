import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {
  static handleError(error : Response | any) {
    let errormessage : string

    if(error instanceof Response) {
      errormessage = `Erro: ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
    } else {
      errormessage = error.toString();
    }

    console.log(errormessage);
    return Observable.throw(errormessage);
  }

}
