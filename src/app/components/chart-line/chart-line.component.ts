import { Component } from '@angular/core';
import { map } from 'rxjs';
import { StockMarket } from 'src/app/interfaces/stock-market.interface';
import { StockMarketService } from 'src/app/services/stock-market.service';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.css']
})
export class ChartLineComponent {

  prices!: number[];
  date!: string[];
  data: any;
  options: any;


  constructor(private stockMarketService: StockMarketService) { }

  ngOnInit() {

    this.stockMarketService.getMarketData()
  .pipe(
    map((response: any) => {
      this.prices = response.historical.map((item: any) => item.close);
      this.date = response.historical.map((item: any) => item.date);

       
    })
  )
  .subscribe((_) => {
    console.log(_); // Mostramos el resultado si es necesario para verificar los datos
    
    this.data.labels = this.date.reverse();
    this.data.datasets[0].data = this.prices.reverse();
    console.log(this.date)
  });





    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: this.date,
      datasets: [
        {
          label: 'Evolucion del mercado',
          data: this.prices,
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4
        },

      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
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
