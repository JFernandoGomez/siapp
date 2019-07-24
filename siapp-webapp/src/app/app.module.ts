import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SignaturePadModule } from 'angular2-signaturepad';
import { MatTabsModule } from '@angular/material/tabs';
// COMPONENTS
import { AppComponent } from './app.component';
import { SidebarComponent } from './modules/dashboard/components/sidebar/sidebar.component';
import { TopbarComponent } from './modules/dashboard/components/topbar/topbar.component';
import { LoginComponent } from './modules/users/components/login/login.component';
import { ListUserComponent } from './modules/users/components/list-user/list-user.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { FormUserComponent } from './modules/users/components/form-user/form-user.component';
// SERVICES
import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { RecordService } from './shared/services/record-service';
// CORE
import { Interceptor } from './shared/core/interceptor';
import { NavigationTreeComponent } from './modules/dashboard/components/navigation-tree/navigation-tree.component';
import { TablePaginationComponent } from './shared/components/table-pagination/table-pagination.component';
import { UserRecordsComponent } from './modules/users/components/user-records/user-records.component';
import { ListRecordsDialogComponent } from './modules/records/components/list-records-dialog/list-records-dialog.component';
import { ListPersonComponent } from './modules/records/components/list-person/list-person.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { FormPersonComponent } from './modules/records/components/form-person/form-person.component';
import { RecordSummaryComponent } from './modules/records/components/record-summary/record-summary.component';
import { PrivacyAgreementComponent } from './modules/records/components/privacy-agreement/privacy-agreement.component';
import { SignComponent } from './shared/components/sign/sign.component';
import { RecordInformationComponent } from './modules/records/components/record-summary/components/record-information/record-information.component';
import { FormRecordComponent } from './modules/records/components/form-record/form-record.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { UploadFormComponent } from './shared/components/upload-form/upload-form.component';
import { FileDropDirective } from './shared/directives/file-drop.directive';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    LoginComponent,
    ListUserComponent,
    DashboardComponent,
    FormUserComponent,
    NavigationTreeComponent,
    TablePaginationComponent,
    UserRecordsComponent,
    ListRecordsDialogComponent,
    ListPersonComponent,
    LoadingSpinnerComponent,
    FormPersonComponent,
    RecordSummaryComponent,
    PrivacyAgreementComponent,
    SignComponent,
    RecordInformationComponent,
    FormRecordComponent,
    UploadFormComponent,
    FileDropDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    OverlayModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    SignaturePadModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  providers: [
    UserService,
    RecordService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    MatDialog
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
