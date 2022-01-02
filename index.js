/*The loading screen*/
let LoaderPage = document.querySelector(".loader");
function myFunc(){
  $(".loader").fadeOut(3000);
}
let myVar = setTimeout(myFunc, 3000);

let ResumeCV = document.getElementById('CVbtn');
ResumeCV.onclick = function(){
  alert("Loading CV...");
}





//******************************************************************************
                         /*MENU SECTION*/
//******************************************************************************

let Menu      = document.getElementById('menu');
let CloseBtn  = document.getElementById('CloseBtn');

let HomeBtn  = document.getElementById('home');
let Abouttn  = document.getElementById('About');
let ProjectBtn  = document.getElementById('project');
let ContactBtn  = document.getElementById('contact');




  Menu.onclick = function(){
  //alert("cccc");

 document.getElementById("mySidenav").style.width = "100%";
 //document.getElementById("mySidenav").style.display = "block";
}

CloseBtn.onclick = function(){
    document.getElementById('mySidenav').style.width = "0";
}

HomeBtn.onclick = function(){
    document.getElementById('mySidenav').style.width = "0";
}

Abouttn.onclick = function(){
    document.getElementById('mySidenav').style.width = "0";
}

ProjectBtn.onclick = function(){
    document.getElementById('mySidenav').style.width = "0";
}

ContactBtn.onclick = function(){
    document.getElementById('mySidenav').style.width = "0";
}

//******************************************************************************
                         /*PROJECT SECTION*/
//******************************************************************************

let HebronProject       = document.getElementById('hebronBtn');
let MedicalProject      = document.getElementById('otaMedBtn');
let FoodPacificProject  = document.getElementById('foodBtn');

let NewsPaperAppProject  = document.getElementById('paperBtn');
let BusyBrainsAppProject  = document.getElementById('BusyBtn');
let EdogAppProject  = document.getElementById('EdogBtn');


HebronProject.onclick = function(){
 window.location = "https://mikky2000.github.io/hebrom95.6fm.github.io/home.html";
}

MedicalProject.onclick = function(){
 window.location = "https://mikky2000.github.io/medicalApp-/";
}

FoodPacificProject.onclick = function(){
 window.location = "https://mikky2000.github.io/foodpacific/";
}


NewsPaperAppProject.onclick = function(){
 window.location = "https://play.google.com/store/apps/details?id=com.nigeriadailypapers&gl=GB";
}

BusyBrainsAppProject.onclick = function(){
 window.location = "https://play.google.com/store/apps/details?id=com.app.brainsapp&gl=GB";
}

EdogAppProject.onclick = function(){
 window.location = "https://play.google.com/store/apps/details?id=com.AppEdogs.admin.EkeApp&gl=GB ";
}





//******************************************************************************
                         /*CONTACT SECTION*/
//******************************************************************************

let Email = document.getElementById('sayHelloBtn');
function sendEmail()
{
    window.location = "mailto:lehee2003@gmail.com";
}
Email.onclick = function(){
  sendEmail();
}


//******************************************************************************
                         /*SOCIAL MEDIA SECTION*/
//******************************************************************************

let FacebookBtn  =   document.getElementById('fb');
let TwitterBtn   =   document.getElementById('twitt');
let InstagramBtn =   document.getElementById('inst');
let WhatsAppBtn  =   document.getElementById('whats');
let Laptop = true;

function Facebook(){
  window.location = "fb://profile/fbID";
}

FacebookBtn.onclick = function(){
  if(Laptop)
  {
    window.location = "https://www.facebook.com/";
  }
  else{
  Facebook();
}
}

function Twitter(){
   window.location = "twitter://user?screen_name=username";
}

TwitterBtn.onclick = function(){
  if(Laptop)
  {
    window.location = "https://twitter.com/i/flow/login";
  }
  else{
  Twitter();
}

}



function Instagram(){
   window.location = "https://www.instagram.com/media/?id=id_here";
}

InstagramBtn.onclick = function(){
  if(Laptop)
  {
      window.location = "https://www.instagram.com/";
  }
  else{
     Instagram();
  }
}



function WhatsApp(){
  window.location = "https://api.whatsapp.com/send?phone=447835992380";
}

 WhatsAppBtn .onclick = function(){
   if(Laptop)
   {
        window.location = "https://api.whatsapp.com/send?phone=447835992380";
   }
   else{
      WhatsApp();
   }
 }
