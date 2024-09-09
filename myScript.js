function showResult(){
    var semester1Score = parseFloat(document.getElementById("semester1").value);
    var semester2Score = parseFloat(document.getElementById("semester2").value);
    var year = document.getElementById("year");
    var semesterYear = parseInt(year.options[year.selectedIndex].value);


    var average;
    if(semesterYear == 1){
        average = (semester1Score + semester2Score)/2;
        document.getElementById('average').value = average;
    }else if (semesterYear == 2) {
        average = (semester1Score + (semester2Score * 2)) /3;
        document.getElementById('average').value = average;
    }else {
        average = (semester1Score + (semester2Score * 3)) /4;
        document.getElementById('average').value = average;
    }
    var result;
    document.getElementById('result').style.color = "red"
    document.getElementById('result').style.fontSize = "32px"
    if (average > 9) {
        result = "Học sinh xuất sắc";
    }else if(average >= 8) {
        result = "Học sinh giỏi";
    }else if (average >= 5) {
        result = "Học sinh khá";
    }else{
        result = "Học sinh yếu";
    }
    document.getElementById('result').innerHTML = result;

}

function resetInput() {
    document.getElementById('semester1').value = "";
    document.getElementById('semester2').value = "";
    document.getElementById('year').value = "1";
    document.getElementById('average').value = "";
    document.getElementById('result').innerHTML = "";
}


