'use strict';


/**
 * delete user payment
 *
 * id String UUID to delete user payment
 * no response value expected for this operation
 **/
exports.billingIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete user location
 *
 * id String UUID to delete user location
 * no response value expected for this operation
 **/
exports.locationIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * place user location
 *
 * body List LocationItem to save location
 * no response value expected for this operation
 **/
exports.locationPUT = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * returns List
 **/
exports.maintenanceGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "dateTime" : "2016-08-29T09:12:33.001Z",
  "line" : "cannot use module",
  "name" : "error 505",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
}, {
  "dateTime" : "2016-08-29T09:12:33.001Z",
  "line" : "cannot use module",
  "name" : "error 505",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body PriceItem priceItem to update price
 * id String UUID to update price
 * no response value expected for this operation
 **/
exports.priceForecastIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * body PriceItem priceItem to created price
 * id String UUID to created price
 * no response value expected for this operation
 **/
exports.priceForecastIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete user profile
 *
 * id String UUID to delete user profile
 * no response value expected for this operation
 **/
exports.profileIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete promotion
 *
 * id String UUID to delete promotion
 * no response value expected for this operation
 **/
exports.promotionDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

