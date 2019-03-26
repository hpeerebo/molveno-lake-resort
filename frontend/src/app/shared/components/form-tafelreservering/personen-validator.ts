import { AsyncValidator, AbstractControl, ValidationErrors, FormGroup, AsyncValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import { TafelreserveringenService } from 'src/app/services/tafelreserveringen.service';
import { Observable, of } from 'rxjs';
import { PickerHelper } from 'src/app/models/picker-helper';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PersonenValidator {
  public static createValidator(tafelreserveringenService: TafelreserveringenService): AsyncValidatorFn {
    return (control: AbstractControl) => {
      const formGroup = control as FormGroup;
      const reservationDate = PickerHelper.toDate(formGroup.controls.aanvangsdatum.value, formGroup.controls.aanvangstijd.value);
      return tafelreserveringenService.checkReservation(reservationDate).pipe(
        map(data => formGroup.controls.personen.value > data.beschikbaar ? { message: `Er zijn maar ${data.beschikbaar} plekken beschikbaar` } : null),
        catchError(() => of(null)));
    }
  }
}

//   validate(
//     formGroup: FormGroup
//   ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
//     console.log(formGroup);
//     const reservationDate = PickerHelper.toDate(formGroup.controls.aanvangsdatum.value, formGroup.controls.aanvangstijd.value)
//     return this.tafelreserveringenService.checkReservation(reservationDate).pipe(
//       map(data => formGroup.controls.personen.value > data.beschikbaar ? { message: `Er zijn maar ${data.beschikbaar} plekken beschikbaar` } : null),
//       catchError(() => of(null))
//     );
//   }
// }
