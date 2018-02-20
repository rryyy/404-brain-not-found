import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

import { AnalyticsProvider } from '../../providers/analytics/analytics';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	@ViewChild('barCanvas') barCanvas;
	@ViewChild('doughnutCanvas') doughnutCanvas;
    @ViewChild('lineCanvas') lineCanvas;
    barChart: any;
    doughnutChart: any;
    lineChart: any;
    data: any;
    response_total: any; response_bus: any; response_jeep: any; response_taxi: any; response_train: any; response_uber: any; response_grab: any; response_tric: any;
    negative_bus: any; negative_jeep: any; negative_taxi: any; negative_train: any; negative_uber: any; negative_grab: any; negative_tricycle: any;
    positive_bus: any; positive_jeep: any; positive_taxi: any; positive_train: any; positive_uber: any; positive_grab: any; positive_tricycle: any;
  constructor(
      public navCtrl: NavController,
      private AnalyticsProvider: AnalyticsProvider
      ) {

  }
   ionViewDidLoad() {
       this.GetAnalytics();
}
GetAnalytics() {
    this.AnalyticsProvider
      .showData()
      .subscribe(Response => {
        this.data = Response;
        console.log(this.data);
        //response
        this.response_total = Response.response.responses;
        this.response_bus = Response.response.bus_responses;
        this.response_jeep = Response.response.jeepney_responses;
        this.response_taxi = Response.response.taxi_responses;
        this.response_train = Response.response.train_responses;
        this.response_grab = Response.response.grab_responses;
        this.response_uber = Response.response.uber_responses;
        this.response_tric = Response.response.tricycle_responses;
        //negative feedbacks
        this.negative_bus = Response.negative.bus;
        this.negative_jeep = Response.negative.jeep;
        this.negative_taxi = Response.negative.taxi;
        this.negative_train = Response.negative.train;
       this. negative_uber = Response.negative.uber;
        this.negative_grab = Response.negative.grab;
        this.negative_tricycle = Response.negative.tricycle;
        //positive feedbacks
        this.positive_bus = Response.positive.bus;
        this.positive_jeep = Response.positive.jeep;
        this.positive_taxi = Response.positive.taxi;
        this.positive_train = Response.positive.train;
       this. positive_uber = Response.positive.uber;
        this.positive_grab = Response.positive.grab;
        this.positive_tricycle = Response.positive.tricycle;
        console.log(this.response_bus,this.response_jeep,this.response_taxi,this.response_train,this.response_grab,this.response_uber,this.response_tric)
         this.Barchart();
         this.DoughnutChart();
         this.LineChart(); 
      })
    // console.log(this.log)
  }
Barchart()
{
	this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["bus", "jeepney", "taxi", "train", "uber", "grab", "tricycle"],
                datasets: [{
                    label: '# of Respondents',
                    data: [this.response_bus, this.response_jeep, this.response_taxi, this.response_train, this.response_grab, this.response_uber, this.response_tric],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
}
//doughnut chart ends here
DoughnutChart()
{
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["bus", "jeepney", "taxi", "train", "uber", "grab", "tricycle"],
                datasets: [{
                    label: 'Negative Feedbacks',
                    data: [this.positive_bus, this.positive_jeep, this.positive_taxi, this.positive_train, this.positive_grab, this.positive_uber, this.positive_tricycle],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }
 
        });
}
//line chart starts here
LineChart()
{
	  this.lineChart = new Chart(this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["bus", "jeepney", "taxi", "train", "uber", "grab", "tricycle"],
                datasets: [
                    {
                        label: "Positive Feedbacks",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [this.negative_bus, this.negative_jeep, this.negative_taxi, this.negative_train, this.negative_grab, this.negative_uber, this.negative_tricycle],
                        spanGaps: false,
                    }
                ]
            }
 
        });
}
//line chart ends here -->
}
