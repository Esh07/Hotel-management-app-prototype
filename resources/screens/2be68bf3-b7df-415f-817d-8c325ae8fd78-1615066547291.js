jQuery("#simulation")
  .on("click", ".s-2be68bf3-b7df-415f-817d-8c325ae8fd78 .click", function(event, data) {
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
                    "#s-2be68bf3-b7df-415f-817d-8c325ae8fd78 #s-Button": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2be68bf3-b7df-415f-817d-8c325ae8fd78 #s-Button > .backgroundLayer > .colorLayer": {
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
                    "#s-2be68bf3-b7df-415f-817d-8c325ae8fd78 #s-Button": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-2be68bf3-b7df-415f-817d-8c325ae8fd78 #s-Button > .backgroundLayer > .colorLayer": {
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
                    "target": "screens/3a9c5124-aaf1-4743-83db-0b0d518a39f8",
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
  .on("pageload", ".s-2be68bf3-b7df-415f-817d-8c325ae8fd78 .pageload", function(event, data) {
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