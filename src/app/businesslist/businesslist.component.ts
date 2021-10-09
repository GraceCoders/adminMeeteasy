import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from '../app.service';

@Component({
  selector: 'app-businesslist',
  templateUrl: './businesslist.component.html',
  styleUrls: ['./businesslist.component.scss']
})
export class BusinesslistComponent implements OnInit {

  businesses = [];
  size = '';
  pagination = false;
  total = 0;
   data = {
     page : 1,
     limit: '',
     text: '',
     filter: ''
   }
   where = {
     filter: '',
     limit: 10,
     page: 1,
     order: -1
   }

  constructor(private router: Router, private userService: AppService,private spinner: NgxSpinnerService) { }

  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }
  ngOnInit() {
    this.getBusinesses(this.data);
  }

  getBusinesses(data){
    this.spinner.show();
    this.userService.getBusinesses(data).subscribe((data)=>{
      if(data.statusCode == 200){
        this.businesses = data.data.busienss;
        this.total = data.data.total;
        this.spinner.hide();
      }
    },
    (err)=>{
      console.log(err);
      this.spinner.hide();
    })
  }


  deletebusiness(user_id,index){
    
    var consent = confirm("Do you want to delete this user ?");
    if(consent){
    this.userService.deleteBusinesses({businessId: user_id}).subscribe((data)=>{
      if(data.statusCode == 200){
        this.businesses.splice(index,1);
      }
    })
    }
  }

  loadPage(page: number) {
    this.data.page = page;
    this.getBusinesses(this.data);
   }

   search(event){
     this.data.filter = event.target.value;
     this.getBusinesses(this.data)
   }

   editbusiness(business_id){
     this.router.navigate(['businessdetail'], { queryParams: { business_id: business_id}});
   }

}
