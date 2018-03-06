import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

import { AnalyticsProvider } from '../../providers/analytics/analytics';

/**
 * Generated class for the FeedbacknegaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedbacknega',
  templateUrl: 'feedbacknega.html',
})
export class FeedbacknegaPage {
  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;
  data: any;
  negative_bus: any; negative_jeep: any; negative_taxi: any; negative_train: any; negative_uber: any; negative_grab: any; negative_tricycle: any;
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
        //negative feedbacks
        this.negative_bus = Response.negative.bus;
        this.negative_jeep = Response.negative.jeep;
        this.negative_taxi = Response.negative.taxi;
        this.negative_train = Response.negative.train;
       this. negative_uber = Response.negative.uber;
        this.negative_grab = Response.negative.grab;
        this.negative_tricycle = Response.negative.tricycle;
	  this.lineChart = new Chart(this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["bus", "jeepney", "taxi", "train", "uber", "grab", "tricycle"],
                datasets: [
                    {
                        label: "Negative Feedbacks",
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
                        data: [Response.negative.bus, Response.negative.jeep, Response.negative.taxi, Response.negative.train, Response.negative.grab, Response.negative.uber, Response.negative.tricycle],
                        spanGaps: false,
                    }
                ]
            }
 
        });
      })
    // console.log(this.log)
  }
}
