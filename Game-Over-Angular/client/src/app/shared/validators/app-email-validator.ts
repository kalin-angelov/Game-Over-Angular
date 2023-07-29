import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(domain: string[]): ValidatorFn {
    const domainStrings = domain.join('|');
    const regExp = new RegExp(`[a-zA-Z0-9]+@[a-zA-z]+\.(${domainStrings})$`);

    return(control) => {
        return control.value === '' || regExp.test(control.value) ? null : { appEmailValidator: true };
    }
}