window.onload = function(){
  let box = document.getElementById('main');
  let req = new XMLHttpRequest();
  req.onreadystatechange = function(){
    if(this.status == 200){
      let emergencyInfo = this.responseXML.getElementById('emergency-info');
      box.appendChild(emergencyInfo);
    }
  };
  req.open('GET', 'http://www.kurume-nct.ac.jp/');
  req.responseType = "document";
  req.send();
};
