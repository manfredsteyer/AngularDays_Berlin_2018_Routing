import { Observable } from 'rxjs';
import { FlightSearchComponent } from './../../flight-booking/flight-search/flight-search.component';
import { FlightEditComponent } from './../../flight-booking/flight-edit/flight-edit.component';
import { CanDeactivate } from "@angular/router";
import { Injectable } from '@angular/core';


export interface ExitComponent {
    canExit(): Observable<boolean>;
}

@Injectable({
    providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<ExitComponent> {

    canDeactivate(comp: ExitComponent) {
        return comp.canExit();
    }

}