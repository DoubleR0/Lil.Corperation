'use strict';

var utils = require('../utils/writer.js');
var StudentsClients = require('../service/StudentsClientsService');

module.exports.assessIdPOST = function assessIdPOST (req, res, next, body, id) {
  StudentsClients.assessIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseManagementGET = function courseManagementGET (req, res, next) {
  StudentsClients.courseManagementGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseScheduleIdGET = function courseScheduleIdGET (req, res, next, id) {
  StudentsClients.courseScheduleIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.course_ManagementIdGET = function course_ManagementIdGET (req, res, next, id) {
  StudentsClients.course_ManagementIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseonlineIdGET = function courseonlineIdGET (req, res, next, id) {
  StudentsClients.courseonlineIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.evaluationIdGET = function evaluationIdGET (req, res, next, id) {
  StudentsClients.evaluationIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsAndActivitiesGET = function eventsAndActivitiesGET (req, res, next) {
  StudentsClients.eventsAndActivitiesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsAndActivitiesIdGET = function eventsAndActivitiesIdGET (req, res, next, id) {
  StudentsClients.eventsAndActivitiesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.financeIdGET = function financeIdGET (req, res, next, id) {
  StudentsClients.financeIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.financeIdPOST = function financeIdPOST (req, res, next, body, id) {
  StudentsClients.financeIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginGET = function loginGET (req, res, next) {
  StudentsClients.loginGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerPOST = function registerPOST (req, res, next, body) {
  StudentsClients.registerPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.scheduleIntegrationIdGET = function scheduleIntegrationIdGET (req, res, next, id) {
  StudentsClients.scheduleIntegrationIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
