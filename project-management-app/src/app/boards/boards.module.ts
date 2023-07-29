import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxTranslateModule } from '../translate/translate.module';
import { CdkDropListGroup, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop'

import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { HeaderComponent } from '../boards/components/header/header.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';
import { LoginReactiveFormComponent } from './pages/login-reactive-form/login-reactive-form.component';
import { UserComponent } from './pages/user-page/user.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { BoardItemComponent } from './components/board-item/board-item.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { BoardRouteComponent } from './pages/board-page/board-route.component';
import { ColumnsListComponent } from './components/columns-list/columns-list.component';
import { ColumnsItemComponent } from './components/columns-item/columns-item.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { BoardsService } from '../core/services/boards.service';
import { BoardsRoutingModule } from './boards-routing.module';
import { PasswordsEqualDirective } from './validators/passwords-equal.directive';
import { EmailExistsDirective } from './validators/user-exists.directive';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ModalColumnComponent } from './components/modal-column/modal-column.component';
import { ModalTaskComponent } from './components/modal-task/modal-task.component';

@NgModule({
  declarations: [
    WelcomePageComponent,
    HeaderComponent,
    SignupFormComponent,
    LoginReactiveFormComponent,
    UserComponent,
    ModalWindowComponent,
    BoardListComponent,
    BoardItemComponent,
    ConfirmationComponent,
    BoardRouteComponent,
    ColumnsListComponent,
    ColumnsItemComponent,
    TaskListComponent,
    TaskItemComponent,
    PasswordsEqualDirective,
    EmailExistsDirective,
    EditProfileComponent,
    ModalColumnComponent,
    ModalTaskComponent
  ],
  exports: [
    WelcomePageComponent,
    HeaderComponent,
    SignupFormComponent,
    LoginReactiveFormComponent,
    UserComponent,
    ModalWindowComponent,
    BoardListComponent,
    BoardItemComponent,
    ConfirmationComponent,
    BoardRouteComponent,
    ColumnsListComponent,
    ColumnsItemComponent,
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTranslateModule,
    BoardsRoutingModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag
  ],
  providers: [
    BoardsService
  ]
})
export class BoardsModule { }
