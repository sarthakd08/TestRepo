// import { ACCESS_LEVELS } from './../../../shared/globals.constants';
// import { RoleMatrixService } from './../../../core/services/role-matrix.service';
import { List, fromJS, Map } from "immutable";
import { Component, ViewChild, AfterViewInit } from "@angular/core";

const LIST = [
  {
    className: "sprite home",
    title: "Home",
    url: "/campaigns",
    isActive: false,
    subnav: []
  },
  {
    className: "sprite inbox",
    title: "Inbox",
    url: "/inbox",
    isActive: false,
    subnav: []
  },
  {
    className: "sprite insights",
    title: "Insights",
    url: "/insights",
    isActive: false,
    subnav: []
  },
  {
    className: "sprite overview",
    title: "Overview",
    url: "/overview",
    isActive: false,
    subnav: []
  },
  {
    className: "sprite settings",
    title: "Settings",
    url: "/settings",
    isActive: false,
    subnav: []
  }
];
// { className: "", title: "Manage Accounts", url: "/accounts" }
@Component({
  selector: "od-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements AfterViewInit {
  urlList = LIST;
  @ViewChild("settingsTab") settingsTab;
  constructor() {}
  ngAfterViewInit() {
    // let settingsAccess = this.roleMatrixService.getAccessLevel(['rpm', 'NAVIGATION_TAB', 'SETTINGS']);
    // if (settingsAccess === ACCESS_LEVELS['VIEW_ONLY']) {
    //   this.settingsTab.nativeElement.classList.add('od-action-disabled');
    // } else if (settingsAccess === ACCESS_LEVELS['NO_ACCESS']) {
    //   let elem = this.settingsTab.nativeElement;
    //   elem.parentNode.removeChild(elem);
    // }
  }

  toggleSubMenu(i, action) {
    this.urlList.forEach(ul => {
      ul.isActive = false;
    });
    if (action === "show") {
      this.urlList[i].isActive = true;
    }
  }
}
