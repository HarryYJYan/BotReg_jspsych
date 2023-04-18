var instruction = {
    type: jsPsychInstructions,
    pages: ['<p>In this experiment, you will be provided some screenshots of real social media accounts</p>',
    '<p>Some screenshots are social media accounts of real users and some are social bots.</p>', 
    '<p>When you see the screenshots, all you need to do is to <br> press <font color = "red"> <b> "F" </b> </font> key if you think it is a bot; <br> press <font color = "blue"> <b> "J" </b> </font> key if you think it is an authentic user </p>',
    '<p>Press next to contine</p>'],
    show_clickable_nav: true};

timeline.push(instruction);


var pratice_stimuli = [
  {stimulus:" stim/bb08.png", correct_response:"f"},
  {stimulus:" stim/rh01.png", correct_response:"j"},
  ];

  var fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div style="font-size:60px;">+</div>',
    choices: "NO_KEYS",
    trial_duration: function(){
      return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
    },
    data: {
      task: 'fixation'
    }
  };
  
  var test = {
    type: jsPsychImageKeyboardResponse,
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: ['f', 'j'],
    data: {
      task: 'response',
      correct_response: jsPsych.timelineVariable('correct_response')
    },
    on_finish: function(data){
      data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
    }
  };
  
  /* define test procedure */
  var practice_procedure = {
    timeline: [fixation, test],
    timeline_variables: pratice_stimuli,
    repetitions: 1,
    randomize_order: true
  };
  timeline.push(practice_procedure);
  