import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Country } from 'src/app/interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';


@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})
export class ChartBarComponent implements OnInit {

  countries?: string[];
  population?: number[];
  basicData: any;
  basicOptions: any;

  constructor(private countriesService: CountriesService) { }


  ngOnInit() {

    this.countriesService.getCountries().pipe(
      map((data: Country[]) => {
        this.countries = data.map(country => country.name.official);
        this.population = data.map(population => population.population)
      })
    ).subscribe((_) => {
      this.basicData.labels = this.countries;
      this.basicData.datasets[0].data = this.population;
    });

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: [],
      datasets: [
        {
          label: 'Población por País',
          data: [],
          backgroundColor: '#42A5F5',
          borderColor: '#42A5F5',
          borderWidth: 1
        }
      ]
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
}
