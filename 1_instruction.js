var jsPsych = initJsPsych({
    show_progress_bar: true,
    on_finish: function() {
      jsPsych.data.displayData();
    }
  });

var timeline = [];

var welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<h1>Welcome to the social bot recognition experiment.</h1>
<p>Press any key to begin.</p>`,
  };

  timeline.push(welcome);

  var introduction = {
    type: jsPsychInstructions,
    pages: ['<p>We are conducting a s tudy on social bot recognition and would like to invite you to participate.</p>',
    '<p>The purpose of this study is to investigate how well people can distinguish between real and fake social media accounts, known as social bots. Social bots are automated programs that mimic human behavior on social media platforms, and they can be used for various purposes, such as spreading misinformation or influencing public opinion.</p>',
    '<p>Your participation in this study is voluntary, and your responses will be anonymous and confidential. The experiment will take approximately 15-20 minutes to complete.</p>',
    '<p>If you have any questions or concerns, please contact us at harryan@iu.edu. Thank you for your participation!</p>',
    '<p>Press next to continue</p>'],
    show_clickable_nav: true
  };

  timeline.push(introduction);

  var fullscreen_trial = {
    type: jsPsychFullscreen,
    fullscreen_mode: true
  };
  
timeline.push(fullscreen_trial);

  var preload = {
    type: jsPsychPreload,
    auto_preload: true
  };

timeline.push(preload)