const links = [
  { label: "Team 7 Index",  url: "https://cse341-team7.herokuapp.com/" },
  { label: "Alcala Project 341 -  Alcala Shop" ,  url: "https://alcala-project341.herokuapp.com/"  },
  { label: "CSE341 nodeproject -  Node Shop",  url: "https://cse341-nodeproject.herokuapp.com/"  },
  { label: "Project 341        -  Heroku Shop",  url: "https://project341.herokuapp.com/"  }
]; 



function addToIndex() {
    for (let i = 0; i < links.length; i++ ) {
      var a = document.createElement("a");
      var linkText = document.createTextNode(links[i].label);
      a.appendChild(linkText);
      a.title = "This is the " + links[i].label + " link";
      a.href = links[i].url;
      var y = document.createElement("LI");
      y.appendChild(a);
      document.getElementById("indexList").appendChild(y);
    }
}