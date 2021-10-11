import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from '../app.service';

@Component({
  selector: 'app-vibe',
  templateUrl: './vibe.component.html',
  styleUrls: ['./vibe.component.scss']
})
export class VibeComponent implements OnInit {

  vibe = [];
  vibeData:any;
  size = '';
  pagination = false;
  vibeForm:FormGroup;
  total = 0;
  errMssage:any;
  msg:any;
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
   submitted:boolean = false;

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
    this.vibeForm = this.fb.group({
      name:['',[Validators.required]],
      type:['vibe']
    });

    this.getVanues(this.data);
  }


  getVanues(data){
    this.spinner.show();
    this.userService.getVanueList(data).subscribe((data)=>{
      debugger
      if(data.statusCode == 200){
        this.vibeData = data.data;
        this.vibeData.basicId = data.data._id;
      }
      this.spinner.hide();
    },
    (err)=>{
      console.log(err);
      this.spinner.hide();
    })
  }

  loadPage(page: number) {
    this.data.page = page;
   }

   search(event){
     this.data.filter = event.target.value;
   }

   EditVibe(item,i){
     this.vibeForm.controls["name"].setValue(item.name);
     this.vibeData.vibe.splice(i,1);
    document.getElementById('id01').style.display='block';
   }

  DeleteVibe(i) {
    var consent = confirm("Do you want to delete this record ?");
    if (consent) {
      this.vibeData.vibe.splice(i, 1);
      this.AddVanue(this.vibeData);
    }
  }

   AddVibe(){
     this.submitted = true;
     if(this.vibeForm.valid){
       this.vibeData.vibe.push(this.vibeForm.value);
       debugger
        this.AddVanue(this.vibeData);
     }
   };

   AddVanue(data){
    this.userService.addVanue(data).subscribe((data)=>{
      debugger;
      console.log("=== resposnse of daat data====",data)
      if(data.statusCode == 200){
        document.getElementById('id01').style.display='none';
        this.vibeForm.reset();
        this.vibeForm.controls["type"].setValue("vibe");
        window.location.reload();
      }
      if(data.statusCode == 400){
        this.errMssage = true;
        this.msg = data.message;
      }
      this.spinner.hide();

    },
    (err)=>{
      console.log(err);
      this.spinner.hide();
    })
   }

}
