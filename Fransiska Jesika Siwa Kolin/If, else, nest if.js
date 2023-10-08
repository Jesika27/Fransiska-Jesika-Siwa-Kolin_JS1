//if
var Moodkamusaatini = prompt("Mood kamu saat ini 1-5?", 0);

        if(Moodkamusaatini >3 ){
        document.write("<h2>sangat baik</h2>");
        }
        document.write("<p>Kamu terdeteksi bahagia</p>");
        

//else

if (Moodkamusaatini >3 ){
    document.write("Kamu terdeteksi bahagia")
} else {"Kamu setress"}


//nest if
var username = prompt("Username:");
var password = prompt("Password:");

        if(username == "Invinitelearning"){
        if(password == "Fransiska") {
            document.write("<h2>Welcome to this page!</h2>");
        } else {
            document.write("<p>Incorrect password, try again!</p>");
        }
        } else {
        document.write("<p>You are not registered!</p>");
        }