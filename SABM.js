// All Interactions and Debug SA v2023-11-17
// Changelog: in SA06 Eval vars verplaatst naar tweede submit-script, want daar worden ze pas gegenereerd.
// 2023-11-17 1. Logs toegevoegd. 2. in function UpdateCompletion de variabele IsPageComplete als boolean gedefinieerd

var SLplayer = GetPlayer();
var UName = SLplayer.GetVar("G_ThisStudentID");
var EpisodeID = SLplayer.GetVar("G_ThisEpisodeID");
var ProjectSlideNumber = SLplayer.GetVar("j_ProjectSlideNumber");
var ProjectTotalSlides = SLplayer.GetVar("j_ProjectTotalSlides");
var PageCompletionStatuses = SLplayer.GetVar("G_CompletionList");
var IsPageComplete = SLplayer.GetVar("G_IsPageComplete");
var ProjectProgress = SLplayer.GetVar("j_ProjectProgress");
var ProjectElapsedTime = SLplayer.GetVar("j_ProjectElapsedTime");
var SlideElapsedTime = SLplayer.GetVar("j_SlideElapsedTime");
var browser = "";
var debug = "";
var SystemInfo = "";
var Interactions1 = "";
var Interactions2 = "";

FirstRun();
UpdateCompletion();
ExecuteEpisode();
GetDebug();

function FirstRun() {
    console.log("FirstRun function started");

    if (!UName) {
        console.log("UName is not set, proceeding to get actor parameter");

        function getParameterByName(name, url) {
            console.log("getParameterByName called with name: ", name, " and url: ", url);

            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            console.log("Regex results for ", name, ": ", results);

            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        var studentid = getParameterByName('actor');
        console.log("Retrieved studentid: ", studentid);

        var mailtoIndex = studentid.indexOf('mailto:');
        console.log("Index of mailto: ", mailtoIndex);

        if (mailtoIndex !== -1) {
            var emailPart = studentid.substring(mailtoIndex);
            console.log("Extracted email part: ", emailPart);

            var emailMatches = emailPart.match(/mailto:([^"]+)/);
            console.log("Email match result: ", emailMatches);

            if (emailMatches && emailMatches.length > 1) {
                UName = emailMatches[1];
                console.log("Extracted email address: ", UName);

                UName = UName.replace(/[\[\]\{\}"]+/g, "");
                console.log("Cleaned email address: ", UName);

                SLplayer.SetVar("G_ThisStudentID", UName);
                console.log("Set G_ThisStudentID to: ", UName);
            }
        }
    } else {
        console.log("UName already set: ", UName);
    }

        if (!PageCompletionStatuses) {
        console.log("Initializing PageCompletionStatuses");

        PageCompletionStatuses = "";
        for (var i = 1; i <= ProjectTotalSlides; i++) {
            var ProjectSlideNumber = i.toString().padStart(3, '0');
            PageCompletionStatuses += "page" + ProjectSlideNumber + ": false\n";
        }
        SLplayer.SetVar("G_CompletionList", PageCompletionStatuses);
    }
	console.log("FirstRun function ended");
}




function EpisodeSA00() {
	console.log("function EpisodeSA00 started");
	
	Interactions1 = " \r\n" +
		UName + ",SA00,Reflect01," + SLplayer.GetVar("q_SA00_Reflect_01") + "," + SLplayer.GetVar("q_SA00_Reflect_01_Comment") + "\r\n" +
		UName + ",SA00,Reflect02," + SLplayer.GetVar("q_SA00_Reflect_02") + "," + SLplayer.GetVar("q_SA00_Reflect_02_Comment") + "\r\n" +
		UName + ",SA00,Reflect03," + SLplayer.GetVar("q_SA00_Reflect_03") + "," + SLplayer.GetVar("q_SA00_Reflect_03_Comment") + "\r\n" +
		UName + ",SA00,Reflect04," + SLplayer.GetVar("q_SA00_Reflect_04") + "," + SLplayer.GetVar("q_SA00_Reflect_04_Comment") + "\r\n" +
		UName + ",SA00,Reflect05," + SLplayer.GetVar("q_SA00_Reflect_05") + "," + SLplayer.GetVar("q_SA00_Reflect_05_Comment") + "\r\n" +
		UName + ",SA00,Reflect06," + SLplayer.GetVar("q_SA00_Reflect_06") + "," + SLplayer.GetVar("q_SA00_Reflect_06_Comment") + "\r\n" +
		UName + ",SA00,Reflect07," + SLplayer.GetVar("q_SA00_Reflect_07") + "," + SLplayer.GetVar("q_SA00_Reflect_07_Comment") + "\r\n" +
		UName + ",SA00,Reflect08," + SLplayer.GetVar("q_SA00_Reflect_08") + "," + SLplayer.GetVar("q_SA00_Reflect_08_Comment") + "\r\n";

	Interactions2 = " \r\n" +
		UName + ",SA00,Reflect09," + SLplayer.GetVar("q_SA00_Reflect_09") + "," + SLplayer.GetVar("q_SA00_Reflect_09_Comment") + "\r\n" +
		UName + ",SA00,Reflect10," + SLplayer.GetVar("q_SA00_Reflect_10") + "," + SLplayer.GetVar("q_SA00_Reflect_10_Comment") + "\r\n" +
		UName + ",SA00,Reflect11," + SLplayer.GetVar("q_SA00_Reflect_11") + "," + SLplayer.GetVar("q_SA00_Reflect_11_Comment") + "\r\n" +
		UName + ",SA00,Reflect12," + SLplayer.GetVar("q_SA00_Reflect_12") + "," + SLplayer.GetVar("q_SA00_Reflect_12_Comment") + "\r\n" +
		UName + ",SA00,Reflect13," + SLplayer.GetVar("q_SA00_Reflect_13") + "," + SLplayer.GetVar("q_SA00_Reflect_13_Comment") + "\r\n" +
		UName + ",SA00,Reflect14," + SLplayer.GetVar("q_SA00_Reflect_14") + "," + SLplayer.GetVar("q_SA00_Reflect_14_Comment") + "\r\n" +
		UName + ",SA00,Reflect15," + SLplayer.GetVar("q_SA00_Reflect_15") + "," + SLplayer.GetVar("q_SA00_Reflect_15_Comment") + "\r\n" +
		UName + ",SA00,Reflect16," + SLplayer.GetVar("q_SA00_Reflect_16") + "," + SLplayer.GetVar("q_SA00_Reflect_16_Comment") + "\r\n" +
		UName + ",SA00,Reflect17," + SLplayer.GetVar("q_SA00_Reflect_17") + "," + SLplayer.GetVar("q_SA00_Reflect_17_Comment") + "\r\n" +
		UName + ",SA00,Reflect18," + SLplayer.GetVar("q_SA00_Reflect_18") + "\r\n" +
		UName + ",SA00,Reflect18A," + SLplayer.GetVar("q_SA00_Reflect_18A") + "\r\n" +
		UName + ",SA00,Reflect18B," + SLplayer.GetVar("q_SA00_Reflect_18B") + "\r\n" +
		UName + ",SA00,Reflect18C," + SLplayer.GetVar("q_SA00_Reflect_18C") + "\r\n" +
		UName + ",SA00,Reflect18D," + SLplayer.GetVar("q_SA00_Reflect_18D") + "\r\n" +
		UName + ",SA00,Reflect18E," + SLplayer.GetVar("q_SA00_Reflect_18E") + "\r\n" +
		UName + ",SA00,Reflect18F," + SLplayer.GetVar("q_SA00_Reflect_18F") + "\r\n" +
		UName + ",SA00,Reflect18G," + SLplayer.GetVar("q_SA00_Reflect_18G") + "\r\n" +
		UName + ",SA00,Reflect19," + SLplayer.GetVar("q_SA00_Reflect_19") + "\r\n" +
		UName + ",SA00,Reflect20," + SLplayer.GetVar("q_SA00_Reflect_20") + "\r\n";
		
	console.log("function EpisodeSA00 ended");
}

function EpisodeSA01() {
	console.log("function EpisodeSA01 started");
		
	Interactions1 = " \r\n" +
		UName + ",SA01,Reflect01," + SLplayer.GetVar("q_SA01_Reflect_01") + "," + SLplayer.GetVar("q_SA01_Reflect_01_Comment") + "\r\n" +
		UName + ",SA01,Reflect02," + SLplayer.GetVar("q_SA01_Reflect_02") + "," + SLplayer.GetVar("q_SA01_Reflect_02_Comment") + "\r\n" +
		UName + ",SA01,Reflect03," + SLplayer.GetVar("q_SA01_Reflect_03") + "," + SLplayer.GetVar("q_SA01_Reflect_03_Comment") + "\r\n" +
		UName + ",SA01,Reflect04," + SLplayer.GetVar("q_SA01_Reflect_04") + "," + SLplayer.GetVar("q_SA01_Reflect_04_Comment") + "\r\n" +
		UName + ",SA01,Reflect05," + SLplayer.GetVar("q_SA01_Reflect_05") + "," + SLplayer.GetVar("q_SA01_Reflect_05_Comment") + "\r\n" +

		UName + ",SA01,Goal01," + SLplayer.GetVar("q_SA01_Goal_01") + "," + SLplayer.GetVar("q_SA01_Goal_Comment") + "\r\n" +
		UName + ",SA01,Goal02," + SLplayer.GetVar("q_SA01_Goal_02") + "\r\n" +
		UName + ",SA01,Goal03," + SLplayer.GetVar("q_SA01_Goal_03") + "\r\n" +
		UName + ",SA01,Goal04," + SLplayer.GetVar("q_SA01_Goal_04") + "\r\n" +
		UName + ",SA01,Goal05," + SLplayer.GetVar("q_SA01_Goal_05") + "\r\n" +
		UName + ",SA01,Goal06," + SLplayer.GetVar("q_SA01_Goal_06") + "\r\n" +

		UName + ",SA01,Eval01," + SLplayer.GetVar("q_SA01_Eval_01") + "," + SLplayer.GetVar("q_SA01_Eval_01_Comment") + "\r\n" +
		UName + ",SA01,Eval02," + SLplayer.GetVar("q_SA01_Eval_02") + "," + SLplayer.GetVar("q_SA01_Eval_02_Comment") + "\r\n" +
		UName + ",SA01,Eval03," + SLplayer.GetVar("q_SA01_Eval_03") + "," + SLplayer.GetVar("q_SA01_Eval_03_Comment") + "\r\n" +
		UName + ",SA01,Eval04," + SLplayer.GetVar("q_SA01_Eval_04") + "," + SLplayer.GetVar("q_SA01_Eval_04_Comment") + "\r\n";
		console.log("function EpisodeSA01 ended");
}

function EpisodeSA02() {
	console.log("function EpisodeSA02 started");
	Interactions1 = " \r\n" +
		UName + ",SA02,Reflect01," + SLplayer.GetVar("q_SA02_Reflect_01") + "," + SLplayer.GetVar("q_SA02_Reflect_01_Comment") + "\r\n" +
		UName + ",SA02,Reflect02," + SLplayer.GetVar("q_SA02_Reflect_02") + "," + SLplayer.GetVar("q_SA02_Reflect_02_Comment") + "\r\n" +
		UName + ",SA02,Reflect03," + SLplayer.GetVar("q_SA02_Reflect_03") + "," + SLplayer.GetVar("q_SA02_Reflect_03_Comment") + "\r\n" +
		UName + ",SA02,Reflect04," + SLplayer.GetVar("q_SA02_Reflect_04") + "," + SLplayer.GetVar("q_SA02_Reflect_04_Comment") + "\r\n" +

		UName + ",SA02,Goal01," + SLplayer.GetVar("q_SA02_Goal_01") + "," + SLplayer.GetVar("q_SA02_Goal_Comment") + "\r\n" +
		UName + ",SA02,Goal02," + SLplayer.GetVar("q_SA02_Goal_02") + "\r\n" +
		UName + ",SA02,Goal03," + SLplayer.GetVar("q_SA02_Goal_03") + "\r\n" +
		UName + ",SA02,Goal04," + SLplayer.GetVar("q_SA02_Goal_04") + "\r\n" +

		UName + ",SA02,Eval01," + SLplayer.GetVar("q_SA02_Eval_01") + "," + SLplayer.GetVar("q_SA02_Eval_01_Comment") + "\r\n" +
		UName + ",SA02,Eval02," + SLplayer.GetVar("q_SA02_Eval_02") + "," + SLplayer.GetVar("q_SA02_Eval_02_Comment") + "\r\n" +
		UName + ",SA02,Eval03," + SLplayer.GetVar("q_SA02_Eval_03") + "," + SLplayer.GetVar("q_SA02_Eval_03_Comment") + "\r\n" +
		UName + ",SA02,Eval04," + SLplayer.GetVar("q_SA02_Eval_04") + "," + SLplayer.GetVar("q_SA02_Eval_04_Comment") + "\r\n";
		console.log("function EpisodeSA02 ended");
}

function EpisodeSA03() {
	console.log("function EpisodeSA03 started");
	Interactions1 = " \r\n" +
		UName + ",SA03,Reflect01," + SLplayer.GetVar("q_SA03_Reflect_01") + "," + SLplayer.GetVar("q_SA03_Reflect_01_Comment") + "\r\n" +
		UName + ",SA03,Reflect02," + SLplayer.GetVar("q_SA03_Reflect_02") + "," + SLplayer.GetVar("q_SA03_Reflect_02_Comment") + "\r\n" +

		UName + ",SA03,Goal01," + SLplayer.GetVar("q_SA03_Goal_01") + "," + SLplayer.GetVar("q_SA03_Goal_Comment") + "\r\n" +
		UName + ",SA03,Goal02," + SLplayer.GetVar("q_SA03_Goal_02") + "\r\n" +

		UName + ",SA03,Eval01," + SLplayer.GetVar("q_SA03_Eval_01") + "," + SLplayer.GetVar("q_SA03_Eval_01_Comment") + "\r\n" +
		UName + ",SA03,Eval02," + SLplayer.GetVar("q_SA03_Eval_02") + "," + SLplayer.GetVar("q_SA03_Eval_02_Comment") + "\r\n" +
		UName + ",SA03,Eval03," + SLplayer.GetVar("q_SA03_Eval_03") + "," + SLplayer.GetVar("q_SA03_Eval_03_Comment") + "\r\n" +
		UName + ",SA03,Eval04," + SLplayer.GetVar("q_SA03_Eval_04") + "," + SLplayer.GetVar("q_SA03_Eval_04_Comment") + "\r\n";
		console.log("function EpisodeSA03 ended");
}

function EpisodeSA04() {
	console.log("function EpisodeSA04 started");
	Interactions1 = " \r\n" +
		UName + ",SA04,Reflect01," + SLplayer.GetVar("q_SA04_Reflect_01") + "," + SLplayer.GetVar("q_SA04_Reflect_01_Comment") + "\r\n" +
		UName + ",SA04,Reflect02," + SLplayer.GetVar("q_SA04_Reflect_02") + "," + SLplayer.GetVar("q_SA04_Reflect_02_Comment") + "\r\n" +
		UName + ",SA04,Reflect03," + SLplayer.GetVar("q_SA04_Reflect_03") + "," + SLplayer.GetVar("q_SA04_Reflect_03_Comment") + "\r\n" +

		UName + ",SA04,Goal01," + SLplayer.GetVar("q_SA04_Goal_01") + "," + SLplayer.GetVar("q_SA04_Goal_Comment") + "\r\n" +
		UName + ",SA04,Goal02," + SLplayer.GetVar("q_SA04_Goal_02") + "\r\n" +
		UName + ",SA04,Goal03," + SLplayer.GetVar("q_SA04_Goal_03") + "\r\n" +
		UName + ",SA04,Goal04," + SLplayer.GetVar("q_SA04_Goal_04") + "\r\n" +
		UName + ",SA04,Goal05," + SLplayer.GetVar("q_SA04_Goal_05") + "\r\n" +
		UName + ",SA04,Goal06," + SLplayer.GetVar("q_SA04_Goal_06") + "\r\n" +

		UName + ",SA04,Eval01," + SLplayer.GetVar("q_SA04_Eval_01") + "," + SLplayer.GetVar("q_SA04_Eval_01_Comment") + "\r\n" +
		UName + ",SA04,Eval02," + SLplayer.GetVar("q_SA04_Eval_02") + "," + SLplayer.GetVar("q_SA04_Eval_02_Comment") + "\r\n" +
		UName + ",SA04,Eval03," + SLplayer.GetVar("q_SA04_Eval_03") + "," + SLplayer.GetVar("q_SA04_Eval_03_Comment") + "\r\n" +
		UName + ",SA04,Eval04," + SLplayer.GetVar("q_SA04_Eval_04") + "," + SLplayer.GetVar("q_SA04_Eval_04_Comment") + "\r\n";
		console.log("function EpisodeSA04 ended");
}

function EpisodeSA05() {
	console.log("function EpisodeSA05 started");
	Interactions1 = " \r\n" +
		UName + ",SA05,Reflect01," + SLplayer.GetVar("q_SA05_Reflect_01") + "," + SLplayer.GetVar("q_SA05_Reflect_01_Comment") + "\r\n" +
		UName + ",SA05,Reflect02," + SLplayer.GetVar("q_SA05_Reflect_02") + "," + SLplayer.GetVar("q_SA05_Reflect_02_Comment") + "\r\n" +
		UName + ",SA05,Reflect03," + SLplayer.GetVar("q_SA05_Reflect_03") + "," + SLplayer.GetVar("q_SA05_Reflect_03_Comment") + "\r\n" +
		UName + ",SA05,Reflect04," + SLplayer.GetVar("q_SA05_Reflect_04") + "," + SLplayer.GetVar("q_SA05_Reflect_04_Comment") + "\r\n" +
		UName + ",SA05,Reflect05," + SLplayer.GetVar("q_SA05_Reflect_05") + "," + SLplayer.GetVar("q_SA05_Reflect_05_Comment") + "\r\n" +
		UName + ",SA05,Reflect06," + SLplayer.GetVar("q_SA05_Reflect_05") + "," + SLplayer.GetVar("q_SA05_Reflect_06_Comment") + "\r\n" +

		UName + ",SA05,Goal01," + SLplayer.GetVar("q_SA05_Goal_01") + "," + SLplayer.GetVar("q_SA05_Goal_Comment") + "\r\n" +
		UName + ",SA05,Goal02," + SLplayer.GetVar("q_SA05_Goal_02") + "\r\n" +
		UName + ",SA05,Goal03," + SLplayer.GetVar("q_SA05_Goal_03") + "\r\n" +
		UName + ",SA05,Goal04," + SLplayer.GetVar("q_SA05_Goal_04") + "\r\n" +
		UName + ",SA05,Goal05," + SLplayer.GetVar("q_SA05_Goal_05") + "\r\n" +
		UName + ",SA05,Goal06," + SLplayer.GetVar("q_SA05_Goal_06") + "\r\n" +

		UName + ",SA05,Eval01," + SLplayer.GetVar("q_SA05_Eval_01") + "," + SLplayer.GetVar("q_SA05_Eval_01_Comment") + "\r\n" +
		UName + ",SA05,Eval02," + SLplayer.GetVar("q_SA05_Eval_02") + "," + SLplayer.GetVar("q_SA05_Eval_02_Comment") + "\r\n" +
		UName + ",SA05,Eval03," + SLplayer.GetVar("q_SA05_Eval_03") + "," + SLplayer.GetVar("q_SA05_Eval_03_Comment") + "\r\n" +
		UName + ",SA05,Eval04," + SLplayer.GetVar("q_SA05_Eval_04") + "," + SLplayer.GetVar("q_SA05_Eval_04_Comment") + "\r\n";
		console.log("function EpisodeSA05 ended");
}

function EpisodeSA06() {
	console.log("function EpisodeSA06 started");
	Interactions1 = " \r\n" +
		UName + ",SA06,Reflect06_01," + SLplayer.GetVar("q_SA06_Reflect06_01") + "," + SLplayer.GetVar("q_SA06_Reflect06_01_Comment") + "\r\n" +
		UName + ",SA06,Reflect06_02," + SLplayer.GetVar("q_SA06_Reflect06_02") + "," + SLplayer.GetVar("q_SA06_Reflect06_02_Comment") + "\r\n" +

		UName + ",SA01,Reflect06_01," + SLplayer.GetVar("q_SA01_Reflect06_01") + "," + SLplayer.GetVar("q_SA01_Reflect06_01_Comment") + "\r\n" +
		UName + ",SA01,Reflect06_02," + SLplayer.GetVar("q_SA01_Reflect06_02") + "," + SLplayer.GetVar("q_SA01_Reflect06_02_Comment") + "\r\n" +
		UName + ",SA01,Reflect06_03," + SLplayer.GetVar("q_SA01_Reflect06_03") + "," + SLplayer.GetVar("q_SA01_Reflect06_03_Comment") + "\r\n" +
		UName + ",SA01,Reflect06_04," + SLplayer.GetVar("q_SA01_Reflect06_04") + "," + SLplayer.GetVar("q_SA01_Reflect06_04_Comment") + "\r\n" +
		UName + ",SA01,Reflect06_05," + SLplayer.GetVar("q_SA01_Reflect06_05") + "," + SLplayer.GetVar("q_SA01_Reflect06_05_Comment") + "\r\n" +

		UName + ",SA02,Reflect06_01," + SLplayer.GetVar("q_SA02_Reflect06_01") + "," + SLplayer.GetVar("q_SA02_Reflect06_01_Comment") + "\r\n" +
		UName + ",SA02,Reflect06_02," + SLplayer.GetVar("q_SA02_Reflect06_02") + "," + SLplayer.GetVar("q_SA02_Reflect06_02_Comment") + "\r\n" +
		UName + ",SA02,Reflect06_03," + SLplayer.GetVar("q_SA02_Reflect06_03") + "," + SLplayer.GetVar("q_SA02_Reflect06_03_Comment") + "\r\n" +
		UName + ",SA02,Reflect06_04," + SLplayer.GetVar("q_SA02_Reflect06_04") + "," + SLplayer.GetVar("q_SA02_Reflect06_04_Comment") + "\r\n" +

		UName + ",SA03,Reflect06_01," + SLplayer.GetVar("q_SA03_Reflect06_01") + "," + SLplayer.GetVar("q_SA03_Reflect06_01_Comment") + "\r\n" +
		UName + ",SA03,Reflect06_02," + SLplayer.GetVar("q_SA03_Reflect06_02") + "," + SLplayer.GetVar("q_SA03_Reflect06_02_Comment") + "\r\n" +

		UName + ",SA04,Reflect06_01," + SLplayer.GetVar("q_SA04_Reflect06_01") + "," + SLplayer.GetVar("q_SA04_Reflect06_01_Comment") + "\r\n" +
		UName + ",SA04,Reflect06_02," + SLplayer.GetVar("q_SA04_Reflect06_02") + "," + SLplayer.GetVar("q_SA04_Reflect06_02_Comment") + "\r\n" +
		UName + ",SA04,Reflect06_03," + SLplayer.GetVar("q_SA04_Reflect06_03") + "," + SLplayer.GetVar("q_SA04_Reflect06_03_Comment") + "\r\n" +

		UName + ",SA05,Situation06_01," + SLplayer.GetVar("q_SA05_Situation06_01") + "," + SLplayer.GetVar("q_SA05_Situation06_Comment") + "\r\n" +
		UName + ",SA05,Situation06_02," + SLplayer.GetVar("q_SA05_Situation06_02") + "\r\n" +
		UName + ",SA05,Situation06_03," + SLplayer.GetVar("q_SA05_Situation06_03") + "\r\n" +
		UName + ",SA05,Situation06_04," + SLplayer.GetVar("q_SA05_Situation06_04") + "\r\n" +

		UName + ",SA05,Reflect06_01," + SLplayer.GetVar("q_SA05_Reflect06_01") + "," + SLplayer.GetVar("q_SA05_Reflect06_01_Comment") + "\r\n" +
		UName + ",SA05,Reflect06_02," + SLplayer.GetVar("q_SA05_Reflect06_02") + "," + SLplayer.GetVar("q_SA05_Reflect06_02_Comment") + "\r\n" +
		UName + ",SA05,Reflect06_03," + SLplayer.GetVar("q_SA05_Reflect06_03") + "," + SLplayer.GetVar("q_SA05_Reflect06_03_Comment") + "\r\n" +
		UName + ",SA05,Reflect06_04," + SLplayer.GetVar("q_SA05_Reflect06_04") + "," + SLplayer.GetVar("q_SA05_Reflect06_04_Comment") + "\r\n" +
		UName + ",SA05,Reflect06_05," + SLplayer.GetVar("q_SA05_Reflect06_05") + "," + SLplayer.GetVar("q_SA05_Reflect06_05_Comment") + "\r\n" +
		UName + ",SA05,Reflect06_06," + SLplayer.GetVar("q_SA05_Reflect06_06") + "," + SLplayer.GetVar("q_SA05_Reflect06_06_Comment") + "\r\n";


	Interactions2 = " \r\n" +
		UName + ",Chapter,Viewed,Completed" + "\r\n" +
		UName + ",SA01," + SLplayer.GetVar("p_SA01_Viewed") + "," + SLplayer.GetVar("p_SA01_Completed") + "\r\n" +
		UName + ",SA02," + SLplayer.GetVar("p_SA02_Viewed") + "," + SLplayer.GetVar("p_SA02_Completed") + "\r\n" +
		UName + ",SA03," + SLplayer.GetVar("p_SA03_Viewed") + "," + SLplayer.GetVar("p_SA03_Completed") + "\r\n" +
		UName + ",SA04," + SLplayer.GetVar("p_SA04_Viewed") + "," + SLplayer.GetVar("p_SA04_Completed") + "\r\n" +
		UName + ",SA05," + SLplayer.GetVar("p_SA05_Viewed") + "," + SLplayer.GetVar("p_SA05_Completed") + "\r\n" +

		UName + ",Episode,Goals renewed," + "\r\n" +

		UName + ",SA06,Goal06_Total," + SLplayer.GetVar("G_GoalsSet") + "\r\n" +

		UName + ",SA01,Goal06_01," + SLplayer.GetVar("q_SA01_Goal06_01") + "," + SLplayer.GetVar("q_SA01_Goal06_Comment") + "\r\n" +
		UName + ",SA01,Goal06_02," + SLplayer.GetVar("q_SA01_Goal06_02") + "," + "\r\n" +
		UName + ",SA01,Goal06_03," + SLplayer.GetVar("q_SA01_Goal06_03") + "," + "\r\n" +
		UName + ",SA01,Goal06_04," + SLplayer.GetVar("q_SA01_Goal06_04") + "," + "\r\n" +
		UName + ",SA01,Goal06_05," + SLplayer.GetVar("q_SA01_Goal06_05") + "," + "\r\n" +
		UName + ",SA01,Goal06_06," + SLplayer.GetVar("q_SA01_Goal06_06") + "," + "\r\n" +

		UName + ",SA02,Goal06_01," + SLplayer.GetVar("q_SA02_Goal06_01") + "," + SLplayer.GetVar("q_SA02_Goal06_Comment") + "\r\n" +
		UName + ",SA02,Goal06_02," + SLplayer.GetVar("q_SA02_Goal06_02") + "," + "\r\n" +
		UName + ",SA02,Goal06_03," + SLplayer.GetVar("q_SA02_Goal06_03") + "," + "\r\n" +
		UName + ",SA02,Goal06_04," + SLplayer.GetVar("q_SA02_Goal06_04") + "," + "\r\n" +

		UName + ",SA03,Goal06_01," + SLplayer.GetVar("q_SA03_Goal06_01") + "," + SLplayer.GetVar("q_SA03_Goal06_Comment") + "\r\n" +
		UName + ",SA03,Goal06_02," + SLplayer.GetVar("q_SA03_Goal06_02") + "," + "\r\n" +

		UName + ",SA04,Goal06_01," + SLplayer.GetVar("q_SA04_Goal06_01") + "," + SLplayer.GetVar("q_SA04_Goal06_Comment") + "\r\n" +
		UName + ",SA04,Goal06_02," + SLplayer.GetVar("q_SA04_Goal06_02") + "," + "\r\n" +
		UName + ",SA04,Goal06_03," + SLplayer.GetVar("q_SA04_Goal06_03") + "," + "\r\n" +
		UName + ",SA04,Goal06_04," + SLplayer.GetVar("q_SA04_Goal06_04") + "," + "\r\n" +
		UName + ",SA04,Goal06_05," + SLplayer.GetVar("q_SA04_Goal06_05") + "," + "\r\n" +
		UName + ",SA04,Goal06_06," + SLplayer.GetVar("q_SA04_Goal06_06") + "," + "\r\n" +

		UName + ",SA05,Goal06_01," + SLplayer.GetVar("q_SA05_Goal06_01") + "," + SLplayer.GetVar("q_SA05_Goal06_Comment") + "\r\n" +
		UName + ",SA05,Goal06_02," + SLplayer.GetVar("q_SA05_Goal06_02") + "," + "\r\n" +
		UName + ",SA05,Goal06_03," + SLplayer.GetVar("q_SA05_Goal06_03") + "," + "\r\n" +
		UName + ",SA05,Goal06_04," + SLplayer.GetVar("q_SA05_Goal06_04") + "," + "\r\n" +
		UName + ",SA05,Goal06_05," + SLplayer.GetVar("q_SA05_Goal06_05") + "," + "\r\n" +
		UName + ",SA05,Goal06_06," + SLplayer.GetVar("q_SA05_Goal06_06") + "\r\n"
		
		UName + ",SA06,Eval_01," + SLplayer.GetVar("q_SA06_Eval_01") + "," + SLplayer.GetVar("q_SA06_Eval_01_Comment") + "\r\n" +
		UName + ",SA06,Eval_02," + SLplayer.GetVar("q_SA06_Eval_02") + "," + SLplayer.GetVar("q_SA06_Eval_02_Comment") + "\r\n" +
		UName + ",SA06,Eval_03," + SLplayer.GetVar("q_SA06_Eval_03") + "," + SLplayer.GetVar("q_SA06_Eval_03_Comment") + "\r\n" +
		UName + ",SA06,Eval_04," + SLplayer.GetVar("q_SA06_Eval_04") + "," + SLplayer.GetVar("q_SA06_Eval_04_Comment") + "\r\n";
		console.log("function EpisodeSA06 ended");
}

function EpisodeSA07() {
	console.log("function EpisodeSA07 started");
	Interactions1 = " \r\n" +
		UName + ",SA07,Reflect01," + SLplayer.GetVar("q_SA07_Reflect_01") + "," + SLplayer.GetVar("q_SA07_Reflect_01_Comment") + "\r\n" +
		UName + ",SA07,Reflect02," + SLplayer.GetVar("q_SA07_Reflect_02") + "," + SLplayer.GetVar("q_SA07_Reflect_02_Comment") + "\r\n" +
		UName + ",SA07,Reflect03," + SLplayer.GetVar("q_SA07_Reflect_03") + "," + SLplayer.GetVar("q_SA07_Reflect_03_Comment") + "\r\n" +
		UName + ",SA07,Reflect04," + SLplayer.GetVar("q_SA07_Reflect_04") + "," + SLplayer.GetVar("q_SA07_Reflect_04_Comment") + "\r\n" +
		UName + ",SA07,Reflect05," + SLplayer.GetVar("q_SA07_Reflect_05") + "," + SLplayer.GetVar("q_SA07_Reflect_05_Comment") + "\r\n" +

		UName + ",SA07,Goal01," + SLplayer.GetVar("q_SA07_Goal_01") + "," + SLplayer.GetVar("q_SA07_Goal_Comment") + "\r\n" +
		UName + ",SA07,Goal02," + SLplayer.GetVar("q_SA07_Goal_02") + "\r\n" +
		UName + ",SA07,Goal03," + SLplayer.GetVar("q_SA07_Goal_03") + "\r\n" +
		UName + ",SA07,Goal04," + SLplayer.GetVar("q_SA07_Goal_04") + "\r\n" +
		UName + ",SA07,Goal05," + SLplayer.GetVar("q_SA07_Goal_05") + "\r\n" +
		UName + ",SA07,Goal06," + SLplayer.GetVar("q_SA07_Goal_06") + "\r\n" +

		UName + ",SA07,Eval01," + SLplayer.GetVar("q_SA07_Eval_01") + "," + SLplayer.GetVar("q_SA07_Eval_01_Comment") + "\r\n" +
		UName + ",SA07,Eval02," + SLplayer.GetVar("q_SA07_Eval_02") + "," + SLplayer.GetVar("q_SA07_Eval_02_Comment") + "\r\n" +
		UName + ",SA07,Eval03," + SLplayer.GetVar("q_SA07_Eval_03") + "," + SLplayer.GetVar("q_SA07_Eval_03_Comment") + "\r\n" +
		UName + ",SA07,Eval04," + SLplayer.GetVar("q_SA07_Eval_04") + "," + SLplayer.GetVar("q_SA07_Eval_04_Comment") + "\r\n";
		console.log("function EpisodeSA07 ended");
}

function EpisodeSA08() {
	console.log("function EpisodeSA08 started");
	Interactions1 = " \r\n" +
		UName + ",SA08,Reflect01," + SLplayer.GetVar("q_SA08_Reflect_01") + "," + SLplayer.GetVar("q_SA08_Reflect_01_Comment") + "\r\n" +
		UName + ",SA08,Reflect02," + SLplayer.GetVar("q_SA08_Reflect_02") + "," + SLplayer.GetVar("q_SA08_Reflect_02_Comment") + "\r\n" +
		UName + ",SA08,Reflect03," + SLplayer.GetVar("q_SA08_Reflect_03") + "," + SLplayer.GetVar("q_SA08_Reflect_03_Comment") + "\r\n" +
		UName + ",SA08,Reflect04," + SLplayer.GetVar("q_SA08_Reflect_04") + "," + SLplayer.GetVar("q_SA08_Reflect_04_Comment") + "\r\n" +


		UName + ",SA08,Goal01," + SLplayer.GetVar("q_SA08_Goal_01") + "," + SLplayer.GetVar("q_SA08_Goal_Comment") + "\r\n" +
		UName + ",SA08,Goal02," + SLplayer.GetVar("q_SA08_Goal_02") + "\r\n" +
		UName + ",SA08,Goal03," + SLplayer.GetVar("q_SA08_Goal_03") + "\r\n" +
		UName + ",SA08,Goal04," + SLplayer.GetVar("q_SA08_Goal_04") + "\r\n" +
		UName + ",SA08,Goal05," + SLplayer.GetVar("q_SA08_Goal_05") + "\r\n" +

		UName + ",SA08,Eval01," + SLplayer.GetVar("q_SA08_Eval_01") + "," + SLplayer.GetVar("q_SA08_Eval_01_Comment") + "\r\n" +
		UName + ",SA08,Eval02," + SLplayer.GetVar("q_SA08_Eval_02") + "," + SLplayer.GetVar("q_SA08_Eval_02_Comment") + "\r\n" +
		UName + ",SA08,Eval03," + SLplayer.GetVar("q_SA08_Eval_03") + "," + SLplayer.GetVar("q_SA08_Eval_03_Comment") + "\r\n" +
		UName + ",SA08,Eval04," + SLplayer.GetVar("q_SA08_Eval_04") + "," + SLplayer.GetVar("q_SA08_Eval_04_Comment") + "\r\n";
		console.log("function EpisodeSA08 ended");
}

function EpisodeSA09() {
	console.log("function EpisodeSA09 started");
	Interactions1 = " \r\n" +
		UName + ",SA09,Reflect01," + SLplayer.GetVar("q_SA09_Reflect_01") + "," + SLplayer.GetVar("q_SA09_Reflect_01_Comment") + "\r\n" +
		UName + ",SA09,Reflect02," + SLplayer.GetVar("q_SA09_Reflect_02") + "," + SLplayer.GetVar("q_SA09_Reflect_02_Comment") + "\r\n" +
		UName + ",SA09,Reflect03," + SLplayer.GetVar("q_SA09_Reflect_03") + "," + SLplayer.GetVar("q_SA09_Reflect_03_Comment") + "\r\n" +

		UName + ",SA09,Goal01," + SLplayer.GetVar("q_SA09_Goal_01") + "," + SLplayer.GetVar("q_SA09_Goal_Comment") + "\r\n" +
		UName + ",SA09,Goal02," + SLplayer.GetVar("q_SA09_Goal_02") + "\r\n" +
		UName + ",SA09,Goal03," + SLplayer.GetVar("q_SA09_Goal_03") + "\r\n" +

		UName + ",SA09,Eval01," + SLplayer.GetVar("q_SA09_Eval_01") + "," + SLplayer.GetVar("q_SA09_Eval_01_Comment") + "\r\n" +
		UName + ",SA09,Eval02," + SLplayer.GetVar("q_SA09_Eval_02") + "," + SLplayer.GetVar("q_SA09_Eval_02_Comment") + "\r\n" +
		UName + ",SA09,Eval03," + SLplayer.GetVar("q_SA09_Eval_03") + "," + SLplayer.GetVar("q_SA09_Eval_03_Comment") + "\r\n" +
		UName + ",SA09,Eval04," + SLplayer.GetVar("q_SA09_Eval_04") + "," + SLplayer.GetVar("q_SA09_Eval_04_Comment") + "\r\n";
		console.log("function EpisodeSA09 ended");
}

function EpisodeSA10() {
	console.log("function EpisodeSA10 started");
	Interactions1 = " \r\n" +
		UName + ",SA10,Reflect01," + SLplayer.GetVar("q_SA10_Reflect_01") + "," + SLplayer.GetVar("q_SA10_Reflect_01_Comment") + "\r\n" +
		UName + ",SA10,Reflect02," + SLplayer.GetVar("q_SA10_Reflect_02") + "," + SLplayer.GetVar("q_SA10_Reflect_02_Comment") + "\r\n" +
		UName + ",SA10,Reflect03," + SLplayer.GetVar("q_SA10_Reflect_03") + "," + SLplayer.GetVar("q_SA10_Reflect_03_Comment") + "\r\n" +

		UName + ",SA10,Goal01," + SLplayer.GetVar("q_SA10_Goal_01") + "," + SLplayer.GetVar("q_SA10_Goal_Comment") + "\r\n" +
		UName + ",SA10,Goal02," + SLplayer.GetVar("q_SA10_Goal_02") + "\r\n" +
		UName + ",SA10,Goal03," + SLplayer.GetVar("q_SA10_Goal_03") + "\r\n" +

		UName + ",SA10,Eval01," + SLplayer.GetVar("q_SA10_Eval_01") + "," + SLplayer.GetVar("q_SA10_Eval_01_Comment") + "\r\n" +
		UName + ",SA10,Eval02," + SLplayer.GetVar("q_SA10_Eval_02") + "," + SLplayer.GetVar("q_SA10_Eval_02_Comment") + "\r\n" +
		UName + ",SA10,Eval03," + SLplayer.GetVar("q_SA10_Eval_03") + "," + SLplayer.GetVar("q_SA10_Eval_03_Comment") + "\r\n" +
		UName + ",SA10,Eval04," + SLplayer.GetVar("q_SA10_Eval_04") + "," + SLplayer.GetVar("q_SA10_Eval_04_Comment") + "\r\n";
	console.log("function EpisodeSA10 ended");
}

function EpisodeSA11() {
console.log("function EpisodeSA11 started");
	Interactions1 = " \r\n" +
		UName + ",SA11,Reflect01," + SLplayer.GetVar("q_SA11_Reflect_01") + "," + SLplayer.GetVar("q_SA11_Reflect_01_Comment") + "\r\n" +
		UName + ",SA11,Reflect02," + SLplayer.GetVar("q_SA11_Reflect_02") + "," + SLplayer.GetVar("q_SA11_Reflect_02_Comment") + "\r\n" +
		UName + ",SA11,Reflect03," + SLplayer.GetVar("q_SA11_Reflect_03") + "," + SLplayer.GetVar("q_SA11_Reflect_03_Comment") + "\r\n" +

		UName + ",SA11,Goal01," + SLplayer.GetVar("q_SA11_Goal_01") + "," + SLplayer.GetVar("q_SA11_Goal_Comment") + "\r\n" +
		UName + ",SA11,Goal02," + SLplayer.GetVar("q_SA11_Goal_02") + "\r\n" +
		UName + ",SA11,Goal03," + SLplayer.GetVar("q_SA11_Goal_03") + "\r\n" +
		UName + ",SA11,Goal04," + SLplayer.GetVar("q_SA11_Goal_04") + "\r\n" +

		UName + ",SA11,Eval01," + SLplayer.GetVar("q_SA11_Eval_01") + "," + SLplayer.GetVar("q_SA11_Eval_01_Comment") + "\r\n" +
		UName + ",SA11,Eval02," + SLplayer.GetVar("q_SA11_Eval_02") + "," + SLplayer.GetVar("q_SA11_Eval_02_Comment") + "\r\n" +
		UName + ",SA11,Eval03," + SLplayer.GetVar("q_SA11_Eval_03") + "," + SLplayer.GetVar("q_SA11_Eval_03_Comment") + "\r\n" +
		UName + ",SA11,Eval04," + SLplayer.GetVar("q_SA11_Eval_04") + "," + SLplayer.GetVar("q_SA11_Eval_04_Comment") + "\r\n";
	console.log("function EpisodeSA11 ended");
}

function EpisodeSA12() {
	console.log("function EpisodeSA12 started");
	Interactions1 = " \r\n" +
		UName + ",Chapter,Pages viewed," + "\r\n" +
		UName + ",SA01," + SLplayer.GetVar("p_SA01_Viewed") + "\r\n" +
		UName + ",SA02," + SLplayer.GetVar("p_SA02_Viewed") + "\r\n" +
		UName + ",SA03," + SLplayer.GetVar("p_SA03_Viewed") + "\r\n" +
		UName + ",SA04," + SLplayer.GetVar("p_SA04_Viewed") + "\r\n" +
		UName + ",SA05," + SLplayer.GetVar("p_SA05_Viewed") + "\r\n" +
		UName + ",SA07," + SLplayer.GetVar("p_SA07_Viewed") + "\r\n" +
		UName + ",SA08," + SLplayer.GetVar("p_SA08_Viewed") + "\r\n" +
		UName + ",SA09," + SLplayer.GetVar("p_SA09_Viewed") + "\r\n" +
		UName + ",SA10," + SLplayer.GetVar("p_SA10_Viewed") + "\r\n" +
		UName + ",SA11," + SLplayer.GetVar("p_SA11_Viewed") + "\r\n" +

		UName + ",Episode,Question ID,Response,Comment" + "\r\n" +
		UName + ",SA12,Reflect12_01," + SLplayer.GetVar("q_SA12_Reflect12_01") + "," + SLplayer.GetVar("q_SA12_Reflect12_01_Comment") + "\r\n" +
		UName + ",SA12,Reflect12_02," + SLplayer.GetVar("q_SA12_Reflect12_02") + "," + SLplayer.GetVar("q_SA12_Reflect12_02_Comment") + "\r\n" +
		UName + ",SA01,Reflect12_01," + SLplayer.GetVar("q_SA01_Reflect12_01") + "," + SLplayer.GetVar("q_SA01_Reflect12_01_Comment") + "\r\n" +
		UName + ",SA01,Reflect12_02," + SLplayer.GetVar("q_SA01_Reflect12_02") + "," + SLplayer.GetVar("q_SA01_Reflect12_02_Comment") + "\r\n" +
		UName + ",SA01,Reflect12_03," + SLplayer.GetVar("q_SA01_Reflect12_03") + "," + SLplayer.GetVar("q_SA01_Reflect12_03_Comment") + "\r\n" +
		UName + ",SA01,Reflect12_04," + SLplayer.GetVar("q_SA01_Reflect12_04") + "," + SLplayer.GetVar("q_SA01_Reflect12_04_Comment") + "\r\n" +
		UName + ",SA01,Reflect12_05," + SLplayer.GetVar("q_SA01_Reflect12_05") + "," + SLplayer.GetVar("q_SA01_Reflect12_05_Comment") + "\r\n" +

		UName + ",SA02,Reflect12_01," + SLplayer.GetVar("q_SA02_Reflect12_01") + "," + SLplayer.GetVar("q_SA02_Reflect12_01_Comment") + "\r\n" +
		UName + ",SA02,Reflect12_02," + SLplayer.GetVar("q_SA02_Reflect12_02") + "," + SLplayer.GetVar("q_SA02_Reflect12_02_Comment") + "\r\n" +
		UName + ",SA02,Reflect12_03," + SLplayer.GetVar("q_SA02_Reflect12_03") + "," + SLplayer.GetVar("q_SA02_Reflect12_03_Comment") + "\r\n" +
		UName + ",SA02,Reflect12_04," + SLplayer.GetVar("q_SA02_Reflect12_04") + "," + SLplayer.GetVar("q_SA02_Reflect12_04_Comment") + "\r\n" +

		UName + ",SA03,Reflect12_01," + SLplayer.GetVar("q_SA03_Reflect12_01") + "," + SLplayer.GetVar("q_SA03_Reflect12_01_Comment") + "\r\n" +
		UName + ",SA03,Reflect12_02," + SLplayer.GetVar("q_SA03_Reflect12_02") + "," + SLplayer.GetVar("q_SA03_Reflect12_02_Comment") + "\r\n" +

		UName + ",SA04,Reflect12_01," + SLplayer.GetVar("q_SA04_Reflect12_01") + "," + SLplayer.GetVar("q_SA04_Reflect12_01_Comment") + "\r\n" +
		UName + ",SA04,Reflect12_02," + SLplayer.GetVar("q_SA04_Reflect12_02") + "," + SLplayer.GetVar("q_SA04_Reflect12_02_Comment") + "\r\n" +
		UName + ",SA04,Reflect12_03," + SLplayer.GetVar("q_SA04_Reflect12_03") + "," + SLplayer.GetVar("q_SA04_Reflect12_03_Comment") + "\r\n" +

		UName + ",SA05,Situation12_01," + SLplayer.GetVar("q_SA05_Situation12_01") + "," + SLplayer.GetVar("q_SA05_Situation12_Comment") + "\r\n" +
		UName + ",SA05,Situation12_02," + SLplayer.GetVar("q_SA05_Situation12_02") + "\r\n" +
		UName + ",SA05,Situation12_03," + SLplayer.GetVar("q_SA05_Situation12_03") + "\r\n" +
		UName + ",SA05,Situation12_04," + SLplayer.GetVar("q_SA05_Situation12_04") + "\r\n" +

		UName + ",SA05,Reflect12_01," + SLplayer.GetVar("q_SA05_Reflect12_01") + "," + SLplayer.GetVar("q_SA05_Reflect12_01_Comment") + "\r\n" +
		UName + ",SA05,Reflect12_02," + SLplayer.GetVar("q_SA05_Reflect12_02") + "," + SLplayer.GetVar("q_SA05_Reflect12_02_Comment") + "\r\n" +
		UName + ",SA05,Reflect12_03," + SLplayer.GetVar("q_SA05_Reflect12_03") + "," + SLplayer.GetVar("q_SA05_Reflect12_03_Comment") + "\r\n" +
		UName + ",SA05,Reflect12_04," + SLplayer.GetVar("q_SA05_Reflect12_04") + "," + SLplayer.GetVar("q_SA05_Reflect12_04_Comment") + "\r\n" +
		UName + ",SA05,Reflect12_05," + SLplayer.GetVar("q_SA05_Reflect12_05") + "," + SLplayer.GetVar("q_SA05_Reflect12_05_Comment") + "\r\n" +
		UName + ",SA05,Reflect12_06," + SLplayer.GetVar("q_SA05_Reflect12_06") + "," + SLplayer.GetVar("q_SA05_Reflect12_06_Comment") + "\r\n";

	Interactions2 = " \r\n" +
		UName + ",SA07,Reflect12_01," + SLplayer.GetVar("q_SA07_Reflect12_01") + "," + SLplayer.GetVar("q_SA07_Reflect12_01_Comment") + "\r\n" +
		UName + ",SA07,Reflect12_02," + SLplayer.GetVar("q_SA07_Reflect12_02") + "," + SLplayer.GetVar("q_SA07_Reflect12_02_Comment") + "\r\n" +
		UName + ",SA07,Reflect12_03," + SLplayer.GetVar("q_SA07_Reflect12_03") + "," + SLplayer.GetVar("q_SA07_Reflect12_03_Comment") + "\r\n" +
		UName + ",SA07,Reflect12_04," + SLplayer.GetVar("q_SA07_Reflect12_04") + "," + SLplayer.GetVar("q_SA07_Reflect12_04_Comment") + "\r\n" +

		UName + ",SA08,Reflect12_01," + SLplayer.GetVar("q_SA08_Reflect12_01") + "," + SLplayer.GetVar("q_SA08_Reflect12_01_Comment") + "\r\n" +
		UName + ",SA08,Reflect12_02," + SLplayer.GetVar("q_SA08_Reflect12_02") + "," + SLplayer.GetVar("q_SA08_Reflect12_02_Comment") + "\r\n" +
		UName + ",SA08,Reflect12_03," + SLplayer.GetVar("q_SA08_Reflect12_03") + "," + SLplayer.GetVar("q_SA08_Reflect12_03_Comment") + "\r\n" +
		UName + ",SA08,Reflect12_04," + SLplayer.GetVar("q_SA08_Reflect12_04") + "," + SLplayer.GetVar("q_SA08_Reflect12_04_Comment") + "\r\n" +

		UName + ",SA09,Reflect12_01," + SLplayer.GetVar("q_SA09_Reflect12_01") + "," + SLplayer.GetVar("q_SA09_Reflect12_01_Comment") + "\r\n" +
		UName + ",SA09,Reflect12_02," + SLplayer.GetVar("q_SA09_Reflect12_02") + "," + SLplayer.GetVar("q_SA09_Reflect12_02_Comment") + "\r\n" +
		UName + ",SA09,Reflect12_03," + SLplayer.GetVar("q_SA09_Reflect12_03") + "," + SLplayer.GetVar("q_SA09_Reflect12_03_Comment") + "\r\n" +

		UName + ",SA10,Reflect12_01," + SLplayer.GetVar("q_SA10_Reflect12_01") + "," + SLplayer.GetVar("q_SA10_Reflect12_01_Comment") + "\r\n" +
		UName + ",SA10,Reflect12_02," + SLplayer.GetVar("q_SA10_Reflect12_02") + "," + SLplayer.GetVar("q_SA10_Reflect12_02_Comment") + "\r\n" +
		UName + ",SA10,Reflect12_03," + SLplayer.GetVar("q_SA10_Reflect12_03") + "," + SLplayer.GetVar("q_SA10_Reflect12_03_Comment") + "\r\n" +

		UName + ",SA11,Reflect12_01," + SLplayer.GetVar("q_SA11_Reflect12_01") + "," + SLplayer.GetVar("q_SA11_Reflect12_01_Comment") + "\r\n" +
		UName + ",SA11,Reflect12_02," + SLplayer.GetVar("q_SA11_Reflect12_02") + "," + SLplayer.GetVar("q_SA11_Reflect12_02_Comment") + "\r\n" +
		UName + ",SA11,Reflect12_03," + SLplayer.GetVar("q_SA11_Reflect12_03") + "," + SLplayer.GetVar("q_SA11_Reflect12_03_Comment") + "\r\n" +

		UName + ",SA12,Eval_01," + SLplayer.GetVar("q_SA12_Eval_01") + "," + SLplayer.GetVar("q_SA12_Eval_01_Comment") + "\r\n" +
		UName + ",SA12,Eval_02," + SLplayer.GetVar("q_SA12_Eval_02") + "," + SLplayer.GetVar("q_SA12_Eval_02_Comment") + "\r\n" +
		UName + ",SA12,Eval_03," + SLplayer.GetVar("q_SA12_Eval_03") + "," + SLplayer.GetVar("q_SA12_Eval_03_Comment") + "\r\n" +
		UName + ",SA12,Eval_04," + SLplayer.GetVar("q_SA12_Eval_04") + "," + SLplayer.GetVar("q_SA12_Eval_04_Comment") + "\r\n";
	console.log("function EpisodeSA12 ended");
}

function GetDebug() {
	console.log("function GetDebug started");
	var OSName = "Unknown OS";
	if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
	if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
	if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
	if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

	var OSVersion = "Unknown OS Version";
	if (navigator.userAgent.indexOf("Windows NT 10.0") != -1)
		OSVersion = "Windows 10";
	if (navigator.userAgent.indexOf("Windows NT 6.2") != -1)
		OSVersion = "Windows 8";
	if (navigator.userAgent.indexOf("Windows NT 6.1") != -1)
		OSVersion = "Windows 7";
	if (navigator.userAgent.indexOf("Windows NT 6.0") != -1)
		OSVersion = "Windows Vista";
	if (navigator.userAgent.indexOf("Windows NT 5.1") != -1)
		OSVersion = "Windows XP";
	if (navigator.userAgent.indexOf("Windows NT 5.0") != -1)
		OSVersion = "Windows 2000";
	if (navigator.userAgent.indexOf("Mac") != -1) OSVersion = "MacOS";
	if (navigator.userAgent.indexOf("X11") != -1) OSVersion = "UNIX";
	if (navigator.userAgent.indexOf("Linux") != -1) OSVersion = "Linux";

	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;

	browser = function() {
		var ua = navigator.userAgent,
			tem,
			M =
			ua.match(
				/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
			) || [];
		if (/trident/i.test(M[1])) {
			tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
			return {
				name: "IE",
				version: tem[1] || ""
			};
		}
		if (M[1] === "Chrome") {
			tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
			if (tem != null)
				return {
					name: tem[1].replace("OPR", "Opera"),
					version: tem[2]
				};
		}
		return {
			name: M[0] || navigator.appName,
			version: M[1] || navigator.appVersion,
		};
	};

	SystemInfo =
		"Browser: " +
		browser().name +
		" " +
		browser().version +
		"\n\n" +
		"Operating System: " +
		OSName +
		" " +
		OSVersion +
		"\n\n" +
		"Window size: " +
		windowWidth +
		" x " +
		windowHeight;

	debug = " \r\n" +
		"StudentID: " + UName + "\r\n" +
		"ProjectSlideNumber: " + ProjectSlideNumber + "\r\n" +
		"ProjectTotalSlides: " + ProjectTotalSlides + "\r\n" +
		"IsPageComplete: " + IsPageComplete + "\r\n" +
		"ProjectProgress: " + ProjectProgress + "\r\n" +
		"ProjectElapsedTime: " + ProjectElapsedTime + "\r\n" +
		"SlideElapsedTime: " + SlideElapsedTime + "\r\n" +
		"SystemInfo: " + "\r\n" +
		SystemInfo + "\r\n" +
		"PageCompletionStatuses:" + "\r\n" +
		PageCompletionStatuses + "\r\n" +
		Interactions1 + "\r\n" +
		Interactions2;

	SLplayer.SetVar("G_SystemInfo", SystemInfo);
	SLplayer.SetVar("j_output_debug", debug);
	console.log("function GetDebug ended");
	console.log(debug);
}

function ExecuteEpisode() {
	console.log("ExecuteEpisode started", EpisodeID)
	if (EpisodeID === "SA00") {
		EpisodeSA00();
		SLplayer.SetVar("j_output_answers", Interactions1);
		SLplayer.SetVar("j_output_answers2", Interactions2);

	} else if (EpisodeID === "SA01") {
		EpisodeSA01();
		SLplayer.SetVar("j_output_answers", Interactions1);

	} else if (EpisodeID === "SA02") {
		EpisodeSA02();
		SLplayer.SetVar("j_output_answers", Interactions1);

	} else if (EpisodeID === "SA03") {
		EpisodeSA03();
		SLplayer.SetVar("j_output_answers", Interactions1);

	} else if (EpisodeID === "SA04") {
		EpisodeSA04();
		SLplayer.SetVar("j_output_answers", Interactions1);

	} else if (EpisodeID === "SA05") {
		EpisodeSA05();
		SLplayer.SetVar("j_output_answers", Interactions1);

	} else if (EpisodeID === "SA06") {
		EpisodeSA06();
		SLplayer.SetVar("j_output_answers", Interactions1);
		SLplayer.SetVar("j_output_answers2", Interactions2);

	} else if (EpisodeID === "SA07") {
		EpisodeSA07();
		SLplayer.SetVar("j_output_answers", Interactions1);

	} else if (EpisodeID === "SA08") {
		EpisodeSA08();
		SLplayer.SetVar("j_output_answers", Interactions1);

	} else if (EpisodeID === "SA09") {
		EpisodeSA09();
		SLplayer.SetVar("j_output_answers", Interactions1);

	} else if (EpisodeID === "SA10") {
		EpisodeSA10();
		SLplayer.SetVar("j_output_answers", Interactions1);

	} else if (EpisodeID === "SA11") {
		EpisodeSA11();
		SLplayer.SetVar("j_output_answers", Interactions1);

	} else if (EpisodeID === "SA12") {
		EpisodeSA12();
		SLplayer.SetVar("j_output_answers", Interactions1);
		SLplayer.SetVar("j_output_answers2", Interactions2);
	}
}

function UpdateCompletion() {
	console.log("UpdateCompletion function started. Values at start of function:");
	console.log("Page Number: ", pageNumber);
	console.log("IsPageComplete: ", IsPageComplete);
	console.log("PageCompletionStatuses: ", PageCompletionStatuses);

	var pageNumber = ProjectSlideNumber.toString().padStart(3, '0');
	IsPageComplete = PageCompletionStatuses.match("page" + pageNumber + ": (true|false)")[1] === 'true';

	SLplayer.SetVar("G_CompletionList", PageCompletionStatuses);
	SLplayer.SetVar("G_IsPageComplete", IsPageComplete);
	console.log("UpdateCompletion function ended. Values at end of function:");
	console.log("Page Number: ", pageNumber);
	console.log("IsPageComplete: ", IsPageComplete);
	console.log("PageCompletionStatuses: ", PageCompletionStatuses);
}

