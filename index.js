const input = document.getElementById('input');

function addingEventListener() {
    input.addEventListener('click', function(e) { 
        return alert('I was clicked');
    });
}

addingEventListener();
