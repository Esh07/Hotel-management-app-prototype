jQuery("#simulation")
  .on("click", ".s-fb2de9f7-9ea3-4d94-b4d5-b88ce585570b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fb2de9f7-9ea3-4d94-b4d5-b88ce585570b #s-Button": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fb2de9f7-9ea3-4d94-b4d5-b88ce585570b #s-Button > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fb2de9f7-9ea3-4d94-b4d5-b88ce585570b #s-Button": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fb2de9f7-9ea3-4d94-b4d5-b88ce585570b #s-Button > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#027AFF"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0b1115f2-5b5c-43fe-9e93-15f114938233",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fb2de9f7-9ea3-4d94-b4d5-b88ce585570b #s-Button_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fb2de9f7-9ea3-4d94-b4d5-b88ce585570b #s-Button_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fb2de9f7-9ea3-4d94-b4d5-b88ce585570b #s-Button_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fb2de9f7-9ea3-4d94-b4d5-b88ce585570b #s-Button_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#027AFF"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-fb2de9f7-9ea3-4d94-b4d5-b88ce585570b .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_2" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemTime"
                      },"0","5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });