document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.querySelector('.envelope-wrapper');
  
    envelope.addEventListener('click', function () {
      envelope.classList.toggle('flap');
  
      if (envelope.classList.contains('flap')) {
        envelope.classList.add('paper-out', 'envelope-open');
      } else {
        envelope.classList.remove('paper-out', 'envelope-open');
      }
    });
  
    const heartButton = document.querySelector('.heart');
    heartButton.addEventListener('click', function (event) {
      event.stopPropagation();
      console.log('Heart button clicked!');
    });
  });
  