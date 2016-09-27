var list = document.getElementById('Lista'),
    add = document.getElementById('addElem');


add.addEventListener('click', function(e) {
  
  var number = list.getElementsByTagName('li').length;

  list.innerHTML += '<li>' +'item' + number + '</li>';

  console.log(list.innerHTML);

});

