import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService ) {

  }

  public searchByCapital(term: string): void {
    this.countriesService.searchCapital(term)
      .subscribe(Lander => { this.countries = Lander });
    console.log(`From ByCapitalPage ---> ${term}`);
  }

}
