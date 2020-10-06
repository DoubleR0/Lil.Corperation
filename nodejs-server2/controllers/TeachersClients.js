'use strict';

var utils = require('../utils/writer.js');
var TeachersClients = require('../service/TeachersClientsService');

module.exports.assessGET = function assessGET (req, res, next) {
  TeachersClients.assessGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.assessIdGET = function assessIdGET (req, res, next, id) {
  TeachersClients.assessIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseManagementGET = function courseManagementGET (req, res, next) {
  TeachersClients.courseManagementGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseScheduleIdGET = function courseScheduleIdGET (req, res, next, id) {
  TeachersClients.courseScheduleIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.course_ManagementIdGET = function course_ManagementIdGET (req, res, next, id) {
  TeachersClients.course_ManagementIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseonlineIdDELETE = function courseonlineIdDELETE (req, res, next, id) {
  TeachersClients.courseonlineIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseonlineIdGET = function courseonlineIdGET (req, res, next, id) {
  TeachersClients.courseonlineIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseonlineIdPATCH = function courseonlineIdPATCH (req, res, next, body, id) {
  TeachersClients.courseonlineIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseonlineIdPOST = function courseonlineIdPOST (req, res, next, body, id) {
  TeachersClients.courseonlineIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.evaluationIdDELETE = function evaluationIdDELETE (req, res, next, id) {
  TeachersClients.evaluationIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.evaluationIdGET = function evaluationIdGET (req, res, next, id) {
  TeachersClients.evaluationIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.evaluationIdPOST = function evaluationIdPOST (req, res, next, body, id) {
  TeachersClients.evaluationIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsAndActivitiesGET = function eventsAndActivitiesGET (req, res, next) {
  TeachersClients.eventsAndActivitiesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsAndActivitiesIdGET = function eventsAndActivitiesIdGET (req, res, next, id) {
  TeachersClients.eventsAndActivitiesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginGET = function loginGET (req, res, next) {
  TeachersClients.loginGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerPOST = function registerPOST (req, res, next, body) {
  TeachersClients.registerPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.scheduleIntegrationIdGET = function scheduleIntegrationIdGET (req, res, next, id) {
  TeachersClients.scheduleIntegrationIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
