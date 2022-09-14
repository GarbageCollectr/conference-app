/*!
* Start Bootstrap - Simple Sidebar v6.0.5 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

// actually works and loads json when using VSC Live Server
async function printJSON() {
    const response = await fetch("..\\conferences.json");
    const json = await response.json();
    return json;
}

let data = printJSON()

const content = document.querySelector('#change')

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
    content.innerHTML = 
    `
    <h1 class="mt-4">Contoso Events</h1>
    <p>
        Here are the current planned events ....
    </p>
    <p>
       
    </p>
    `
}

function tracks(){
    content.innerHTML = 
    `
    <h1 class="mt-4">Contoso Tracks</h1>
    <p>
        Here are the available tracks of the conferences ....
    </p>
    <p>
       
    </p>
    `
}

function speakers(){
    content.innerHTML = 
    `
    <h1 class="mt-4">Contoso Speakers</h1>
    <p>
        Here are the speakers ....
    </p>
    <p>
       
    </p>
    `
}

function status(){
    content.innerHTML = 
    `
    <h1 class="mt-4">Status</h1>
    <p>
        Registered events will be here ....
    </p>
    <p>
       
    </p>
    `
}

// var reader = new FileReader();

// reader.onload = function(e){
//     var text = reader.result
// }

// reader.readAsDataURL('C:\Users\AlexW\VSCodeProj\conference-app\conferences.json')



// const pickerOpts = {
//     types: [
//       {
//         description: 'JSON',
//         accept: {
//           'conference-app/*': ['.json']
//         }
//       },
//     ],
//     excludeAcceptAllOption: true,
//     multiple: false
//   };

// // var confData = '.\\conferences.json'
// async function deserialize() {
//     fileHandle = await window.showOpenFilePicker(pickerOpts);
// const fileData = await fileHandle.getFile();
// let CD = JSON.parse(fileData);
// console.log(JSON.stringify(CD));
// }
// fileHandle.getFile()