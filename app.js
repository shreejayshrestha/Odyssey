
  var player1, player2, player3, player4, player5, context, volume1, volume2, volume3, volume4, volume5;
  var delay2, delay3, delay4, delay5, delayAmount2, delayAmount3, delayAmount4, delayAmount5;
  var playing = 0;
  var filter;
  var AudioContext = window.AudioContext || window.webkitAudioContext;    
  context = new AudioContext();
    
  // Loading sounds 
  function loadSound(soundfile, soundnode) {
  var request = new XMLHttpRequest();
  request.open('GET', soundfile, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      soundnode.buffer = buffer;
      soundnode.start();
    }, onError);
  }
  request.send();
  
  }

  function onError(){
  console.log("The file could not be loaded");
  }
   // Creating buttons for playing the sounds
  document.querySelector("#button1").addEventListener('click', function() {
    player1 = context.createBufferSource();
    loadSound("Master.wav", player1);
    volume1 = context.createGain();
    player1.connect(volume1);
    volume1.connect(context.destination);
          
  });

  document.querySelector("#button2").addEventListener('click', function() {
    player2 = context.createBufferSource();
    loadSound("dog_barking.wav", player2)
    volume2 = context.createGain();
    player2.connect(volume2);
    volume2.connect(context.destination);
         
    // create a delay1 effect node
    delay2 = context.createDelay();
    delay2.delayTime.value = 0.3; // lenght of the delay1

    // create a gain1 effect node
    delayAmount2 = context.createGain();
    delayAmount2.gain.value = 0.6; // amount of the effect

    player2.connect(delay2);
    player2.connect(context.destination);    
    delay2.connect(delayAmount2);
    delayAmount2.connect(delay2);
    delayAmount2.connect(context.destination);
  });

  document.querySelector("#button3").addEventListener('click', function() {
    player3 = context.createBufferSource();
    loadSound("cat_screaming.wav", player3);
    volume3 = context.createGain();
    player3.connect(volume3);
    volume3.connect(context.destination);
    
    // create a delay1 effect node
    delay3 = context.createDelay();
    delay3.delayTime.value = 0.8; // lenght of the delay1

    // create a gain1 effect node
    delayAmount3 = context.createGain();
    delayAmount3.gain.value = 0.6; // amount of the effect

    player3.connect(delay3);
    player3.connect(context.destination);    
    delay3.connect(delayAmount3);
    delayAmount3.connect(delay3);
    delayAmount3.connect(context.destination);
  });

  document.querySelector("#button4").addEventListener('click', function() {
    player4 = context.createBufferSource();
    loadSound("chicken.wav", player4);
    volume4 = context.createGain();
    volume4.gain.value = 0.3;

    player4.connect(volume4);
    volume4.connect(context.destination);
    // create a delay1 effect node
    delay4 = context.createDelay();
    delay4.delayTime.value = 0.8; // lenght of the delay1

    // create a gain1 effect node
    delayAmount4 = context.createGain();
    delayAmount4.gain.value = 0.2; // amount of the effect

    player4.connect(delay4);
    player4.connect(context.destination);    
    delay4.connect(delayAmount4);
    delayAmount4.connect(delay4);
    delayAmount4.connect(context.destination);
  });

  document.querySelector("#button5").addEventListener('click', function() {
    player5 = context.createBufferSource();
    loadSound("elephant.wav", player5);
    //player5.loop = true;
    volume5 = context.createGain();
    volume5.gain.value = 0.3;
    player5.connect(volume5);
    volume5.connect(context.destination);
    
    // create a delay1 effect node
    delay5 = context.createDelay();
    delay5.delayTime.value = 0.8; // lenght of the delay1

    // create a gain1 effect node
    delayAmount5 = context.createGain();
    delayAmount5.gain.value = 0.2; // amount of the effect

    player5.connect(delay5);
    player5.connect(context.destination);    
    delay5.connect(delayAmount5);
    delayAmount5.connect(delay5);
    delayAmount5.connect(context.destination);
  });

  document.querySelector("#button6").addEventListener('click', function() {
    player1.stop();
    player2.stop();
    player3.stop();
    player4.stop();
    player5.stop();
    //soundnode.stop();
  });
