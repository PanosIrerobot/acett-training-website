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
var audios = [y1, y2, y3, y4, y5, y6, y7, y8, y9, y10];
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var opts = ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6', 'opt7', 'opt8', 'opt9', 'opt10']
var labels = ['label1', 'label2', 'label3', 'label4', 'label5', 'label6', 'label7', 'label8', 'label9', 'label10']
var words = ["Άρμα", "Όπλο", "Πίστη", "Χαίρε", "Κούκου", "Μέλι", "Άμμος", "Φέτα", "Ήχος", "Μούρα"];
const original = ["Άρμα", "Όπλο", "Πίστη", "Χαίρε", "Κούκου", "Μέλι", "Άμμος", "Φέτα", "Ήχος", "Μούρα"];
var correctsword = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var correctsattempt = [0, 0, 0, 0, 0];

n_test = 3;
n_words = 10;
n_train = 2;
i = 0;
first = 0;
count = 0;
correct = 0;


$("#quiz1").hide();

$("#quiz2").hide();

function initial() {
    audios = [y1, y2, y3, y4, y5, y6, y7, y8, y9, y10];
    nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    opts = ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6', 'opt7', 'opt8', 'opt9', 'opt10'];
    labels = ['label1', 'label2', 'label3', 'label4', 'label5', 'label6', 'label7', 'label8', 'label9', 'label10']
    words = ["Άρμα", "Όπλο", "Πίστη", "Χαίρε", "Κούκου", "Μέλι", "Άμμος", "Φέτα", "Ήχος", "Μούρα"];
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
    $("#quiz1").hide();
    $("#quiz2").hide();
    $("h2").hide();
    $("#quit").hide();
    $("#submit2").hide();
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
    for (let w = 0; w < 10; w++) {
        document.getElementById(labels[w]).style.color = 'white'
        document.getElementById(opts[w]).checked = false;
    }
    first = 0;
    if (count == n_test) {

        google.charts.setOnLoadCallback(drawBasic);
        google.charts.setOnLoadCallback(drawBasic2);
        quit2();
    }
    else {
        if (i == n_words) {
            i = 0;
            count++;
            if (count != n_test) alert(correct + "/" + n_words + " correct answers.\nPlease click on the play button to continue.")
            else {
                alert(correct + "/" + n_words + " correct answers.")
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

            $("#quiz1").show();
            $("#quiz2").show();
            $("#submit2").show();
            $("#count2").show();
            audios[i].play();
            j = i + 1;
            document.getElementById("count2").innerHTML = j + '/' + n_words;
        }
    }
}

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
    tmp10 = [];
    tmp11 = [];
    for (let c = 0; c < 10; c++) {
        tmp[c] = words[nums[c]];
        tmp10[c] = opts[nums[c]];
        tmp11[c] = labels[nums[c]];
    }
    for (let c = 0; c < 10; c++) {
        words[c] = tmp[c];
        opts[c] = tmp10[c];
        labels[c] = tmp11[c];
    }
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
        /* ["4", correctsattempt[3]],
        ["5", correctsattempt[4]], */
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

function displayAnswer1() {
    if (first == 0) {
        if (document.getElementById(opts[i]).checked) {
            document.getElementById(labels[i]).style.color = 'white'
            correct++;
            correctsattempt[count]++;
            correctsword[original.indexOf(words[i - 1])]++;
        }
        else {
            for (let a = 0; a < 10; a++) {
                if (document.getElementById(opts[a]).checked) {
                    document.getElementById(labels[a]).style.color = 'white'

                    break;
                }
            }
            document.getElementById(labels[i]).style.color = 'white'
        }
        i++;
        first = 1
		/* alert("Προχώρησε στην επόμενη λέξη.") */
    }
    else{
        alert("Προχώρησε στην επόμενη λέξη.")
    }
}