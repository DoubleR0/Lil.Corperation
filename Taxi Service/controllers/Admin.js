'use strict';

var utils = require('../utils/writer.js');
var Admin = require('../service/AdminService');

module.exports.billingIdDELETE = function billingIdDELETE (req, res, next, id) {
  Admin.billingIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationIdDELETE = function locationIdDELETE (req, res, next, id) {
  Admin.locationIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationPUT = function locationPUT (req, res, next, body) {
  Admin.locationPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.maintenanceGET = function maintenanceGET (req, res, next) {
  Admin.maintenanceGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.priceForecastIdPATCH = function priceForecastIdPATCH (req, res, next, body, id) {
  Admin.priceForecastIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.priceForecastIdPOST = function priceForecastIdPOST (req, res, next, body, id) {
  Admin.priceForecastIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.profileIdDELETE = function profileIdDELETE (req, res, next, id) {
  Admin.profileIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.promotionDELETE = function promotionDELETE (req, res, next, id) {
  Admin.promotionDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
