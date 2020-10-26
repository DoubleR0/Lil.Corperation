'use strict';


/**
 * payment of user
 *
 * body PaymentItem PaymentItem to save payment
 * id String UUID to searches payment
 * no response value expected for this operation
 **/
exports.billingIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * find user profile
 *
 * id String UUID to searches profile
 * no response value expected for this operation
 **/
exports.emergencyIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * find all taxi
 *
 * returns List
 **/
exports.locationGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "releaseDate" : "2016-08-29T09:12:33.001Z",
  "latitude" : 0,
  "name" : "user#1023",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "longitude" : 6
}, {
  "releaseDate" : "2016-08-29T09:12:33.001Z",
  "latitude" : 0,
  "name" : "user#1023",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "longitude" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * find user location
 *
 * id String UUID to searches location
 * returns LocationItem
 **/
exports.locationIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "releaseDate" : "2016-08-29T09:12:33.001Z",
  "latitude" : 0,
  "name" : "user#1023",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "longitude" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update user location
 *
 * body LocationItem LocationItem to save location
 * id String UUID to update user location
 * no response value expected for this operation
 **/
exports.locationIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * place user location
 *
 * body LocationItem LocationItem to save location
 * id String UUID to place user location
 * no response value expected for this operation
 **/
exports.locationIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete user Messages
 *
 * id String UUID to delete user Messages
 * no response value expected for this operation
 **/
exports.messagesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * find user history Messages
 *
 * id String UUID to find user history Messages
 * returns List
 **/
exports.messagesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "line" : "Hello i'm in 235/4 stree 49/1",
  "name" : "user#1023",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
}, {
  "line" : "Hello i'm in 235/4 stree 49/1",
  "name" : "user#1023",
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
 * update user Messages
 *
 * body HistorychatItem HistorychatItem to save Messages
 * id String UUID to update user Messages
 * no response value expected for this operation
 **/
exports.messagesIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * created user Messages
 *
 * body HistorychatItem HistorychatItem to save Messages
 * id String UUID to created user Messages
 * no response value expected for this operation
 **/
exports.messagesIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * returns List
 **/
exports.priceForecastGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "price" : 204,
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "time" : "2000-01-23T04:56:07.000+00:00"
}, {
  "price" : 204,
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "time" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * find user profile
 *
 * id String UUID to searches profile
 * returns ProfileItem
 **/
exports.profileIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "user#1023",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "age" : 32
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update user profile
 *
 * body ProfileItem ProfileItem to save profile
 * id String UUID to update user profile
 * no response value expected for this operation
 **/
exports.profileIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * created user profile
 *
 * body ProfileItem ProfileItem to created user profile
 * id String UUID to created profile
 * no response value expected for this operation
 **/
exports.profileIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * find all promotion
 *
 * returns List
 **/
exports.promotionGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "summer cars",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
}, {
  "name" : "summer cars",
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
 * id String UUID to searches rating
 * returns RecommendationItem
 **/
exports.ratingIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "star" : 0,
  "line" : "Good",
  "name" : "user#1023",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body RecommendationItem RecommendationItem to update rating
 * id String UUID to update rating
 * no response value expected for this operation
 **/
exports.ratingIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * body RecommendationItem RecommendationItem to created rating
 * id String UUID to created rating
 * no response value expected for this operation
 **/
exports.ratingIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id String UUID to searches taxi
 * returns LocationItem
 **/
exports.searchingIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "releaseDate" : "2016-08-29T09:12:33.001Z",
  "latitude" : 0,
  "name" : "user#1023",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "longitude" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

