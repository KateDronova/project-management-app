import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SignUpForm } from '../../models/signup';
import { ConfirmService } from '../../../core/services/confirm.service';
import { ConfirmationType } from '../../models/confirmation-type';
import { ConfirmationInterface } from '../../models/confirmation-interface';
import { UserInterface } from '../../models/user-interface';
import { UsersService } from 'src/app/core/services/users.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormValues } from '../../models/form-values';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit{
  editForm = new SignUpForm()
  show: boolean = false
  loaded: boolean = false
  confirmTypes = ConfirmationType
  confirmation?: ConfirmationInterface
  currentUser: UserInterface = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    password: ''
  }
  initialFormValues: FormValues = {
    id: this.currentUser.id,
    name: this.currentUser.name,
    surname: this.currentUser.surname,
    email: this.currentUser.email,
    password: this.currentUser.password,
  };
  successfulEditing: boolean = false;
  userChangedFormValues: FormValues = {}

  constructor(private location: Location, private confirmService: ConfirmService,
    private authService: AuthService, private userService: UsersService,
    private cdr: ChangeDetectorRef, private router: Router) {}


  ngOnInit(): void {
    this.currentUser.email = this.authService.currentUserEmail;
    this.getCurrentUserInfo(this.currentUser.email);
  }

  trackChanges(fieldName: string, value: string): void {
    if (value !== this.initialFormValues[fieldName]) {
      this.userChangedFormValues[fieldName] = value;
    } else {
      delete this.userChangedFormValues[fieldName];
    }
  }

  submitChanges(form: UserInterface, id: number): void {
    const finalFormValues = Object.assign({}, this.currentUser, this.userChangedFormValues);
    this.userService.changeUserInfo(finalFormValues, id).subscribe();
    this.successfulEditing = true;
    this.cdr.markForCheck();
    setTimeout(() => {
      this.successfulEditing = false;
      this.router.navigate(['pma/main'])
    }, 3000)
    this.cdr.markForCheck();
    console.log(this.successfulEditing);
  }

  private getCurrentUserInfo(currentUserEmail: string): void {
    this.userService.getCurrentUser(currentUserEmail).subscribe((currentUser) => {
      this.currentUser = currentUser;
    })
  }

  appearSmoothly = setTimeout(() =>
    this.loaded = true, 100
  )

  showConfirmation(type: ConfirmationType, id: number): void {
    this.confirmService.setConfirm({type}, id);
  }

  togglePassword(): void {
    this.show = !this.show;
  }

  goBack(): void {
    this.location.back();
  }
}
