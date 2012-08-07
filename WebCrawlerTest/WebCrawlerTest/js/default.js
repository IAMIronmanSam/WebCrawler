// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";
    
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    WinJS.strictProcessing();

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();

    var page = WinJS.UI.Pages.define("default.html", {
        ready: function (element, options) {

            document.getElementById("crawl").addEventListener("click", crawler, false);
        }
    });

   


    function crawler() {

        console.log("Entered");
        var input = document.getElementById("text").value;
        console.log(input);
        var request = new XMLHttpRequest();
        request.open('GET', input, false);
        request.send(); // because of "false" above, will block until the request is done 
        // and status is available. Not recommended, however it works for simple cases.
      
        if (request.status === 200) {
            //console.log(request.responseText);
            var str = request.responseText;
           
            for (var i = 0; i <= str.length; i++)
            {
                //console.log(str.length);
                var n = str.match(/Apple/g);
                  
            }
           
            console.log("Size: " + n.length);
            var md = new Windows.UI.Popups.MessageDialog("Total Count:" + n.length);
            md.showAsync();

        }
        console.log("Finish");
     

    }
    
})();
