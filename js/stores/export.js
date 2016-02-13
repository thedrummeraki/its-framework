// Functions
var Export = (function() {
  var exportdata = {};

  var update = function(){
    var str = JSON.stringify(exportdata);
    var el = document.querySelector('[its-view="export"]');
    el.innerHTML=str;
  }
  
  var init = function(data) {
    
    if(data.type !== 'submit'){
      exportdata[data.control] = data.element.value;
    }

    if (exportdata[data.control] === ''){
      delete exportdata[data.control]
    }

    if(data.control === 'exportjson'){
      update();
    }
    
  };

  return {
    init: init
  };

})();