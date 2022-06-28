
let slideNr =0
const data = [
    {
      title : "Pink lake",
      src: "1.webp",
    },
    {
      title : "Single Island",
      src: "2.webp",
    },
    {
      title : "Forest lake",
      src: "3.webp",
    },
  ]
  
  function changeHTMLinfo( slideNr ){
    const title = data[slideNr].title
    const titleDOM = document.querySelector("h2")
    titleDOM.innerHTML = title
    const image = data[slideNr].src
    const imageDOM = document.querySelector("img")
    imageDOM.src = "img/"+image
}

// changeHTMLInfo(1)

const left = document.querySelector('.lefftArr')
left.onclick = function(){
    console.log(slideNr)
    if (slideNr > 0)
{
slideNr = slideNr-1;
}
else slideNr = 2;
changeHTMLinfo(slideNr);
console.log(slideNr)
}


const right = document.querySelector('.rightArr')
right.onclick = function(){
    console.log(slideNr)  
if (slideNr < 2){
    slideNr = slideNr+1;
}
else slideNr = 0;
changeHTMLinfo(slideNr);
console.log(slideNr)
}

