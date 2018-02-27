// import { ErrorFormSubmittedComponent } from './form-wrapper/error-form-submitted/error-form-submitted.component';
// import { Error500Component } from './form-wrapper/error-500/error-500.component';

// import { ErrorLinkExpiredComponent } from './form-wrapper/error-link-expired/error-link-expired.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { HomeComponent } from "./modules/home/home.component";

const routes: Routes = [
  // {
  //   // path: "public/form"
  //   // loadChildren: "app/modules/form-builder/form.module#FormModule"
  // },
  // {
  //   path: "public/error-link"
  //   // component: ErrorLinkExpiredComponent
  // },
  // {
  //   path: "public/error-500"
  //   // component: Error500Component
  // },
  // {
  //   path: "public/error-form-submitted"
  //   // component: ErrorFormSubmittedComponent
  // },
  // {
  //   path: "messaging",
  //   component: HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
