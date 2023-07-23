import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./home.page.form";

describe('LoginPageForm', ()=> {

    let loginPageForm : LoginPageForm;
    let form : FormGroup;

    beforeEach(() =>{
        loginPageForm = new LoginPageForm(new FormBuilder());
        form = loginPageForm.createForm();

    })

    it('should create login form empty', () =>{

        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).toEqual("");
        expect(form.get('email').value).toBeFalsy();
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').value).toEqual("");
        expect(form.get('password').value).toBeFalsy();

    });

    it('should have email invalid if email is not valid',() =>{

        form.get('email').setValue('Invalud Email');

        expect(form.get('email').valid).toBeFalsy();

    })

    it('should have email valid if email is valid',() =>{

        form.get('email').setValue('valid@email.com');

        expect(form.get('email').valid).toBeTruthy();

    })

    it('should have valid if form',() =>{

        form.get('email').setValue('valid@email.com');
        form.get('password').setValue('1234567890');

        expect(form.valid).toBeTruthy();

    })

})