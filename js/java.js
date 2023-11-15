const y1 = new Audio('audio/rec1.wav');
const y2 = new Audio('audio/rec2.wav');
const y3 = new Audio('audio/rec3.wav');
const y4 = new Audio('audio/rec4.wav');
const y5 = new Audio('audio/rec5.wav');
const y6 = new Audio('audio/rec6.wav');
const y7 = new Audio('audio/rec7.wav');
const y8 = new Audio('audio/rec8.wav');
const y9 = new Audio('audio/rec9.wav');
const y10 = new Audio('audio/rec10.wav');
//const y11 = new Audio('audio/rec11.wav');
//const y12 = new Audio('audio/rec12.wav');
//const y13 = new Audio('audio/rec13.wav');
//const y14 = new Audio('audio/rec14.wav');
//const y15 = new Audio('audio/rec15.wav');
//const y16 = new Audio('audio/rec16.wav');
//const y17 = new Audio('audio/rec17.wav');
//const y18 = new Audio('audio/rec18.wav');
//const y19 = new Audio('audio/rec19.wav');
//const y20 = new Audio('audio/rec20.wav');
var audios = [y1, y2, y3, y4, y5, y6, y7, y8, y9, y10];
//var audios2 = [y1, y2, y3, y4, y5, y6, y7, y8, y9, y10];
//var audios = [y1, y2, y3, y4, y5, y6, y7, y8, y9, y10,y11,y12,y13,y14,y15,y16,y17,y18,y19,y20];
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//var nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//var nums [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var words = ["Άρμα", "Όπλο", "Πίστη", "Χαίρε", "Κούκου", "Μέλι", "Άμμος", "Φέτα", "Ήχος", "Μούρα"];
var words2 = ["αρμα", "οπλο", "πιστη", "χαιρε", "κουκου", "μελι", "αμμος", "φετα", "ηχος", "μουρα"];
var words3 = ["άρμα", "όπλο", "πίστη", "χαίρε", "κούκου", "μέλι", "άμμος", "φέτα", "ήχος", "μούρα"];
var words4 = ["ΑΡΜΑ", "ΟΠΛΟ", "ΠΙΣΤΗ", "ΧΑΙΡΕ", "ΚΟΥΚΟΥ", "ΜΕΛΙ", "ΑΜΜΟΣ", "ΦΕΤΑ", "ΗΧΟΣ", "ΜΟΥΡΑ"];
var words5 = ["ΆΡΜΑ", "ΌΠΛΟ", "ΠΙΣΤΗ", "ΧΑΙΡΕ", "ΚΟΥΚΟΥ", "ΜΕΛΙ", "ΆΜΜΟΣ", "ΦΕΤΑ", "ΉΧΟΣ", "ΜΟΥΡΑ"];
var words6 = ["ARMA", "OPLO", "PISTI", "XAIRE", "KOUKOU", "MELI", "AMMOS", "FETA", "IXOS", "MOURA"];
var words7 = ["arma", "oplo", "pisti", "xaire", "koukou", "meli", "ammos", "feta", "ixos", "moura"];
var words8 = ["Arma", "Oplo", "Pisti", "Xaire", "Koukou", "Meli", "Ammos", "Feta", "Ixos", "Moura"];
var words9 = ["Αρμα", "Οπλο", "Πιστη", "Χαιρε", "Κουκου", "Μελι", "Αμμος", "Φετα", "Ηχος", "Μουρα"];
//var words4 = ["ΑΡΜΑ", "ΟΠΛΟ", "ΠΙΣΤΗ", "ΧΑΙΡΕ", "ΚΟΥΚΟΥ", "ΜΕΛΙ", "ΑΜΜΟΣ", "ΦΕΤΑ", "ΗΧΟΣ", "ΜΟΥΡΑ", "", "", "", "", "", "", "", "", "", ""];
const original = ["Άρμα", "Όπλο", "Πίστη", "Χαίρε", "Κούκου", "Μέλι", "Άμμος", "Φέτα", "Ήχος", "Μούρα"];
//const original = ["Άρμα", "Όπλο", "Πίστη", "Χαίρε", "Κούκου", "Μέλι", "Άμμος", "Φέτα", "Ήχος", "Μούρα", "", "", "", "", "", "", "", "", "", ""];
var correctsword = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//var correctsword = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var correctsattempt = [0, 0, 0, 0, 0];

n_test = 5;
n_words = 10;
n_train = 2;
i = 0;
count = 0;
correct = 0;

function initial() {
    audios = [y1, y2, y3, y4, y5, y6, y7, y8, y9, y10];
    
//var audios = [y1, y2, y3, y4, y5, y6, y7, y8, y9, y10,y11,y12,y13,y14,y15,y16,y17,y18,y19,y20];
    nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
//var nums [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
//var words4 = ["ΑΡΜΑ", "ΟΠΛΟ", "ΠΙΣΤΗ", "ΧΑΙΡΕ", "ΚΟΥΚΟΥ", "ΜΕΛΙ", "ΑΜΜΟΣ", "ΦΕΤΑ", "ΗΧΟΣ", "ΜΟΥΡΑ", "", "", "", "", "", "", "", "", "", ""];
    words = ["Άρμα", "Όπλο", "Πίστη", "Χαίρε", "Κούκου", "Μέλι", "Άμμος", "Φέτα", "Ήχος", "Μούρα"];
    words2 = ["αρμα", "οπλο", "πιστη", "χαιρε", "κουκου", "μελι", "αμμος", "φετα", "ηχος", "μουρα"];
    words3 = ["άρμα", "όπλο", "πίστη", "χαίρε", "κούκου", "μέλι", "άμμος", "φέτα", "ήχος", "μούρα"];
    words4 = ["ΑΡΜΑ", "ΟΠΛΟ", "ΠΙΣΤΗ", "ΧΑΙΡΕ", "ΚΟΥΚΟΥ", "ΜΕΛΙ", "ΑΜΜΟΣ", "ΦΕΤΑ", "ΗΧΟΣ", "ΜΟΥΡΑ"];
    words5 = ["ΆΡΜΑ", "ΌΠΛΟ", "ΠΙΣΤΗ", "ΧΑΙΡΕ", "ΚΟΥΚΟΥ", "ΜΕΛΙ", "ΆΜΜΟΣ", "ΦΕΤΑ", "ΉΧΟΣ", "ΜΟΥΡΑ"];
    words6 = ["ARMA", "OPLO", "PISTI", "XAIRE", "KOUKOU", "MELI", "AMMOS", "FETA", "IXOS", "MOURA"];
    words7 = ["arma", "oplo", "pisti", "xaire", "koukou", "meli", "ammos", "feta", "ixos", "moura"];
    words8 = ["Arma", "Oplo", "Pisti", "Xaire", "Koukou", "Meli", "Ammos", "Feta", "Ixos", "Moura"];
    words9 = ["Αρμα", "Οπλο", "Πιστη", "Χαιρε", "Κουκου", "Μελι", "Αμμος", "Φετα", "Ηχος", "Μουρα"];
}

function training() {
    $("#play").show();
    $("#quit").show();
    alert("Training starts now.\nPlease click on the play button to continue, or the quit button to terminate the training any time.");
}

function testing() {
    initial();
    correct = 0;
    shuffle_two_arrays_identically();
    rearrange();
    $("#play").show();
    $("#quit").show();
    alert("Testing starts now.\nPlease click on the play button to continue, or the quit button to terminate the training any time.");
}

function quit() {
    i = 0;
    count = 0;
    $("#play").hide();
    $("h2").hide();
    $("#quit").hide();
}

function quit2() {
    i = 0;
    count = 0;
    $("#play").hide();
    $("h2").hide();
    $("#quit").hide();
    $("#user-ans").hide();
    $("#submit").hide();
    $("#count2").hide();
}

function play() {
    if (count == n_train) quit();
    else {
        audios[i].play();
        $("h2").show();
        j = i + 1;
        document.getElementById("change").innerHTML = words[i];
        document.getElementById("count").innerHTML = j + '/' + n_words;
        if (i == n_words - 1) {
            i = 0;
            count++;
        }
        else i++;
    }
}

function play2() {
    if (count == n_test) {

        google.charts.setOnLoadCallback(drawBasic);
        google.charts.setOnLoadCallback(drawBasic2);
        quit2();
    }
    else {
        if (i == n_words) {
            i = 0;
            count++;
            if (count != n_test) alert("Attempt" + count + "finished.nPlease click on the play button to continue.")
            else {
                alert("Attempt" + count + "finished.")
                google.charts.setOnLoadCallback(drawBasic);
                google.charts.setOnLoadCallback(drawBasic2);
                quit2();
            }
            correct = 0;
            initial();
            shuffle_two_arrays_identically();
            rearrange();
        }
        else {
            $("#change").hide();
            $("#correct").hide();
            $("#congrats").hide();
            $("#user-ans").show();
            document.getElementById("user-ans").value = "Type your answer here...";
            $("#submit").show();
            $("#count2").show();
            audios[i].play();
            j = i + 1;
            document.getElementById("change").innerHTML = words[i];
            document.getElementById("count2").innerHTML = j + '/' + n_words;
            i++;
        }
    }
}

function submit() {
    var input = document.getElementById("user-ans").value;

    document.getElementById("user-ans").value = "";
    if (correctcheck(input) == 1) {
        correct++;
        correctsattempt[count]++;
        correctsword[original.indexOf(words[i - 1])]++;
        $("#congrats").show();
        $("#change").hide();
        $("#correct").hide();

    }
    else if (input != "" && input != "Type your answer here...") {
        $("#change").show();
        $("#correct").show();
        $("#congrats").hide();
    }
}

var input2 = document.getElementById("user-ans");
input2.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("submit").click();
    }
});

function shuffle_two_arrays_identically() {
    "use strict";
    var l = audios.length,
        k = 0,
        rnd,
        tmp1,
        tmp2;

    while (k < l) {
        rnd = Math.round(Math.random() * k)
        tmp1 = audios[k]
        tmp2 = nums[k]
        audios[k] = audios[rnd]
        nums[k] = nums[rnd]
        audios[rnd] = tmp1
        nums[rnd] = tmp2
        k += 1
    }
}

function rearrange() {
    tmp = [];
    tmp2 = [];
    tmp3 = [];
    tmp4 = [];
    tmp5 = [];
    tmp6 = [];
    tmp7 = [];
    tmp8 = [];
    tmp9 = [];
    for (let c = 0; c < 10; c++) {
        tmp[c] = words[nums[c]];
        tmp2[c] = words2[nums[c]];
        tmp3[c] = words3[nums[c]];
        tmp4[c] = words4[nums[c]];
        tmp5[c] = words5[nums[c]];
        tmp6[c] = words6[nums[c]];
        tmp7[c] = words7[nums[c]];
        tmp8[c] = words8[nums[c]];
        tmp9[c] = words9[nums[c]];
    }
    for (let c = 0; c < 10; c++) {
        words[c] = tmp[c];
        words2[c] = tmp2[c];
        words3[c] = tmp3[c];
        words4[c] = tmp4[c];
        words5[c] = tmp5[c];
        words6[c] = tmp6[c];
        words7[c] = tmp7[c];
        words8[c] = tmp8[c];
        words9[c] = tmp9[c];
    }
}

//function rearrange(){
    //tmp=[]
    //for (let c = 0; c < 20; c++)
        //tmp[c] = words[nums[c]];
    //for (let c = 0; c < 20; c++)
        //words[c] = tmp[c];
//}

function correctcheck(x) {
    if ((x == words[i - 1]) || (x == words2[i - 1]) || (x == words3[i - 1]) || (x == words4[i - 1]) || (x == words5[i - 1]) || (x == words6[i - 1]) || (x == words7[i - 1]) || (x == words8[i - 1]) || (x == words9[i - 1]))
        return 1;
    else return 0;
}

google.charts.load('current', { packages: ['corechart', 'bar'] });

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Word', 'Correct answers',],
        [original[0], correctsword[0]],
        [original[1], correctsword[1]],
        [original[2], correctsword[2]],
        [original[3], correctsword[3]],
        [original[4], correctsword[4]],
        [original[5], correctsword[5]],
        [original[6], correctsword[6]],
        [original[7], correctsword[7]],
        [original[8], correctsword[8]],
        [original[9], correctsword[9]]
       // [original[0], correctsword[0]],
        //[original[1], correctsword[1]],
       // [original[2], correctsword[2]],
       // [original[3], correctsword[3]],
       // [original[4], correctsword[4]],
       // [original[5], correctsword[5]],
        //[original[6], correctsword[6]],
       // [original[7], correctsword[7]],
        //[original[8], correctsword[8]],
       // [original[9], correctsword[9]]
    ]);

    var options = {
        title: 'Amount of correct answers per word',
        chartArea: { width: '50%' },
        hAxis: {
            title: 'Correct answers',
            minValue: 0,
            format: '0',
            viewWindowMode: "explicit", viewWindow: { min: 0 }
        },
        vAxis: {
            title: 'Word',
            minValue: 0
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);

}

function drawBasic2() {

    var data = google.visualization.arrayToDataTable([
        ['Attempt', 'Correct answers',],
        ["1", correctsattempt[0]],
        ["2", correctsattempt[1]],
        ["3", correctsattempt[2]],
        ["4", correctsattempt[3]],
        ["5", correctsattempt[4]],
    ]);

    var options = {
        title: 'Amount of correct answers per attempt',
        chartArea: { width: '50%' },
        hAxis: {
            title: 'Correct answers',
            minValue: 0,
            format: '0',
            viewWindowMode: "explicit", viewWindow: { min: 0 }
        },
        vAxis: {
            title: 'Attempt',
            minValue: 0
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));

    chart.draw(data, options);
}