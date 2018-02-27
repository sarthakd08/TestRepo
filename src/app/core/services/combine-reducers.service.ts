// import { InsightsReducer } from './../../modules/insights/shared/insights.reducer';
import { combineReducers } from "redux-immutable";
// import settingsReducer from "../../modules/settings/settings.reducer";
import { AppReducer } from "../../modules/app/shared/app.reducer";

export default combineReducers({
  app: AppReducer
});
