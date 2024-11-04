// holizontal product display

const scrollcontainer = document.querySelectorAll(".product")
for (const i of scrollcontainer)  {
    i.addEventListener("wheel",(e)=>{
        e.preventDefault();
        i.scrollLeft += e.deltaY;
    })
}
 