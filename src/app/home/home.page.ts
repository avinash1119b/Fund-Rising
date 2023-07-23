import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm } from './home.page.form';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  form! : FormGroup;

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit() {

    this.form = new LoginPageForm(this.formBuilder).createForm();

  }

}
