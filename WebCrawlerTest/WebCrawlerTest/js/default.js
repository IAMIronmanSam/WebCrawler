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
            document.getElementById("write").addEventListener("click", write, false);

        }
    });

   


    function crawler() {

        console.log("Entered");
        var input = document.getElementById("text").value;
        var xmlDoc;
        console.log(input);
        var request = new XMLHttpRequest();
        request.open('GET', input, false);
        request.responseType = "document";
        request.send();
        
        //xmlDoc = request.responseXML;
        //console.log(xmlDoc);
        // because of "false" above, will block until the request is done 
        // and status is available. Not recommended, however it works for simple cases.
        
        if (request.status === 200) {
            //console.log(request.responseText);
            var str = request.response;
            console.log(str);
            console.log("-----------------------------------------");
           // console.log(str.getElementsByTagName("span"));
            var it = str.getElementsByTagName("span") //Element Switcher
            console.log("Element: " + it);  //HTML Element
            console.log("Element Count: "+it.length); //Total Count Of Elements
            console.log("Content: "+it.item(1).innerHTML); //Content of the HTML Element
            console.log("-----------------------------------------");
            var md = new Windows.UI.Popups.MessageDialog("Element: " + it+"\n"+"Element Count: " + it.length+"\n"+"Content: " + it.item(1).innerHTML);
            md.showAsync();
            //str.get
           //  document.getElementById("");
            
            //WinJS.Utilities.setInnerHTML(test, str);
            //var tes = document.getElementsByClassName('t');
            ////var sample = document.getElementById('test');
            //console.log(str);
            //console.log(tes);
            //console.log(tes.item(0));
            //for (var i = 0; i <= str.length; i++) {
            //    //console.log(str.length);
            //    var st = str.toUpperCase();
            //    //var cr = sample.getElementsByTagName ('div');
            //   // console.log(cr);
            //     //console.log(cr.innerHTML);
            //   // if (str == '<div>') {
            //       // var n = st.match(/APPLE/g);
            //      //  console.log(cr);
            //  //  }
            //    //else { console.log("Outside Div");}

            //}

           // console.log("Size: " + n.length);
            //var size = n.length;
            //var md = new Windows.UI.Popups.MessageDialog("Total Count:" + n.length);
            //md.showAsync();
            //return size;

        }
        //var conc = new Array();
        //conc = [input, size];
        //console.log(conc);
        //return conc;
        
        
    }

    function write()
    {
        var s = Windows.Storage.KnownFolders.picturesLibrary.createFileAsync("sample.txt", Windows.Storage.CreationCollisionOption.generateUniqueName).done(
       function (file) {
           //SdkSample.sampleFile = file;
           //var outputDiv = document.getElementById("output");
           //outputDiv.innerHTML = "The file '" + file.name + "' was created.";
           // console.log(JSON.stringify( outputDiv));

          // if (size !== "") {
               Windows.Storage.FileIO.writeTextAsync(file, conc).done(function () {
                   //outputDiv.innerHTML = "The following text was written to '" + file.name + "':<br /><br />" + size;
               },
               function (error) {
                   WinJS.log && WinJS.log(error, "sample", "error");
               });
           //}

       },
       function (error) {
           WinJS.log && WinJS.log(error, "sample", "error");
       });
    }
})();
