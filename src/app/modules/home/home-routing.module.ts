// import { ContactListComponent } from "./../contact-list/contact-list.component";
// import { InsightsComponent } from "./../insights/insights.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";
// import { OverviewComponent } from "../overview/overview.component";
// import { InboxMainContainerComponent } from "../inbox/inbox-main-container/inbox-main-container.component";
// import { HomeRouteGuardService } from "./home-route-guard.service";
// import { LoginRouteGuardService } from "./../../login-route-guard.service";
// import { GithubAppComponent } from "./github-app/github-app.component";
// import { UserRepoComponent } from "./github-app/user-repo/user-repo.component";

// import { CampaignsComponent } from "../campaigns/campaigns.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [],
    children: [{ path: "**", redirectTo: "/", pathMatch: "full" }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
