// Functions
var Export = (function() {
  var exportdata = {};

  var update = function(){
    var str = json(exportdata);
    var el = document.querySelector('[its-view="data-export"]');
    el.innerHTML=str;
  }

  var json = function(obj){
    return JSON.stringify(obj);
  };
  
  var init = function(data) {
    
    if(data.control){
      exportdata[data.control] = data.element.value;
      update();
    }
    
  };

  return {
    init: init
  };

})();