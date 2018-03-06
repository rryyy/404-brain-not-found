import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

import { AnalyticsProvider } from '../../providers/analytics/analytics';

/**
 * Generated class for the RespondentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-respondents',
  templateUrl: 'respondents.html',
})
export class RespondentsPage {
	  @ViewChild('barCanvas') barCanvas;
      barChart: any;
      data: any;
      response_total: any; response_bus: any; response_jeep: any; response_taxi: any; response_train: any; response_uber: any; response_grab: any; response_tric: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private AnalyticsProvider: AnalyticsProvider) {
  }

 ionViewDidLoad()
{
   this.GetAnalytics();
}
GetAnalytics() {
    this.AnalyticsProvider
      .showData()
      .subscribe(Response => {
        // response
        this.response_total = Response.response.responses;
        this.response_bus = Response.response.bus_responses;
        this.response_jeep = Response.response.jeepney_responses;
        this.response_taxi = Response.response.taxi_responses;
        this.response_train = Response.response.train_responses;
        this.response_grab = Response.response.grab_responses;
        this.response_uber = Response.response.uber_responses;
        this.response_tric = Response.response.tricycle_responses;        
        console.log(this.data);

this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["bus", "jeepney", "taxi", "train", "uber", "grab", "tricycle"],
                datasets: [{
                    label: '# of Respondents',
                    data: [Response.response.bus_responses,Response.response.jeepney_responses, Response.response.taxi_responses, Response.response.train_responses, Response.response.uber_responses, Response.response.grab_responses, Response.response.tricycle_responses],
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
     })

  
     }
}

