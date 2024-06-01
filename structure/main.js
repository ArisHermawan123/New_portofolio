document.title = "Portofolio"

const textBertambah = document.querySelector('.second-title')
const imageClick = document.getElementById('image_click')
const navigation = document.getElementById('navigation')
const home = document.querySelector('.My_container_home')
const header = document.getElementById('shadow_on_of')

// how to make of validate input this web site my

const textLoad = () => {
    setTimeout(() => {
        textBertambah.textContent = "Front'end Development"
    }, 0);
    setTimeout(() => {
        textBertambah.textContent = 'Achmad Aris hermawan'
    }, 8000);
}
textLoad();
setInterval(textLoad, 16000);
const handleClickImage = (show)=> show ?
imageClick.style.display = 'flex' : 
  imageClick.style.display = 'none';

function handleHamburgerMenu(){
    if(navigation.style.display === 'flex'){
        navigation.style.display = 'none'
    }else{
        navigation.style.display = 'flex'
      }
      setTimeout(() => {
        document.location.reload();
      }, 5000);
};

window.onscroll = function () {
    if (window.scrollY > 22) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
};
function handleSubmit(){
  (function(){
    emailjs.init("iYP5WdIaUfqRj7QGw")
  })();   
  const serviceID = "service_xcchqh2";
  const templateID = "template_aezkzsb";
  const params = {
    sendername: document.querySelector('#name').value,
    senderemail: document.querySelector('#email').value,
    senderphone: document.querySelector('#phone').value,
    message: document.querySelector('#message').value
  };
  emailjs.send(serviceID, templateID, params)
  .then((res) => {
    alert('Your message has been sent, thank you for his participation')
  })
  .catch((err) => {
    alert('Fill in the following form')
  }); return false
}   
