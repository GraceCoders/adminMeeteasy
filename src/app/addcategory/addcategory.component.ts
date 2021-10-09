import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from '../app.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {

  catagoryForm: FormGroup;
  submitted: boolean = false;
  options: any;
  urls_coverPhoto: any;
  formData = new FormData();
  message:string;


  constructor(public formBuilder: FormBuilder, private userService: AppService, private router: Router,private spinner: NgxSpinnerService) { }

  get c() { return this.catagoryForm.controls };

  ngOnInit() {
    this.catagoryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      image:['']
    });
  }

  SaveCatagory(): void {
    this.spinner.show();
    this.submitted = true;
    if (this.catagoryForm.valid) {
      this.formData.set("name", this.catagoryForm.value.name);
      this.formData.set("storeId",localStorage.getItem("storeId"));
      this.userService.addCatagory(this.formData).subscribe((data) => {
        this.spinner.hide();
        if (data.statusCode == 200) {
          this.router.navigate(['Categories']);
          this.message = "";
        }
        else {
          this.message = data.message;
        }
      },
        (err) => {
          this.spinner.hide();
          console.log(err);
        })
    }
  }
  Cancel(): void {
    this.submitted = false;
    this.catagoryForm.reset();
    this.router.navigate(['catagory-list']);
  }

  fileUploadCoverPhoto(event) {
    let files = event.target.files;
    this.urls_coverPhoto = [];
    if (files) {
      for (let file of files) {
        var ext = file.name.match(/\.(.+)$/)[1];
        if (ext.toLowerCase() === 'jpg' ||
          ext.toLowerCase() === 'jpeg' ||
          ext.toLowerCase() === 'png' ||
          ext.toLowerCase() === 'webp') {
          let reader = new FileReader();
          reader.onload = (e: any) => {
            this.urls_coverPhoto.push(e.target.result);
          }
          reader.readAsDataURL(file);
          this.formData.set('image', file, file.name);
          this.catagoryForm.controls["image"].setValue(this.formData.get('image'));
        }
      }
    }
  }

}
