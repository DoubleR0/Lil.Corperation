'use strict';

var utils = require('../utils/writer.js');
var CustomerClients = require('../service/CustomerClientsService');

module.exports.billingIdPOST = function billingIdPOST (req, res, next, body, id) {
  CustomerClients.billingIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emergencyIdGET = function emergencyIdGET (req, res, next, id) {
  CustomerClients.emergencyIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationGET = function locationGET (req, res, next) {
  CustomerClients.locationGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationIdGET = function locationIdGET (req, res, next, id) {
  CustomerClients.locationIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationIdPATCH = function locationIdPATCH (req, res, next, body, id) {
  CustomerClients.locationIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationIdPOST = function locationIdPOST (req, res, next, body, id) {
  CustomerClients.locationIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesIdDELETE = function messagesIdDELETE (req, res, next, id) {
  CustomerClients.messagesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesIdGET = function messagesIdGET (req, res, next, id) {
  CustomerClients.messagesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesIdPATCH = function messagesIdPATCH (req, res, next, body, id) {
  CustomerClients.messagesIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesIdPOST = function messagesIdPOST (req, res, next, body, id) {
  CustomerClients.messagesIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.priceForecastGET = function priceForecastGET (req, res, next) {
  CustomerClients.priceForecastGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.profileIdGET = function profileIdGET (req, res, next, id) {
  CustomerClients.profileIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.profileIdPATCH = function profileIdPATCH (req, res, next, body, id) {
  CustomerClients.profileIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.profileIdPOST = function profileIdPOST (req, res, next, body, id) {
  CustomerClients.profileIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.promotionGET = function promotionGET (req, res, next) {
  CustomerClients.promotionGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ratingIdGET = function ratingIdGET (req, res, next, id) {
  CustomerClients.ratingIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ratingIdPATCH = function ratingIdPATCH (req, res, next, body, id) {
  CustomerClients.ratingIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ratingIdPOST = function ratingIdPOST (req, res, next, body, id) {
  CustomerClients.ratingIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchingIdGET = function searchingIdGET (req, res, next, id) {
  CustomerClients.searchingIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
