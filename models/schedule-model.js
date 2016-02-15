Schedule = new Mongo.Collection('schedule');
/*
Schedule.attachSchema(new SimpleSchema({

    start1:{
      type:String,
        optional:true,
      autoform:{
           placeholder:"Please enter an end time.",
        afFieldInput:{

          class:"time-start",
          type:"text",
          value:"n/a"

        }
      }
    },
    end1:{
      type:String,
        optional:true,
      autoform:{
         placeholder:"Please enter an end time.",
        afFieldInput:{
          class:"end-start",
          type:"text",
            value:"n/a"

        }
      }
    },
    start2:{
      type:String,
        optional:true,
      autoform:{
        afFieldInput:{
          class:"time-start",
          type:"text",
            value:"n/a"

        }
      }
    },
    end2:{
      type:String,
        optional:true,
      autoform:{
        afFieldInput:{
          class:"end-start",
          type:"text",
            value:"n/a"

        }
      }
    },  start3:{
        type:String,
          optional:true,
        autoform:{
          afFieldInput:{
            class:"time-start",
            type:"text",
              value:"n/a"

          }
        }
      },
      end3:{
        type:String,
          optional:true,
        autoform:{
          afFieldInput:{
            class:"end-start",
            type:"text",
              value:"n/a"

          }
        }
      },  start4:{
          type:String,
            optional:true,
          autoform:{
            afFieldInput:{
              class:"time-start",
              type:"text",
                value:"n/a"

            }
          }
        },
        end4:{
          type:String,
            optional:true,
          autoform:{
            afFieldInput:{
              class:"end-start",
              type:"text",
                value:"n/a"

            }
          }
        },
        start5:{
           type:String,
             optional:true,
           autoform:{
             afFieldInput:{
               class:"time-start",
               type:"text",
                 value:"n/a"

             }
           }
         },
         end5:{
           type:String,
             optional:true,
           autoform:{
             afFieldInput:{
               class:"end-start",
               type:"text",
                 value:"n/a"

             }
           }
         },
         start6:{
            type:String,
              optional:true,
            autoform:{
              afFieldInput:{
                class:"time-start",
                type:"text",
                  value:"n/a"

              }
            }
          },
          end6:{
            type:String,
              optional:true,
            autoform:{
              afFieldInput:{
                class:"end-start",
                type:"text",
                  value:"n/a"

              }
            }
          },
          start7:{
             type:String,
               optional:true,
             autoform:{
               afFieldInput:{
                 class:"time-start",
                 type:"text",
                   value:"n/a"

               }
             }
           },
           end7:{
             type:String,
               optional:true,
             autoform:{
                 placeholder:"Please enter an end time.",
               afFieldInput:{
                 class:"end-start",
                 type:"text",
                   value:"n/a"

               }
             }
           },

    day1:{
      type:Date,
        optional:true,
      autoform:{
          placeholder:"Day One",
            type:'pickadate'


      }
    },
    day2:{
      type:Date,
        optional:true,
      autoform:{
          placeholder:"Day two",
          type:'pickadate'
      }
    },
    day3:{
      type:Date,
        optional:true,
      autoform:{
          placeholder:"Day three",
        type:'pickadate'
      }
    },
    day4:{
      type:Date,
        optional:true,
      autoform:{
          placeholder:"Day four",
          type:'pickadate'
      }
    },
    day5:{
      type:Date,
        optional:true,
      autoform:{
          placeholder:"Day five",
        type:'pickadate'
      }
    },
    day6:{
      type:Date,
        optional:true,
      autoform:{
          placeholder:"Day six",
        type:'pickadate'
      }
    },
    day7:{
      type:Date,
        optional:true,
      autoform:{
          placeholder:"Day seven",
        type:'pickadate'
      }
    },

    user:{
      type:String,
       optional:true,
      autoform:{
           omit:true

      }


    },
    created:{
      type:Date,
      optional:true,
      autoform:{
        omit:true

      }

    },
    serId:{
      type:String,
      optional:true,
      autoform:{
        omit:true

      }

    }
}));
*/
Schedule.allow({
  insert: function(){
    return false;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return false;
  }
});
Schedule.deny({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
