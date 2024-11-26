const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        switch (e.target.id) {
            case 'white':
                body.style.backgroundColor = e.target.id;

            case 'violet':
                body.style.backgroundColor = e.target.id;

            case 'indigo':
                body.style.backgroundColor = e.target.id;

            case 'blue':
                body.style.backgroundColor = e.target.id;

            case 'green':
                body.style.backgroundColor = e.target.id;

            case 'yellow':
                body.style.backgroundColor = e.target.id;

            case 'orange':
                body.style.backgroundColor = e.target.id;

            case 'red':
                body.style.backgroundColor = e.target.id;

                // if (e.target.id === 'white') {
                //     body.style.backgroundColor = e.target.id;
                // }
                // if (e.target.id === 'violet') {
                //     body.style.backgroundColor = e.target.id;
                // }
                // if (e.target.id === 'indigo') {
                //     body.style.backgroundColor = e.target.id;
                // }
                // if (e.target.id === 'blue') {
                //     body.style.backgroundColor = e.target.id;
                // }
                // if (e.target.id === 'green') {
                //     body.style.backgroundColor = e.target.id;
                // }
                // if (e.target.id === 'yellow') {
                //     body.style.backgroundColor = e.target.id;
                // }
                // if (e.target.id === 'orange') {
                //     body.style.backgroundColor = e.target.id;
                // }
                // if (e.target.id === 'red') {
                //     body.style.backgroundColor = e.target.id;
        }
    });
});