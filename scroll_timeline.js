
function add_black_overlay() {

  let elem_bg = document.querySelector('#ele_bg')
  elem_bg.className = 'bground_blur'

  let elem_overlay = document.querySelector('#ele_overlay')
  elem_overlay.className = 'black_overlay'


}



function not_show_start_your_explore_text() {

  let elem_start_your_order_text = document.querySelector('#ele_start_your_explore_text')
  elem_start_your_order_text.className = 'not_show_start_your_explore_text'


}


var clickCounter = 0;
var nodes = document.querySelectorAll('#line');
var first = nodes[0];
var second = nodes[1];
var third = nodes[2];
var fourth = nodes[3];



window.addEventListener('click', () => {
  clickCounter++;
  if (clickCounter == 1) {
    add_black_overlay()
    not_show_start_your_explore_text()
  }
  if (clickCounter == 2) {
    first.className = 'line_text'
  }
  if (clickCounter == 3) {
    first.className = 'moved_text'
    second.className = 'line_text'
  }
  if (clickCounter == 4) {
    second.className = 'moved_text'
    third.className = 'line_text'
  }

  if (clickCounter == 5) {
    third.className = 'moved_text'
    fourth.className = 'line_text'
  }
});

