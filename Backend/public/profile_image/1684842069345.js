import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//===>> Reducer import
import {
  authSignInReducer,
  changePasswordReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
} from './Reducers/auth.reducer';
import { roleListReducer } from './Reducers/roles.reducer';
import {
  userCreateReducer,
  userDetailsReducer,
  userListReducer,
  userRemoveReducer,
  userUpdateReducer,
} from './Reducers/users.reducer';
import {
  jobCreateReducer,
  jobDetailsReducer,
  jobListReducer,
  jobRemoveReducer,
  jobUpdateReducer,
} from './Reducers/jobs.reducer';
import {
  userJobListReducer,
  userJobUpdateReducer,
} from './Reducers/userJobs.reducer';
import {
  vendorCreateReducer,
  vendorDetailsReducer,
  vendorListReducer,
  vendorRemoveReducer,
  vendorUpdateReducer,
} from './Reducers/vendors.reducer';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListReducer,
  orderRemoveReducer,
  orderUpdateReducer,
} from './Reducers/orders.reducer';
import {
  itemCreateReducer,
  itemDetailsReducer,
  itemListReducer,
  itemRemoveReducer,
  itemUpdateReducer,
} from './Reducers/items.reducer';
import {
  itemReleaseCreateReducer,
  itemReleaseDetailsReducer,
  itemReleaseListReducer,
  itemReleaseRemoveReducer,
  itemReleaseUpdateReducer,
} from './Reducers/itemRelease.reducer';
import {
  itemReceivedCreateReducer,
  itemReceivedDetailsReducer,
  itemReceivedListReducer,
  itemReceivedRemoveReducer,
  itemReceivedUpdateReducer,
} from './Reducers/itemReceived.reducer';
import {
  itemReleaseCommentCreateReducer,
  itemReleaseCommentDetailsReducer,
  itemReleaseCommentListReducer,
  itemReleaseCommentRemoveReducer,
  itemReleaseCommentUpdateReducer,
} from './Reducers/itemReleaseComment.reducer';
import {
  itemReceiveCommentCreateReducer,
  itemReceiveCommentDetailsReducer,
  itemReceiveCommentListReducer,
  itemReceiveCommentRemoveReducer,
  itemReceiveCommentUpdateReducer,
} from './Reducers/itemReceiveComment.reducer';
import {
  itemReceivedImagesCreateReducer,
  itemReceivedImagesDetailsReducer,
  itemReceivedImagesListReducer,
  itemReceivedImagesRemovedReducer,
  itemReceivedImagesUpdateReducer,
} from './Reducers/itemReceivedImages.reducer';
import { dashboardListReducer } from './Reducers/dashboard.reducer';
import { searchReducer } from './Reducers/search.reducer';
//===<<

const reducer = combineReducers({
  //===>> Auth Reducer
  authSignIn: authSignInReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  changePassword: changePasswordReducer,
  //===<<
  //===>> User Reducer
  userCreate: userCreateReducer,
  userList: userListReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  userRemove: userRemoveReducer,
  //===<<
  //===>> Role Reducer
  roleList: roleListReducer,
  //===<<
  //===>> Job Reducer
  jobCreate: jobCreateReducer,
  jobList: jobListReducer,
  jobDetails: jobDetailsReducer,
  jobUpdate: jobUpdateReducer,
  jobRemove: jobRemoveReducer,
  //===<<
  //===>> User Job Reducer
  userJobList: userJobListReducer,
  userJobUpdate: userJobUpdateReducer,
  //===<<
  //===>> Vendor Reducer
  vendorCreate: vendorCreateReducer,
  vendorList: vendorListReducer,
  vendorDetails: vendorDetailsReducer,
  vendorUpdate: vendorUpdateReducer,
  vendorRemove: vendorRemoveReducer,
  //===<<
  //===>> Order Reducer
  orderCreate: orderCreateReducer,
  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
  orderUpdate: orderUpdateReducer,
  orderRemove: orderRemoveReducer,
  //===<<
  //===>> Item Reducer
  itemCreate: itemCreateReducer,
  itemList: itemListReducer,
  itemDetails: itemDetailsReducer,
  itemUpdate: itemUpdateReducer,
  itemRemove: itemRemoveReducer,
  //===<<
  //===>> ItemRelease Reducer
  itemReleaseCreate: itemReleaseCreateReducer,
  itemReleaseList: itemReleaseListReducer,
  itemReleaseDetails: itemReleaseDetailsReducer,
  itemReleaseUpdate: itemReleaseUpdateReducer,
  itemReleaseRemove: itemReleaseRemoveReducer,
  //===<<
  //===>> ItemReceived Reducer
  itemReceivedCreate: itemReceivedCreateReducer,
  itemReceivedList: itemReceivedListReducer,
  itemReceivedDetails: itemReceivedDetailsReducer,
  itemReceivedUpdate: itemReceivedUpdateReducer,
  itemReceivedRemove: itemReceivedRemoveReducer,
  //===<<
  //===>> ItemReleaseComment Reducer
  itemReleaseCommentCreate: itemReleaseCommentCreateReducer,
  itemReleaseCommentList: itemReleaseCommentListReducer,
  itemReleaseCommentDetails: itemReleaseCommentDetailsReducer,
  itemReleaseCommentUpdate: itemReleaseCommentUpdateReducer,
  itemReleaseCommentRemove: itemReleaseCommentRemoveReducer,
  //===<<
  //===>> ItemReceiveComment Reducer
  itemReceiveCommentCreate: itemReceiveCommentCreateReducer,
  itemReceiveCommentList: itemReceiveCommentListReducer,
  itemReceiveCommentDetails: itemReceiveCommentDetailsReducer,
  itemReceiveCommentUpdate: itemReceiveCommentUpdateReducer,
  itemReceiveCommentRemove: itemReceiveCommentRemoveReducer,
  //===<<
  //===>> ItemReceivedImages Reducer
  itemReceivedImagesCreate: itemReceivedImagesCreateReducer,
  itemReceivedImagesList: itemReceivedImagesListReducer,
  itemReceivedImagesDetails: itemReceivedImagesDetailsReducer,
  itemReceivedImagesUpdate: itemReceivedImagesUpdateReducer,
  itemReceivedImagesRemove: itemReceivedImagesRemovedReducer,
  //===<<
  //===>> Dashboard
  dashboardList: dashboardListReducer,
  //===<<
  search: searchReducer,
});

//===>> User info store in store
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  authSignIn: { userInfo: userInfoFromStorage },
};
//===<<

const middleware = [thunk];

//===>> Create store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
//===<<

export default store;
