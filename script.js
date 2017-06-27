changeText = function(text, newText){
  var currentText = $('.dashboard').html();

    $('.dashboard').html(currentText.replace(text,newText));
};

window.setTimeout(function(){changeText('Loading Dashboard', 'EWM Dashboard')}, 3000);
// document loads too fast, so 3 second delay
