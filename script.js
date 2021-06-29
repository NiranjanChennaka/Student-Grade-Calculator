alert("Welcome to Grading System");
function Grading()
{
    var sub1,sub2,sub3,sub4,i,total=0,k=0,ttotal=600,passed,count=0;
     passed=document.getElementById("Passed").innerHTML="Congratulations :) You have Passed in all Subjects";
    
    const marks=[];
    var s="";
    
    
    sub1=Number(document.getElementById("Telugu").value);
    if(sub1<=100)
        marks.push(sub1);
    if(sub1<40)
    {
        count++;
        s=s+"Tel/Sans,"

    }
        

    sub2=Number(document.getElementById("Hindi").value);
    if(sub2<=100)
        marks.push(sub2);

    if(sub2<40)
    {
        count++;
        s=s+"Hindi,";
    }

    sub3=Number(document.getElementById("English").value);
    if(sub3<=100)
         marks.push(sub3);
    
    if(sub3<40)
    {
        count++;
        s=s+"English,";
    }

    sub4=Number(document.getElementById("Maths").value);
    if(sub4<=100)
         marks.push(sub4);

    
    if(sub4<40)
    {
         count++;
         s=s+"Maths,";
    }
 
    sub5=Number(document.getElementById("Science").value);
    if(sub5<=100)
         marks.push(sub5);

    
    if(sub5<40)
    {
         count++;
         s=s+"Science,";
    }
    sub6=Number(document.getElementById("Social").value);
    if(sub6<=100)
        marks.push(sub6);
    
    if(sub6<40)
    {
        count++;
        s=s+"Sociall";
    }

    s = s.slice(0,s.length-1);

    for(i=0;i<marks.length;i++)
    {
      total+=marks[i];
      //document.write(marks[i]+" ");
    }
    //document.write(total);
   // document.write(marks[0]);

    var percen=(total/ttotal)*100;
    document.getElementById("percentage").innerHTML = percen +"%";
    if(sub1>=40 && sub2>=40 && sub3>=40 && sub4>=40 && sub5>=40 && sub6>=40)
    {
            if(percen>=90 && percen<=100)
            {
                document.getElementById("Grade").innerHTML = "A+";
                passed;
            }
            if(percen>=80 && percen<=89)
            {
                document.getElementById("Grade").innerHTML = "A";
                passed;
            }
            if(percen>=75 && percen<=79)
            {
                document.getElementById("Grade").innerHTML = "B+";
                passed;
            }
            if(percen>=70 && percen<=74)
            {
                document.getElementById("Grade").innerHTML = "B";
                passed;
            }
            if(percen>=65 && percen<=69)
            {
                document.getElementById("Grade").innerHTML = "C+";
                passed;
            }
            if(percen>=60 && percen<=64)
            {
                document.getElementById("Grade").innerHTML = "C";
                passed;
            }
            if(percen>=55 && percen<=59)
            {
                document.getElementById("Grade").innerHTML = "D+";
                passed;
            }
            if(percen>=50 && percen<=54)
            {
                document.getElementById("Grade").innerHTML = "D";
                passed;
            }
            if(percen>=40 && percen<=49)
            {
                document.getElementById("Grade").innerHTML = "E";
                passed;
            }
            // if(percen>=0 && percen<=39)
            // {
            //     document.getElementById("Grade").innerHTML = "F";
            //     document.getElementById("failed").innerHTML="Sorry, You have Failed";
            // }
    }
        else
        {
            if(count==1)
            {
                document.getElementById("Grade").innerHTML = "F";
                document.getElementById("Passed").innerHTML="Sorry, You Have Failed in "+count+" Subject "+"(i.e "+s+")";
            }
            else
            {
                
                document.getElementById("Grade").innerHTML = "F";
                document.getElementById("Passed").innerHTML="Sorry, You Have Failed in "+count+" Subjects "+"(i.e "+s+")";

            }
        }
    
}
