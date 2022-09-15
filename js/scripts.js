/*!
* Start Bootstrap - Simple Sidebar v6.0.5 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

// actually works and loads json when using VSC Live Server
// let articles = null;
// async function printJSON() {
//     const response = await fetch("..\\conferences.json");
//     const json = await response.json();
//     articles = json.articles
//     return articles
// }

// let data = printJSON()

//test
let raps;
let raps2;
const content = document.querySelector('#one')
var urlspeak = '..\\conferences.json';
var urlevents = '..\\events.json';
var req = new Request(urlspeak);
var req2 = new Request(urlevents);
fetch(req)
 .then(response => response.json())
 .then((data) => {
   raps = data;
 });

 fetch(req2)
 .then(response => response.json())
 .then((data) => {
   raps2 = data;
 });


function data() {
   if(raps == undefined) {
      console.log("Data is being parsed")
   } else {
      console.log(raps)
      var table = "<article>";
      for (var i=0; i<raps.length; i++) {
          table += "<h2>"+raps[i].Speaker+"</h2>"+"<p>" +raps[i].Title+ "</p>";
      }
      content.innerHTML = table
      //clearInterval(loadData);
      generateData(raps);
      
   }
}

function speakersdata() {
    if(raps == undefined) {
       console.log("Data is being parsed")
    } else {
       console.log(raps)
       var table = "<article>";
       for (var i=0; i<raps.length; i++) {
           table += "<h2>"+raps[i].Speaker+"</h2>"+"<p>" +raps[i].Title +"<br>" +'<a href = "mailto:'+raps[i].Email+'">Send Email</a>'+"</p>";
       }

       //clearInterval(loadData);
       generateData(raps);
       return table
    }
 }

 function eventsdata() {
    if(raps2 == undefined) {
       console.log("Data is being parsed")
    } else {
       console.log(raps2)
       var table = "<article>";
       for (var i=0; i<raps2.length; i++) {
           table += "<h2>"+raps2[i].Title+"</h2>"+"<h3>" +raps2[i].Location+ "</h3>" +"<br>" +"Main Speaker: " + raps2[i].Speaker;
       }
       
       //clearInterval(loadData);
       generateData(raps2);
       return table
       
    }
 }



function generateData(raps) {
  let newData = raps.articles;
  console.log(newData);
}

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

function dashboard(){
    content.innerHTML = 
    `
    <h1 class="mt-4">Contoso Conference</h1>
    <p>
        Welcome to Contoso Conference ....
    </p>
    <p>
       
    </p>
    `
}

function events(){
    content.innerHTML=
    '<h1 class="mt-4">Contoso Events</h1>'
    +"<p>"
        +eventsdata()
    +"</p>"
    +"<p>"
       
    +"</p>"
    
}

function tracks(){
    content.innerHTML = 
    `
    <h1 class="mt-4">Contoso Tracks</h1>
    <p>
    <h2><span>Sunday, December 4</span></h2>
    8:00A - 6:00P -- Registration Open<br />1:30P- 3:30P --  The IT Services Professional Summit <br />2:00P - 6:00P -- Exhibit Set Up<br />5:00P - 6:00P -- <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="c7f287f2"></a> Sessions<br />6:30P - 7:00P -- New Members Networking Meet-Up<br />7:00P - 9:00P -- President's Reception (<span>Hors d'oeuvres &amp; drink ticket provided)</span>
    <p><a href="#diversity"></a></p>
    </p>
    <p>
       
    </p>
    `
}

function speakers(){
    content.innerHTML=
    '<h1 class="mt-4">Contoso Events</h1>'
    +'<p>'
        +speakersdata()
    +"</p>"
    +"<p>"
       
    +"</p>"
}

function status(){
    content.innerHTML = 
    `
    <h1 class="mt-4">Status</h1>
    <p>
        Registered events will be here ....
    </p>
    <p>
       Hello
    </p>
    `
}

if (window.localStorage) {
    //...
}
localStorage.setItem("myKey","some text value");
var textData = localStorage.getItem("myKey");
localStorage["myKey"] = "some text value";
var textData = localStorage["myKey"];
localStorage.myKey = "some text value";
var textData = localStorage.myKey;

// for (var i=0; i<raps.length; i++) {
//     raps[i].ID;
// }

//Old method for reading JSON file, saved just in case

// const contents = document.querySelector('#one')


// function readTextFile(callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("json");
//     rawFile.open('GET', '../conferences.json', true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     };
//     rawFile.send(null);
// }

// function init() {
//     readTextFile(function(response) {
//         var table = "<table>";
//         console.log(JSON.parse(response))
//         for (var i=0; i<response.length; i++) {
//             table += "<tr>"+response[i]+"</tr>";
//         }
//         contents.innerHTML = table
//     });
// }