import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chart } from 'chart.js';

import { AnalyticsProvider } from '../../providers/analytics/analytics';
/**
 * Generated class for the FeedbackSortPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback-sort',
  templateUrl: 'feedback-sort.html',
})
export class FeedbackSortPage {
  @ViewChild('doughnutCanvas') doughnutCanvas;
   doughnutChart: any;
   data: any;
   positive_bus: any; positive_jeep: any; positive_taxi: any; positive_train: any; positive_uber: any; positive_grab: any; positive_tricycle: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private AnalyticsProvider: AnalyticsProvider) {
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
        //positive feedbacks
        this.positive_bus = Response.positive.bus;
        this.positive_jeep = Response.positive.jeep;
        this.positive_taxi = Response.positive.taxi;
        this.positive_train = Response.positive.train;
       this. positive_uber = Response.positive.uber;
        this.positive_grab = Response.positive.grab;
        this.positive_tricycle = Response.positive.tricycle;
 this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["bus", "jeepney", "taxi", "train", "uber", "grab", "tricycle"],
                datasets: [{
                    label: 'Positive Feedbacks',
                    data: [Response.positive.bus, Response.positive.jeep, Response.positive.taxi, Response.positive.train, Response.positive.grab, Response.positive.uber, Response.positive.tricycle],
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
      })
    // console.log(this.log)
}
}
