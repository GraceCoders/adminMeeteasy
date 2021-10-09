import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { NgxSpinnerService } from "ngx-spinner";
import { AppService} from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales:{
      yAxes:[{
        ticks:{
          beginAtZero:true
        }
      }]
    },
    legend: { display: false }
  };
  public barChartLabels: Label[] = ['March', 'April', 'May', 'June', 'July', 'Augest', 'September'];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [];
  chartColors: any[] = [
    { 
      backgroundColor:["rgb(3, 173, 117)"] 
    }];
  

  public barChartData: ChartDataSets[] = [
    { data: [1, 5, 8, 3, 7, 2, 9], label: 'Users' }
  ];

  public barChartData2: ChartDataSets[] = [
    { data: [65, 1, 80, 10, 56, 55, 40], label: 'Orders' }
  ];

  user_count = "";
  provider_count = "";
  subcategory_count = "";
  category_count = "";
  blob;
  constructor(
    private userService: AppService,  
    private spinner: NgxSpinnerService
    ) { 
    this.reloadPage();
  }

  reloadPage() {
    this.spinner.show();
    if(localStorage.getItem("isLoad") == "true"){
      window.location.reload();
      localStorage.setItem('isLoad',"false");
      this.spinner.hide();
    }

}

  ngOnInit() {
    this.spinner.hide();
      // this.dashboard();
      }

      dashboard(){
        var data = {};
        this.spinner.show();
         this.userService.dashboardCount(data).subscribe((data)=>{
          if(data.statusCode == 200){
            this.user_count = data.data.userCount; 
            this.provider_count = data.data.providerCount;
            this.category_count = data.data.categoryCount;
            this.subcategory_count = data.data.subCategoryCount;
            this.spinner.hide();
          } 
         },
         (err)=>{
           console.log(err);
         })
       }


}
