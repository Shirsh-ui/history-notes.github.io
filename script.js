let lastShown;
let lastSecButtons;

function showSecondaryButtons(event) {
  if (lastSecButtons) document.querySelector(`#${lastSecButtons} + div`).classList.toggle('inlb');
  document.querySelector(`#${event.currentTarget.getAttribute('id')}  + div`).classList.toggle('inlb');
  lastSecButtons = event.currentTarget.getAttribute('id');
}

document.querySelectorAll('.primaryButton').forEach(function(button) {
  button.addEventListener('click', showSecondaryButtons, false);
});

document.querySelectorAll('button').forEach(function(button) {
  if (button.hasAttribute('data-target-id')) {
    let targetContent = document.getElementById(button.getAttribute('data-target-id'));
    let head = document.createElement('h2');
    head.appendChild(document.createTextNode(button.innerHTML));
    targetContent.insertBefore(head, targetContent.firstChild);
    head.classList.toggle('plantTissue');

    button.addEventListener('click', function(event) {
      if (lastShown) {
        let lastShownContent = document.getElementById(lastShown);
        if (lastShownContent.classList.contains('initial'))
         lastShownContent.classList.remove('initial'); 
      }
      document.getElementById(event.currentTarget.getAttribute('data-target-id')).classList.add('initial');
      lastShown = event.currentTarget.getAttribute('data-target-id');
    });
  }
});
