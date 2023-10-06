window.addEventListener('load', event => {
  swal("Yang bilang stress iri tuh😂");
})

const stickyTop = document.querySelector('.sticky-top');
const offcanvas = document.querySelector('.offcanvas')

offcanvas.addEventListener('show.bs.offcanvas', function(){
stickTop.style.overflow = 'visible'
})
offcanvas.addEventListener('hidden.bs.offcanvas', function(){
stickTop.style.overflow ='hidden'
})

simplyCountdown('.simply-countdown', {
    year: 2024, // required
    month: 9, // required
    day: 4, // required
    hours: 10, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
       days: { singular: 'hari', plural: 'hari' },
       hours: { singular: 'jam', plural: 'jam' },
       minutes: { singular: 'menit', plural: 'menit' },
       seconds: { singular: 'detik', plural: 'detik' }
            },
       
});

const rootElement = document.querySelector(":root")
const audioIconWrapper = document.querySelector(".audio-icon-wrapper")
const song = document.querySelector('#song')
const audioIcon = document.querySelector('.audio-icon-wrapper i')
let isPlaying = false 

function disableScroll(){
  scrollTop = window.pageYOffset || document.documentElement.scrollTop
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

  window.onscroll = function (){
    window.scrollTo(scrollTop, scrollLeft)
  }
  
  rootElement.style.scrollBehavior = 'auto'
}

 function enableScroll () {
    window.onscroll = function () { }
    rootElement.style.scrollBehavior = 'smooth'
   //localStorage.setItem('opened', 'true')
   playAudio()
  }      
    
  function playAudio() {
    song.volume = 0.1
    audioIconWrapper.style.display = 'flex'
    song.play()
    isPlaying = true
  }
  
  audioIconWrapper.onclick = function() {
    if(isPlaying) {
      song.pause()
      audioIcon.classList.remove('bi-disc')
      audioIcon.classList.add('bi-pause-circle')
    }else {
      song.play()
      audioIcon.classList.add('bi-disc')
      audioIcon.classList.remove('bi-pause-circle')
    }
    
    isPlaying = !isPlaying
  }
    
    disableScroll()

window.addEventListener("load", function () {
      const form = document.getElementById('my-form');
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
          method: 'POST',
          body: data,
        })
          .then(() => {
            swal({
              title: "Konfirmasi Kehadiran Terkirim",
              text: "Terimakasih untuk datang di acara pernikahan kami😊",
              icon: "success",
            });
          }).catch((e)=> {
            swal({
              title: "Konfirmasi Kehadiran Tidak Terkirim",
              text: "Harap isi kembali nama anda di form Konfirmasi kehadiran",
              icon: "error",
            })
          })
      });
    });

const urlParams = new URLSearchParams(window.location.search)
const nama = urlParams.get('n') || ''

const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i'
const namaContainer = document.querySelector('.hero h4 span')
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ',')

document.querySelector('#nama').value = nama