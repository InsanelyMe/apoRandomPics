
// console.log("works?");


var PhotoGrid = document.getElementById("photoGrid");
var BigPhoto = document.getElementById("photoMain");
var RandomPhoto = document.getElementById("photoRandom");


var realityCollapseClickCounter = 0;

function collapseReality(){
  // console.log("collapsing reality...");
  document.body.innerHTML = "";
  document.body.className += "collapsed";
}

function showRandom(){
  // console.log("attempting to show random img");
  let randImg = document.createElement("img");
  let randURL = "https://picsum.photos/"+RandomPhoto.clientWidth+"/"+RandomPhoto.clientHeight+"/?random&t="+this.tabIndex;
  randImg.className = "randIMG";
  randImg.src = randURL;
  RandomPhoto.innerHTML = '';
  RandomPhoto.appendChild(randImg);
  randImg.onclick = () => {
    realityCollapseClickCounter++;
    // console.log("counting towards collapse: "+realityCollapseClickCounter);
    if (realityCollapseClickCounter > 8) {
      collapseReality();
    }
  }
}

function showBig(){
  // console.log("clicked on image "+this.tabIndex);
  let bigImg = document.createElement("img");
  bigImg.className = "bigIMG";
  bigImg.src = "imgs/"+this.tabIndex+".jpg";
  bigImg.tabIndex = this.tabIndex;
  BigPhoto.innerHTML = "";
  BigPhoto.appendChild(bigImg);
  bigImg.onclick = showRandom;
}


for (var i = 1; i < 7; i++) {
  let newIMG = document.createElement("img");
  newIMG.className = "dummyIMG";
  // console.log("checking for i: "+i+"?");
  newIMG.src = "imgs/"+i+".jpg";
  newIMG.tabIndex = i;
  PhotoGrid.appendChild(newIMG);
  // photos.push(newIMG);
  newIMG.onclick = showBig;
}
