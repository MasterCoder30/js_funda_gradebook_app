/*step 1*/

function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
      
    }
    return(sum / scores.length);
  
  }
  
  /*console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));*/

  /*step 2*/

  function getGrade(score) {
    let grade=" ";
      if (score===100){
        grade="A++";
        
      }else if (score<=99 && score >= 90){
        grade = "A";
        
      }else if (score <= 89 && score >= 80){
        grade = "B";
        
      }else if (score <= 79 && score >= 70){
        grade = "C"
      
      }else if (score <= 68 && score >= 60){
        grade = "D"
        
      }else {
        grade = "F"
      }
      return grade;
    }
    
    /*console.log(getGrade(96));
    console.log(getGrade(82));
    console.log(getGrade(56));*/

    /*step 3*/

    function hasPassingGrade(score) {
      if (score>59){
        return true;
      } else{
        return false;
      }
    }

    /*step 4*/

    function studentMsg(totalScores, studentScore) {
      if (getAverage(totalScores) > 59, getGrade(studentScore) !== "F") {
          return "Class average: " + getAverage(totalScores) + "." + " Your grade: " + getGrade(studentScore) + "." + " You passed the course.";
      } else {
          return "Class average: " + getAverage(totalScores) + "." + " Your grade: " + getGrade(studentScore) + "." + " You failed the course.";
      }
  }
  
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));