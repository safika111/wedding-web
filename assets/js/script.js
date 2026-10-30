// AOS Init
AOS.init();

var tempmusic = '';
var music = document.querySelector('.music');

if (tempmusic) {
    music.src = tempmusic;
}

// Tombol Buka Undangan / Pintu Masuk
function mulai() {
    window.scrollTo(0, 0);

    var soundDoor = document.querySelector('.sound-door');
    if (soundDoor) {
        soundDoor.play();
    }

    var doorSection = $('#door-section');
    var doors = document.querySelectorAll('.door');

    doors.forEach(function (door, index) {
        var direction = (index === 0) ? -1 : 1;
        door.style.transform = 'rotateY(' + (70 * direction) + 'deg)';
    });

    setTimeout(function () {
        if (music) {
            music.play();
        }
        doorSection.css('transform', 'scale(6)');
    }, 600);

    setTimeout(function () {
        doorSection.css('opacity', 0);
        $('body').removeClass('overflow-hidden');
        $('body').addClass('transition');
        doorSection.css('display', 'none');
    }, 2000);
}

// Tombol Putar/Jeda Musik
var isPlaying = false;

function toggleMusic(event) {
    event.preventDefault();

    var musicButton = document.getElementById('music-button');

    if (!music || !musicButton) return;

    if (isPlaying) {
        music.pause();
        musicButton.classList.remove('rotate');
    } else {
        music.play();
        musicButton.classList.add('rotate');
    }

    isPlaying = !isPlaying;
}

// Hitung Mundur Pernikahan (Countdown)
var countdownDate = new Date("Feb 10, 2027 20:01:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var countdownElement = document.getElementById('countdown-wedding');
    if (countdownElement) {
        countdownElement.innerHTML = `
            <div class="col-lg-1 col-3">
                <div class="text-center p-2 rounded text-light"><h5>${days}</h5> Hari</div>
            </div>
            <div class="col-lg-1 col-3">
                <div class="text-center p-2 rounded text-light"><h5>${hours}</h5> Jam</div>
            </div>
            <div class="col-lg-1 col-3">
                <div class="text-center p-2 rounded text-light"><h5>${minutes}</h5> Menit</div>
            </div>
            <div class="col-lg-1 col-3">
                <div class="text-center p-2 rounded text-light"><h5>${seconds}</h5> Detik</div>
            </div>
        `;
    }
}, 1000);