import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from '../app.service';

@Component({
  selector: 'app-vanues',
  templateUrl: './vanues.component.html',
  styleUrls: ['./vanues.component.css']
})
export class VanuesComponent implements OnInit {

  users = [];

  CapacityList = [];
  FeaturesList = [];
  CuisineList = [];
  PricePerOrderList = [];
  VibeList = [];

  CapacityForm:FormGroup;
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

  constructor(private router: Router, private userService: AppService,private spinner: NgxSpinnerService,public fb:FormBuilder) { }

  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }
  ngOnInit() {
    this.getUsers(this.data);
    this.getVanues(this.data);
    this.CapacityForm = this.fb.group({
      name:[''],
      type:['capacity']
    })
  }

  getUsers(data){
    this.spinner.show();
    this.userService.getUsers(data).subscribe((data)=>{
      if(data.statusCode == 200){
        this.users = data.data.users;
        this.total = data.data.total;
        this.spinner.hide();
      }
    },
    (err)=>{
      console.log(err);
      this.spinner.hide();
    })
  }

  getVanues(data){
    this.spinner.show();
    this.userService.getVanueList(data).subscribe((data)=>{
      debugger
      if(data.statusCode == 200){
        this.CapacityList = data.data.capacity;
        this.CuisineList = data.data.cuisine;
        this.FeaturesList = data.data.features;
        this.PricePerOrderList = data.data.pricePerHead;
        this.VibeList = data.data.vibe;
      }
    },
    (err)=>{
      console.log(err);
      this.spinner.hide();
    })
  }


  deleteUser(user_id,index){
    
    var consent = confirm("Do you want to delete this user ?");
    if(consent){
    this.userService.deleteUser({userId: user_id}).subscribe((data)=>{
      if(data.statusCode == 200){
        this.users.splice(index,1);
      }

    })
    }
  }

  loadPage(page: number) {
    this.data.page = page;
    this.getUsers(this.data);
   }

   search(event){
     this.data.filter = event.target.value;
     this.getUsers(this.data)
   }

   editUser(user_id){
     this.router.navigate(['edit-user'], { queryParams: { user_id: user_id}});
   }

   openCapacity(){
    this.router.navigate(['Capacity'], { queryParams: { }});
  }

  openCuisine(){
    this.router.navigate(['Cuisinetype'], { queryParams: { }});
  }

  openPricePerHead(){
    this.router.navigate(['Priceperhead'], { queryParams: { }});
  }

  openFeature(){
    this.router.navigate(['Features'], { queryParams: { }});
  }

  openVibe(){
    this.router.navigate(['Vibe'], { queryParams: { }});
  }

}
