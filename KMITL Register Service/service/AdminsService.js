'use strict';


/**
 * get all Assess
 *
 * returns List
 **/
exports.assessGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "comments" : "Teacher is so good at understanding student's problem.",
  "id" : 0
}, {
  "comments" : "Teacher is so good at understanding student's problem.",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete Assess
 *
 * id Object id to search Assess
 * no response value expected for this operation
 **/
exports.assessIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get Assess using id
 *
 * id String 
 * returns Assess
 **/
exports.assessIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : "Teacher is so good at understanding student's problem.",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all course
 *
 * returns List
 **/
exports.courseManagementGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "IT-Y2-T1",
  "id" : 0
}, {
  "name" : "IT-Y2-T1",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all schedule
 *
 * returns List
 **/
exports.courseScheduleGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "subject" : "subject",
  "id" : 0
}, {
  "subject" : "subject",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete schedule
 *
 * id Object id to searches schedule
 * no response value expected for this operation
 **/
exports.courseScheduleIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get specific schedule using id
 *
 * id Object 
 * returns Schedule
 **/
exports.courseScheduleIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "subject" : "subject",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update schedule
 *
 * body Schedule schedule to be updated
 * id String id of Schedule to search
 * no response value expected for this operation
 **/
exports.courseScheduleIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * add schedule
 *
 * body Schedule schedule to add
 * id String id to search schedule
 * no response value expected for this operation
 **/
exports.courseScheduleIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete course
 *
 * id String id to searches course
 * no response value expected for this operation
 **/
exports.course_ManagementIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get specific course using id
 *
 * id String 
 * returns Course
 **/
exports.course_ManagementIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "IT-Y2-T1",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * fdsf
 *
 * body Course course to be updated
 * id String id of Course to search
 * no response value expected for this operation
 **/
exports.course_ManagementIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * add course
 *
 * body Course course to add
 * id String id to search course
 * no response value expected for this operation
 **/
exports.course_ManagementIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete courseonline
 *
 * id String id to searches courseonline
 * no response value expected for this operation
 **/
exports.courseonlineIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * update courseonline
 *
 * body Course courseonline to be updated
 * id String id of courseonline to search
 * no response value expected for this operation
 **/
exports.courseonlineIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * add Course
 *
 * body Course Course to add courseonline
 * id String id to add courseonline
 * no response value expected for this operation
 **/
exports.courseonlineIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get all EventsAndActivities
 *
 * returns List
 **/
exports.eventsAndActivitiesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Kaesad",
  "id" : 0
}, {
  "name" : "Kaesad",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete EventsAndActivities
 *
 * id Object id to searches EventsAndActivities
 * no response value expected for this operation
 **/
exports.eventsAndActivitiesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get EventsAndActivities using id
 *
 * id String 
 * returns EventsAndActivities
 **/
exports.eventsAndActivitiesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Kaesad",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update EventsAndActivities
 *
 * body EventsAndActivities EventsAndActivities to be updated
 * id String id of EventsAndActivities to search
 * no response value expected for this operation
 **/
exports.eventsAndActivitiesIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * add EventsAndActivities
 *
 * body EventsAndActivities EventsAndActivities to add
 * id String id to search EventsAndActivities
 * no response value expected for this operation
 **/
exports.eventsAndActivitiesIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get all Finance
 *
 * returns List
 **/
exports.financeGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : 32000.0,
  "id" : 0
}, {
  "amount" : 32000.0,
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get specific Finance using id
 *
 * id Object 
 * returns Finance
 **/
exports.financeIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : 32000.0,
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * add Finance
 *
 * body Finance Finance to add
 * id String id to search Finance
 * no response value expected for this operation
 **/
exports.financeIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get all Profile
 *
 * returns List
 **/
exports.loginGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Non",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}, {
  "name" : "Non",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete ScheduleIntegration
 *
 * id String id to searches ScheduleIntegration
 * no response value expected for this operation
 **/
exports.scheduleIntegrationIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get all scheduleIntegration
 *
 * id String id to add ScheduleIntegration
 * returns List
 **/
exports.scheduleIntegrationIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "subject" : "subject",
  "id" : 0
}, {
  "subject" : "subject",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * add ScheduleIntegration
 *
 * body Schedule ScheduleIntegration to add
 * id String id to add ScheduleIntegration
 * no response value expected for this operation
 **/
exports.scheduleIntegrationIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

