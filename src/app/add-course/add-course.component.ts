import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    date: new FormControl(),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
  }

  onCancel() {
    console.log('cancel');
  }
}
