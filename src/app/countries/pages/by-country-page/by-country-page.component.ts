import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})

export class ByCountryPageComponent {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  constructor(private countriesService: CountriesService) {}

  public searchByCountry(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry(term).subscribe(Lander => {
        this.countries = Lander;
        this.isLoading = false;
      });
    console.log(`From ByCountryPage ---> ${term}`);
  }
}
