import { Subscription } from "rxjs/Subscription";
import { Dropdown } from "primeng/components/dropdown/dropdown";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store";
import { Subject } from "rxjs/Subject";
import { List, fromJS } from "immutable";

import { Router } from "@angular/router";
import { OverlayPanel } from "primeng/components/overlaypanel/overlaypanel";
// import { AllProductsDialogComponent } from './all-products-dialog/all-products-dialog.component';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
// import { LoginDialogComponent } from './login-dialog/login-dialog.component';
// import { UserService } from './../../../core/services/user.service';
import { InputText } from "primeng/components/inputtext/inputtext";
import { IActionCreator } from "../../../shared/models";
import { AppConstants } from "../../app/shared/app.constants";
// import { SearchFormModel } from "./shared/models/search-form.model";
// import { HeaderActions } from "./shared/header.actions";
// import { CampaignsActions } from "../../campaigns/shared/campaigns.actions";
// import { InboxActions } from './../../inbox/shared/inbox.actions';

@Component({
  selector: "od-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
  // providers: [SearchFormModel]
})
export class HeaderComponent implements OnInit {
  selectedPopup: HTMLElement;
  searchName = "";
  placeholder;
  param;
  paramLabel;
  routeComponent = "";
  searchParams = [
    "Search by Tags",
    "Search by customer name",
    "Search by Email ID",
    "Search by feedback text",
    "Search by survey Name"
  ];
  public searchForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = [];
  clear = false;
  searchTermSubscription: Subscription;

  @Input("headerText") headerText;
  searchTerm$: Subject<any>;
  @ViewChild("autoSuggest") autoSuggest: OverlayPanel;
  @ViewChild("recentSearch") recentSearch: OverlayPanel;
  constructor(
    private _fb: FormBuilder,
    // private formModel: SearchFormModel,
    private redux: NgRedux<any>,
    // private headerActions: HeaderActions,
    private router: Router
  ) {}

  ngOnInit() {
    this.searchForm = this._fb.group({
      name: [""]
    });
    this.subcribeToFormChanges();
  }

  changeSearchParam(index, pLabel, p) {
    this.paramLabel = pLabel;
    this.param = p;
    this.placeholder = this.searchParams[index];
  }

  getBrandImage() {
    // return this.userService.getUserImgUrl();
  }

  showRecentSearches(event, recentSearch: OverlayPanel) {
    switch (this.router.url.split("?")[0]) {
      case "/campaigns":
      case "/campaigns/new-campaign":
      case "/overview":
        // this.redux.dispatch(this.campaignActions.getRecentCampaigns());
        recentSearch.show(event);
        break;
      default:
      // this.redux.dispatch(this.campaignActions.getRecentCampaigns());
    }
  }

  subcribeToFormChanges() {
    // initialize stream
    const myFormValueChanges$ = this.searchForm.valueChanges;
    // subscribe to the stream
    myFormValueChanges$.subscribe(x => {
      // if (x.name !== "") this.showAutoSuggestions(x);
      return this.events.push({ event: "STATUS CHANGED", object: x });
    });
  }

  dismissLoader() {
    // this.redux.dispatch(<any>this.campaignActions.setLoader(false));
  }

  btn(data) {
    console.log("clicked", data);
    this.redux.dispatch(this.saveUserData(data));
  }

  saveUserData: IActionCreator = data => {
    return {
      type: AppConstants.SET_CONFIRM_DIALOG_LABEL,
      payload: data
    };
  };

  ngOnDestroy() {
    if (this.searchTermSubscription) {
      this.searchTermSubscription.unsubscribe();
    }
  }
}
