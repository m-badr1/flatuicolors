function copy(myId){
    let myIn=document.querySelector("input");
    let myDv=document.querySelector(`#${myId}`);
    let mySound=document.querySelector("audio")

    let baCol=window.getComputedStyle(myDv).backgroundColor;
    myIn.type="text"
    myIn.value = baCol
    myIn.select()
    document.execCommand("copy")
    myIn.type="hidden"
    mySound.play();
}
