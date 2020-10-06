'use strict';


/**
 * add Assess
 *
 * body Assess Assess to add
 * id String id to search Assess
 * no response value expected for this operation
 **/
exports.assessIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
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

