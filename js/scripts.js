var quest = 1;

$('#suiv').click(function(){
    $('.int' + quest).addClass('d-none');
    quest++;
    if(quest > 5)
      quest = 1;
    $('.int' + quest).removeClass('d-none');
  });

  $('#prec').click(function(){
      $('.int' + quest).addClass('d-none');
      quest--;
      if(quest < 1)
        quest = 5;
      $('.int' + quest).removeClass('d-none');
    });

function move() {
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 60) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function move1() {
  var elem = document.getElementById("myBar1");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function move2() {
  var elem = document.getElementById("myBar2");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 20) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function move3() {
  var elem = document.getElementById("myBar3");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 40) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function move4() {
  var elem = document.getElementById("myBar4");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 15) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function move5() {
  var elem = document.getElementById("myBar5");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 20) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function move6() {
  var elem = document.getElementById("myBar6");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 40) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}
