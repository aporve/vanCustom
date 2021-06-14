(function addFrames () {
     try { document.querySelector('#chatContainer').insertAdjacentHTML( 
         'afterbegin', 
         `<div class="mod-head-side-bar-container">
            <div class="overflow-container-sidebar">
                <ul class="sidebar-wrapper">
                    <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 1"> 
                        <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/LS9XYE9urVcj1605084428877.png"/>
                    </div>
                    <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 2"> 
                        <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/4dnzmSDugrwW1622800597860.png"/>
                    </div>
                    <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 3"> 
                        <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/peOgkPdE8n0A1622800752931.png"/>
                        </div>
                    <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 4"> 
                        <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/FPloPRu3LmfA1622800812350.png"/>
                    </div>
                    <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 5"> 
                        <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/sULHcUPQH5RL1622800858305.png"/>
                    </div>
                    <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 6"> 
                        <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/GnxBWRVeIm6i1622800692538.png"/>
                    </div>
                    <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 7"> 
                        <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/o2BBDya1HiQT1622800956549.png"/>
                    </div>
                    <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 8"> 
                        <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/GnxBWRVeIm6i1622800692538.png"/>
                    </div>
                    <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 9"> 
                        <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/g6Fdrr5NeUj01622800983140.png"/>
                    </div>
                </ul>
            </div>
            <div class="overflow-container-header">
                <ul class="header-wrapper">
                    <div class="header-title" id="main-header-title">Header</div>
                    <div class="icons-box"> 
                        <span class="header-bar-icon-box" title="Close">x</span>
                     </div>
                </ul>
            </div>
            </div> ` 
                        
            ); }
             catch(e) { 
                console.log("failing while trying to insert add frame script", e); 
            } 
})(); 

function dynamicHeaderTitle(e) { 
    e.preventDefault(); 
    var title = e.srcElement.getAttribute("title"); 
    document.getElementById("main-header-title").textContent = title; 
}

document.getElementById('e1').onclick = function () {
    document.getElementById('faq').innerHTML='Active Passive'
    parent.postMessage("ACTIVE", "*")
};

document.getElementById('e2').onclick = function () {
    document.getElementById('faq').innerHTML='Asset Allocation'
    parent.postMessage("ASSET", "*")
};

document.getElementById('e3').onclick = function () {
    document.getElementById('faq').innerHTML='Economy'
    parent.postMessage("ECON", "*")
};

document.getElementById('e4').onclick = function () {
    document.getElementById('faq').innerHTML='Investor Behaviour'
    parent.postMessage("INVESTOR", "*")
};

document.getElementById('e5').onclick = function () {
    document.getElementById('faq').innerHTML='ISG'
    parent.postMessage("ISG", "*")
};

document.getElementById('e6').onclick = function () {
    document.getElementById('faq').innerHTML='Retirement Planning'
    parent.postMessage("RETIREMENT", "*")
};

document.getElementById('e7').onclick = function () {
    document.getElementById('faq').innerHTML='Strategic Communications'
    parent.postMessage("POPFAQ", "*")
};

document.getElementById('e8').onclick = function () {
    document.getElementById('faq').innerHTML='VCMM Core'
    parent.postMessage("VCMM", "*")
};

document.getElementById('e9').onclick = function () {
    parent.postMessage("MINIMIZE", "*")
};