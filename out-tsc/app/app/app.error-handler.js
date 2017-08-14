import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
var ErrorHandler = (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handleError = function (error) {
        var errormessage;
        if (error instanceof Response) {
            errormessage = "Erro: " + error.status + " ao acessar a URL " + error.url + " - " + error.statusText;
        }
        else {
            errormessage = error.toString();
        }
        console.log(errormessage);
        return Observable.throw(errormessage);
    };
    return ErrorHandler;
}());
export { ErrorHandler };
//# sourceMappingURL=app.error-handler.js.map