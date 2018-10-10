import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Flight, FlightService } from "@flight-workspace/flight-api";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { delay } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})
export class FlightResolver implements Resolve<Flight> {

    constructor(private flightService: FlightService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight> {
        const id = route.params['id'];
        return this.flightService.findById(id).pipe(
            delay(7000)
        );
    }


}