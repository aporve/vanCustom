(function injectJS() {
    try {        
        var iFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];         
        var modularBars = document.createElement('script');
        modularBars.type = 'text/javascript';
        modularBars.src = 'https://aporve.github.io/EventHandler/addFrame.js';
        iFrameHead.appendChild(modularBars);
        injectDynamicCssToParent();
        injectDynamicCssToChild();
    } catch(e) {
        console.error("failed while inserting to iFrame", e);
    }
})();


function injectDynamicCssToChild() {
    var ymFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];  
    var modularStyles = document.createElement('style');
    modularStyles.type = 'text/css';

    var css = '#chatBoxMainContainer.message-icons.live-chat { margin: 3rem 0 0 3rem; }';
    if (modularStyles.styleSheet) {
      modularStyles.styleSheet.cssText = css;
    } else {
      modularStyles.appendChild(document.createTextNode(css));
    }
    ymFrameHead.appendChild(modularStyles);
}

function injectDynamicCssToParent() {
    var parentCssHead = document.head || document.getElementsByTagName('head')[0];
    var parentStyles = document.createElement('style');
    parentStyles.type = 'text/css';

    var parentCssStyles = '#ymFrameHolder { width: 100%; } @media only screen and (min-width: 768px) { #ymFrameHolder { width: 440px; }}';
    if (parentStyles.styleSheet) {
      parentStyles.styleSheet.cssText = parentCssStyles;
    } else {
      parentStyles.appendChild(document.createTextNode(parentCssStyles));
    }
    parentCssHead.appendChild(parentStyles);
}

window.addEventListener('message', function(eventData) {
    console.log('onload---->')
    console.log(eventData);
    try{

        console.error( 'Data----------------->>>',eventData.data);
        if(eventData.data == 'VEMO') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "VEMO",
                     data: ""
                    }
                }
           }, '*');
           return;
        }


        if(eventData.data == 'ACTIVE') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "ACTIVE",
                     data: ""
                    }
                }
           }, '*');
           return;
        }

        if(eventData.data == 'ASSET') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "ASSET",
                     data: ""
                    }
                }
           }, '*');
           return;
        }

        if(eventData.data == 'ECON') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "ECON",
                     data: ""
                    }
                }
           }, '*');
           return;
        }

        if(eventData.data == 'INVESTOR') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "INVESTOR",
                     data: ""
                    }
                }
           }, '*');
           return;
        }


        if(eventData.data == 'POPFAQ') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "POPFAQ",
                     data: ""
                    }
                }
           }, '*');
           return;
        }

        if(eventData.data == 'RETIREMENT') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "RETIREMENT",
                     data: ""
                    }
                }
           }, '*');
           return;
        }

        if(eventData.data == 'VCMM') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "VCMM",
                     data: ""
                    }
                }
           }, '*');
           return;
        }
        
    }catch(error){
        console.log(error);
        return;
    }
    
}, false);