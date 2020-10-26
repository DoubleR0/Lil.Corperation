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
 * get Course
 *
 * id String id to get Course
 * returns List
 **/
exports.courseonlineIdGET = function(id) {
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
 * delete Score
 *
 * id Object id to search Score
 * no response value expected for this operation
 **/
exports.evaluationIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get Score using id
 *
 * id String 
 * returns Score
 **/
exports.evaluationIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "score" : "A",
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
 * add Score
 *
 * body Score Score to add
 * id String id to search Score
 * no response value expected for this operation
 **/
exports.evaluationIdPOST = function(body,id) {
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
 * add course
 *
 * body Profile add Profile
 * no response value expected for this operation
 **/
exports.registerPOST = function(body) {
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

