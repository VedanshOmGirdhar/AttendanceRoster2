name_of_the_students_array = [];

function submit()
{
    var display_student_array = [];

    for(var i = 1; i<=4; i++) 
    {
        var name_of_the_student = document.getElementById("name_of_the_student_"+i).value;
        console.log(name_of_the_student);
        name_of_the_students_array.push(name_of_the_student);
        console.log(name_of_the_students_array);
    }
    var length_of_array = name_of_the_students_array.length;
    console.log(length_of_array);
    
    for(var g = 0; g<=length_of_array; g++)
    {
        display_student_array.push(name_of_the_students_array[g]);
        console.log(display_student_array);
        
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none"
    document.getElementById("sort_button").style.display = "inline-block"
}




function sorting() {
    name_of_the_students_array.sort();
    var display_sortednames = [];
    var length_of_array = name_of_the_students_array.length;
    console.log(length_of_array);
    
    for(var g = 0; g<=length_of_array; g++)
    {
        display_sortednames.push(name_of_the_students_array[g]);
        console.log(display_sortednames);
        
    }

    var remove_commas = display_sortednames.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

}


