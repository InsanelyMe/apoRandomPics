var PhotoGrid = document.getElementById("photoGrid");
var BigPhoto = document.getElementById("photoMain");
var RandomPhoto = document.getElementById("photoRandom");

var realityCollapseClickCounter = 0;

function collapseReality(){
  document.body.innerHTML = "";
  document.body.className += "collapsed";
}

function showRandom(){
  let randImg = document.createElement("img");
  let randURL = "https://picsum.photos/"+RandomPhoto.clientWidth+"/"+RandomPhoto.clientHeight+"/?random&t="+Date.now();
  randImg.className = "randIMG";
  randImg.src = randURL;
  RandomPhoto.innerHTML = '';
  RandomPhoto.appendChild(randImg);
  realityCollapseClickCounter++;
  randImg.onclick = () => {
    realityCollapseClickCounter += 3;
    if (realityCollapseClickCounter > 8) {
      collapseReality();
    }
  }
  setTimeout(collapseReality, 30000);
}

function showBig(){
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
  newIMG.src = "imgs/"+i+".jpg";
  newIMG.tabIndex = i;
  PhotoGrid.appendChild(newIMG);
  newIMG.onclick = showBig;
}
