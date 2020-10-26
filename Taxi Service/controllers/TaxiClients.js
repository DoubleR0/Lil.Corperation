'use strict';

var utils = require('../utils/writer.js');
var TaxiClients = require('../service/TaxiClientsService');

module.exports.billingIdPOST = function billingIdPOST (req, res, next, body, id) {
  TaxiClients.billingIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emergencyIdGET = function emergencyIdGET (req, res, next, id) {
  TaxiClients.emergencyIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationIdGET = function locationIdGET (req, res, next, id) {
  TaxiClients.locationIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationIdPATCH = function locationIdPATCH (req, res, next, body, id) {
  TaxiClients.locationIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationIdPOST = function locationIdPOST (req, res, next, body, id) {
  TaxiClients.locationIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesIdDELETE = function messagesIdDELETE (req, res, next, id) {
  TaxiClients.messagesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesIdGET = function messagesIdGET (req, res, next, id) {
  TaxiClients.messagesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesIdPATCH = function messagesIdPATCH (req, res, next, body, id) {
  TaxiClients.messagesIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesIdPOST = function messagesIdPOST (req, res, next, body, id) {
  TaxiClients.messagesIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.priceForecastGET = function priceForecastGET (req, res, next) {
  TaxiClients.priceForecastGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.profileIdGET = function profileIdGET (req, res, next, id) {
  TaxiClients.profileIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.profileIdPATCH = function profileIdPATCH (req, res, next, body, id) {
  TaxiClients.profileIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.profileIdPOST = function profileIdPOST (req, res, next, body, id) {
  TaxiClients.profileIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.promotionGET = function promotionGET (req, res, next) {
  TaxiClients.promotionGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ratingIdGET = function ratingIdGET (req, res, next, id) {
  TaxiClients.ratingIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchingIdGET = function searchingIdGET (req, res, next, id) {
  TaxiClients.searchingIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
