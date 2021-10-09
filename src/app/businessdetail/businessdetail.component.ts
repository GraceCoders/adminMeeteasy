import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from '../app.service';

@Component({
  selector: 'app-businessdetail',
  templateUrl: './businessdetail.component.html',
  styleUrls: ['./businessdetail.component.scss']
})
export class BusinessdetailComponent implements OnInit {

  contactDetailForm: FormGroup;
  submitted = false;
  user_id = "";
  user = {
    username:'',
    email: '',
    verify: '',
    status: ''
  }
  data:any;
  idProofImage:string;
  profileImage:string;
  status:boolean  = false;
  details:any;
  constructor(private userService: AppService,private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,private spinner: NgxSpinnerService) {
    this.contactDetailForm = this.formBuilder.group({
      name: [{value : '' , disabled:true}],
      email: [{value : '' , disabled:true}],
      mobileNumber:[{value : '' , disabled:true}],
      createdAt:[{value : '' , disabled:true}],
      isOTPVerified:[{value : '' , disabled:true}],
      isRegistered:[{value : '' , disabled:true}],
      isExist:[{value : '' , disabled:true}],
      updatedAt:[{value : '' , disabled:true}],
  });
   }

  ngOnInit() {

    
    this.route.queryParams.subscribe((params) => {
      this.user_id = params.user_id;
      // this.editUserProfileForm.addControl('userId', new FormControl('', Validators.required));
      // this.editUserProfileForm.controls['userId'].setValue(this.user_id);
      this.data = {
        businessId: params.business_id
      }
      this.getBusinessDetail(this.data)
    });

  }
  get f() { return this.contactDetailForm.controls; }

  getBusinessDetail(data){
    this.spinner.show();
    this.userService.getBusinessDetail(data).subscribe((data)=>{
      debugger
       if(data.statusCode == 200){
        this.spinner.hide();
         this.contactDetailForm.patchValue(data.data);
         this.details = data.data;
         this.idProofImage = data.data.idProofImage;
         this.profileImage = data.data.profileImage;
       }
    },
    (err)=>{
      this.spinner.hide();
      console.log(err);
    })
  }

  UpdateBusinessStatus() {
    debugger;
    let reqModel = {email:this.contactDetailForm.value.email,status:this.status ? "rejected":'approved'};
    this.spinner.show();
    this.userService.UpdateBusinessStatus(reqModel).subscribe((data) => {
      debugger
      if (data.statusCode == 200) {
        this.status = !this.status;
        this.spinner.hide();
        this.getBusinessDetail(this.data);
      }
    },
      (err) => {
        this.spinner.hide();
        console.log(err);
      })
  }

}
