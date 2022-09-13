/*!
* Start Bootstrap - Simple Sidebar v6.0.5 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

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

function events(){
    content.innerHTML = `<p> test </p>`
}

function tracks(){
    content.innerHTML = `<p> test </p>`
}

function speakers(){
    content.innerHTML = `<p> test </p>`
}

function status(){
    content.innerHTML = `<p> test </p>`
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