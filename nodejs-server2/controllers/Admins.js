'use strict';

var utils = require('../utils/writer.js');
var Admins = require('../service/AdminsService');

module.exports.assessGET = function assessGET (req, res, next) {
  Admins.assessGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.assessIdDELETE = function assessIdDELETE (req, res, next, id) {
  Admins.assessIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.assessIdGET = function assessIdGET (req, res, next, id) {
  Admins.assessIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseManagementGET = function courseManagementGET (req, res, next) {
  Admins.courseManagementGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseScheduleGET = function courseScheduleGET (req, res, next) {
  Admins.courseScheduleGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseScheduleIdDELETE = function courseScheduleIdDELETE (req, res, next, id) {
  Admins.courseScheduleIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseScheduleIdGET = function courseScheduleIdGET (req, res, next, id) {
  Admins.courseScheduleIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseScheduleIdPATCH = function courseScheduleIdPATCH (req, res, next, body, id) {
  Admins.courseScheduleIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseScheduleIdPOST = function courseScheduleIdPOST (req, res, next, body, id) {
  Admins.courseScheduleIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.course_ManagementIdDELETE = function course_ManagementIdDELETE (req, res, next, id) {
  Admins.course_ManagementIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.course_ManagementIdGET = function course_ManagementIdGET (req, res, next, id) {
  Admins.course_ManagementIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.course_ManagementIdPATCH = function course_ManagementIdPATCH (req, res, next, body, id) {
  Admins.course_ManagementIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.course_ManagementIdPOST = function course_ManagementIdPOST (req, res, next, body, id) {
  Admins.course_ManagementIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseonlineIdDELETE = function courseonlineIdDELETE (req, res, next, id) {
  Admins.courseonlineIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseonlineIdPATCH = function courseonlineIdPATCH (req, res, next, body, id) {
  Admins.courseonlineIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.courseonlineIdPOST = function courseonlineIdPOST (req, res, next, body, id) {
  Admins.courseonlineIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsAndActivitiesGET = function eventsAndActivitiesGET (req, res, next) {
  Admins.eventsAndActivitiesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsAndActivitiesIdDELETE = function eventsAndActivitiesIdDELETE (req, res, next, id) {
  Admins.eventsAndActivitiesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsAndActivitiesIdGET = function eventsAndActivitiesIdGET (req, res, next, id) {
  Admins.eventsAndActivitiesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsAndActivitiesIdPATCH = function eventsAndActivitiesIdPATCH (req, res, next, body, id) {
  Admins.eventsAndActivitiesIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsAndActivitiesIdPOST = function eventsAndActivitiesIdPOST (req, res, next, body, id) {
  Admins.eventsAndActivitiesIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.financeGET = function financeGET (req, res, next) {
  Admins.financeGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.financeIdGET = function financeIdGET (req, res, next, id) {
  Admins.financeIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.financeIdPOST = function financeIdPOST (req, res, next, body, id) {
  Admins.financeIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginGET = function loginGET (req, res, next) {
  Admins.loginGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.scheduleIntegrationIdDELETE = function scheduleIntegrationIdDELETE (req, res, next, id) {
  Admins.scheduleIntegrationIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.scheduleIntegrationIdGET = function scheduleIntegrationIdGET (req, res, next, id) {
  Admins.scheduleIntegrationIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.scheduleIntegrationIdPOST = function scheduleIntegrationIdPOST (req, res, next, body, id) {
  Admins.scheduleIntegrationIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
