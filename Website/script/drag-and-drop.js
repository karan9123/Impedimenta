let dragContainer = document.getElementsByClassName("drag-container")[0];
let uploadColor1 = document.getElementsByClassName("upload-color1")[0];
let uploadColor2 = document.getElementsByClassName("upload-color2")[0];

let directoryContainer = document.getElementsByClassName('directory-container')[0];

let file;

dragContainer.addEventListener("dragover", (event)=>{
    event.preventDefault();
    dragContainer.classList.add("active");

    uploadColor1.style.fill = "#f2545b";
    uploadColor2.style.fill = "#f2545b";
});

dragContainer.addEventListener("dragleave", ()=>{
    dragContainer.classList.remove("active");

    uploadColor1.style.fill = "#19323c"
    uploadColor2.style.fill = "#19323c"
});

dragContainer.addEventListener("drop", (event)=>{
    event.preventDefault();

    uploadColor1.style.fill = "#19323c"
    uploadColor2.style.fill = "#19323c"

    file = event.dataTransfer.files;

    for(let i = 0; i < file.length; i++)
    {
        let fileType = file[i].type;

        let validImageExtentions = ["image/jpeg", "image/jpg", "image/png"];
        let validTextExtentions = ["text/plain"];
    
        let divTag = '<div class="uploaded-file">'
        let pTag = '<p>' + file[i].name + '</p>'
        let closingTag = '</div>'

        if(validImageExtentions.includes(fileType))
        {
            let imgSVG =
            '<svg class="file-ext" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                '<g>' +
                    '<path d="m413 77.48c-1.2109-0.30859-2.3945-0.48047-3.4648-0.48047h-199.57c-7.7188 0-13.961 6.2578-13.961 13.977v378.05c0 7.7617 6.2852 13.977 14.035 13.977h279.93c7.7422 0 14.035-6.2656 14.035-13.992v-297.56c0-1.0586-0.17188-2.2383-0.48047-3.4492h-59.02c-17.418 0-31.5-14.078-31.5-31.5zm7 3.2422c0.53906 0.39453 1.0312 0.80859 1.457 1.2344l77.586 77.586c0.42969 0.42969 0.84375 0.91797 1.2383 1.457h-55.781c-13.555 0-24.5-10.945-24.5-24.5zm-175 280.52v-116.22c0-3.8789 3.1328-7.0234 6.9883-7.0234h196.02c3.8594 0 6.9883 3.0742 6.9883 7.0234v107.5l-67.254-85.188c-1.3867-1.7617-4.0508-1.7773-5.4648-0.035156l-62.398 76.957-30.137-31.422c-1.3906-1.7617-4.0508-1.7773-5.4648-0.035156zm0 11.105v19.629c0 3.9492 3.1289 7.0234 6.9883 7.0234h24.512c0-0.77344 0.25391-1.5547 0.78125-2.2031l38.18-47.086-28.461-29.109-41.859 51.586c-0.046875 0.054688-0.09375 0.10938-0.14062 0.16016zm210-8.543v28.172c0 3.8789-3.1328 7.0234-6.9883 7.0234h-163.5l100.46-123.9 69.898 88.539c0.042969 0.058594 0.089844 0.11328 0.13672 0.16406zm-280-272.84c0-19.312 15.668-34.969 35.039-34.969h202.96c7.7305 0 18.461 4.4648 23.934 9.9375l78.125 78.125c5.4883 5.4883 9.9375 16.16 9.9375 23.875v301.06c0 19.328-15.719 35-35 35h-280c-19.328 0-35-15.684-35-34.969zm63 154.05c0-7.7461 6.2266-14.023 14.012-14.023h195.98c7.7383 0 14.012 6.2266 14.012 14.023v146.95c0 7.7461-6.2266 14.023-14.012 14.023h-195.98c-7.7383 0-14.012-6.2266-14.012-14.023zm49 48.977c11.598 0 21-9.4023 21-21s-9.4023-21-21-21-21 9.4023-21 21 9.4023 21 21 21zm0-7c7.7305 0 14-6.2695 14-14s-6.2695-14-14-14-14 6.2695-14 14 6.2695 14 14 14z" fill-rule="evenodd"/>' +
                '</g>' +
            '</svg>';;
    
            let addedHTML = divTag + pTag + imgSVG + closingTag;
    
            directoryContainer.innerHTML += addedHTML;
        }
        else if(validTextExtentions.includes(fileType))
        {
            let txtSVG = 
            '<svg class="file-ext" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                '<g>' +
                    '<path d="m413 77.48c-1.2109-0.30859-2.3945-0.48047-3.4648-0.48047h-199.57c-7.7188 0-13.961 6.2578-13.961 13.977v378.05c0 7.7617 6.2852 13.977 14.035 13.977h279.93c7.7422 0 14.035-6.2656 14.035-13.992v-297.56c0-1.0586-0.17188-2.2383-0.48047-3.4492h-59.02c-17.418 0-31.5-14.078-31.5-31.5zm7 3.2422c0.53906 0.39453 1.0312 0.80859 1.457 1.2344l77.586 77.586c0.42969 0.42969 0.84375 0.91797 1.2383 1.457h-55.781c-13.555 0-24.5-10.945-24.5-24.5zm-245 10.246c0-19.312 15.668-34.969 35.039-34.969h202.96c7.7305 0 18.461 4.4648 23.934 9.9375l78.125 78.125c5.4883 5.4883 9.9375 16.16 9.9375 23.875v301.06c0 19.328-15.719 35-35 35h-280c-19.328 0-35-15.684-35-34.969zm63 290.53c0-1.9336 1.5938-3.5 3.5-3.5h119c1.9336 0 3.5 1.625 3.5 3.5 0 1.9336-1.5938 3.5-3.5 3.5h-119c-1.9336 0-3.5-1.625-3.5-3.5zm0-42c0-1.9336 1.5508-3.5 3.5195-3.5h216.96c1.9453 0 3.5195 1.625 3.5195 3.5 0 1.9336-1.5508 3.5-3.5195 3.5h-216.96c-1.9453 0-3.5195-1.625-3.5195-3.5zm0-42c0-1.9336 1.5508-3.5 3.5195-3.5h216.96c1.9453 0 3.5195 1.625 3.5195 3.5 0 1.9336-1.5508 3.5-3.5195 3.5h-216.96c-1.9453 0-3.5195-1.625-3.5195-3.5zm0-42c0-1.9336 1.5508-3.5 3.5195-3.5h216.96c1.9453 0 3.5195 1.625 3.5195 3.5 0 1.9336-1.5508 3.5-3.5195 3.5h-216.96c-1.9453 0-3.5195-1.625-3.5195-3.5z" fill-rule="evenodd"/>' +
                '</g>' +
            '</svg>';
    
            let addedHTML = divTag + pTag + txtSVG + closingTag;
    
            directoryContainer.innerHTML += addedHTML;
        }
        else{
            console.log("Invalid Boi")       
        }
    }

    dragContainer.classList.remove("active");
});

function CreateFileElements(files)
{
    for(let i = 0; i < files.length; i++)
    {

    }
}

function GetStorage()
{
    let values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    
    while(i--)
    {
        values.push(localStorage.getItem(keys[i]));
    }

    return values
}
