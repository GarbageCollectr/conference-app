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
//     }


//test
var EvInd;
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
           table +='<img src="'+raps[i].photo+'">'+"<br>"+ "<h2>"+raps[i].Speaker+"</h2>"+"<p>" +raps[i].Title +"<br>" +'<a href = "mailto:'+raps[i].Email+'">Send Email</a>'+"</p>";
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
           table += "<h2>"+raps2[i].Title+"</h2>"+"<h3>" +raps2[i].Location+ "</h3>" +"<br>" +"Main Speaker: " + raps2[i].Speaker +"<br>"+"Available Seats: "+ raps2[i].Seats +"<br>"+ '<button class="btn btn-primary" onclick="register()">Register</button>';
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
       Here at Contoso Conference we are better than you, and we know it!
    </p>
    `
}

function events(){
    content.innerHTML=
    '<h1 class="mt-4">Contoso Events</h1>'
    +"<p>"
        +eventsdata()
    +"</p>"

    
}

function tracks(){
    content.innerHTML = 
    `
    <h1 class="mt-4">Contoso Tracks At A Glance</h1>
    <h3><em style="font-size: 15px; font-weight: normal;"><em>Times and events are preliminary and subject to change. </em>Times listed below are EST.</em></h3>
    <p>
    <h2><span>Track 1, MSSA CCAD7</span></h2>
    8:00A - 6:00P -- Registration Open<br />1:30P- 3:30P --  The IT Services Professional Summit <br />2:00P - 6:00P -- Exhibit Set Up<br />5:00P - 6:00P -- <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="c7f287f2"></a> Sessions<br />6:30P - 7:00P -- New Members Networking Meet-Up<br />7:00P - 9:00P -- President's Reception (<span>Hors d'oeuvres &amp; drink ticket provided)</span>
    <h2><span>Track 2, MSSA CCAD6</span></h2>
    9:00A - 12:00P -- Conference App Completion<br />12:00P - 1:00PM -- Lunch<br />1:30P - 3:30P -- Whiteboarding Techniques
    <h2><span>Track 3, MSSA PCA</span></h2>
    7:00A - 1:00P -- Registration Open<br /><span style="font-size: 15px;">8:15A - 9:15A -- Breakout Sessions<br /></span><span style="font-size: 15px;">9:30A - 10:45A -- Closing Speaker (Includes Breakfast Buffet) <br /></span>10:45A - 11:00A -- Closing Remarks<br />12:00P - 2:00P -- Q & A Session
    </p>
    `
}

function speakers(){
    content.innerHTML=
    '<h1 class="mt-4">Contoso Events</h1>'
    +'<p>'
        +speakersdata()
    +"</p>"
}

function status(){
    content.innerHTML = 
    `
    <h1 class="mt-4">Status</h1>
    <p>
        
    </p>
    `
}

function register(){
    content.innerHTML = 
    +'<h1 class="mt-4">Register for Conference</h1>'
    +'<form>'
    +'<label for="fname">First Name:</label>'
    +'<input type="text" id="fname" name="fname" required><br><br>'
    +'<label for="lname">Last Name:</label>'
    +'<input type="text" id="lname" name="lname" required><br><br>'
    +'<label for="conf">Choose a Conference</label><br>'
    +'<select name="conf" id="conf" required>'
    +    '<option value="">Select Below</option>'
    +    '<option value="0">'
        +raps2[0].Location
    +'</option>'
    +    '<option value="1">'
        +raps2[1].Location
    +'</option>'
    +   ' <option value="2">'
        +raps2[2].Location
    +'</option>'
    +'</select><br>'
    +'<label for="track">Chose a track:</label><br>'
    +'<input type="radio" id="track1" name="track" value="Track 1">'
    +'<label for="track1">Track 1</label><br>'
    +'<input type="radio" id="track2" name="track" value="Track 2">'
    +'<label for="track2">Track 2</label><br>'
    +'<button class="btn btn-primary" onclick="ConfSelector()">Submit</button>'
    +'</form>'
    EvInd = document.getElementById("conf").value;
    console.log(EvInd);
    return EvInd;
    
}


// if (window.localStorage) {
//     //...
// }
// localStorage.setItem("myKey","some text value");
// var textData = localStorage.getItem("myKey");
function RegLocal(){
    localStorage["regConf"] = raps2[0].Location + "|" + raps2[0].Speaker + "|" + raps2[0].Title + "|" + raps2[0].Email;
    var textData2 = localStorage["regConf"];
    console.log(textData2);
}

// localStorage["myKey"] = "some text value";
// var textData = localStorage["myKey"];
// localStorage.myKey = "some text value";
// var textData = localStorage.myKey;
EvInd = 0;
function ConfID400() {
    localStorage["regConf"] = raps2[0].Location + "|" + raps2[0].Speaker + "|" + raps2[0].Title;
    var DenverData = localStorage["regConf"];
    
}

function ConfID401() {
    localStorage["regConf"] = raps2[1].Location + "|" + raps2[1].Speaker + "|" + raps2[1].Title;
    var SeattleData = localStorage["regConf"];
}

function ConfID402() {
    localStorage["regConf"] = raps2[2].Location + "|" + raps2[2].Speaker + "|" + raps2[2].Title;
    var DallasData = localStorage["regConf"];
}

// let confValue = document.getElementById("conf").value
function ConfSelector() 
{
    switch (EvInd)
    {
        case 0:
            ConfID400();
            console.log("made it to 253");
            break;
        case 1:
            ConfID401();
            break;
        case 2:
            ConfID402();
            break;
        default:
            console.log("reached, not assigned");
            break;
    }
}


// function data() {
//     if(raps == undefined) {
//        console.log("Data is being parsed")
//     } else {
//        console.log(raps)
//        var table = "<article>";
//        for (var i=0; i<raps.length; i++) {
//            table += "<h2>"+raps[i].Speaker+"</h2>"+"<p>" +raps[i].Title+ "</p>";
//        }
//        content.innerHTML = table
//        //clearInterval(loadData);
//        generateData(raps);
       
//     }
//  }

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