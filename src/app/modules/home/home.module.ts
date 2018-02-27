import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CommonModule, PathLocationStrategy } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ConfirmDialogModule } from "primeng/components/confirmdialog/confirmdialog";

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
// import { LoginDialogComponent } from "./header/login-dialog/login-dialog.component";
// import { AllProductsDialogComponent } from "./header/all-products-dialog/all-products-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule
  ],
  declarations: [
    HomeComponent,
    SidebarComponent,
    HeaderComponent
    // AllProductsDialogComponent
  ],
  providers: [PathLocationStrategy]
})
export class HomeModule {}
