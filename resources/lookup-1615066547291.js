(function(window, undefined) {
  var dictionary = {
    "fb2de9f7-9ea3-4d94-b4d5-b88ce585570b": "Home Page",
    "377c4397-6a65-4eac-b58b-3a7075804273": "Guest Information",
    "0b1115f2-5b5c-43fe-9e93-15f114938233": "Register",
    "2a389a48-7f93-4f9d-bf32-7db1b4066482": "Book - Confirmation",
    "1011d18b-73b4-48ba-8787-653041613177": "Payment Information",
    "3a9c5124-aaf1-4743-83db-0b0d518a39f8": "Booking",
    "2be68bf3-b7df-415f-817d-8c325ae8fd78": "forgot-password",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Sign in",
    "2839030a-00c2-4a76-8859-48c3e2489366": "Room Summery",
    "e33a8940-b859-4285-8bdd-f16a65d96d0c": "New password",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default",
    "9e37e4e8-b4f9-4dba-8a7a-238032fb6a76": "Homepage"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);