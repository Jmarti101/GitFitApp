let random;

document.getElementById("rollBtn").onclick = function(){

    let random = Math.floor(Math.random()*10);
    

    switch(random) {
        case 1:
            document.getElementById("quote__field").innerHTML = "The greatest power of ruling consists in the exercise of self-control.";   
            document.getElementById("img").src = "seneca.png"; 
            document.getElementById("name__field").innerHTML = "- Seneca";
            /* SENECA*/
            break;
        case 2:
            document.getElementById("quote__field").innerHTML = "Since the time of the ancient Greeks, we have always felt that there was a close relationship between a strong vital mind and physical fitness.";   
            document.getElementById("img").src = "JFK.png"; 
            document.getElementById("name__field").innerHTML = "- JFK ";
            /* JFK*/
            break;
        case 3:
            document.getElementById("quote__field").innerHTML ="The lack of activity destroys the good condition of every human being, while the movement and methodical physical exercise save it and preserve it.";   
            document.getElementById("img").src = "plato.png"; 
            document.getElementById("name__field").innerHTML = "- Plato";
            /* Plato*/
                break;
        case 4:
            document.getElementById("quote__field").innerHTML = "We are what we repeatedly do. Excellence, then, is not an act, but a habit.";   
            document.getElementById("img").src = "aristotle.png"; 
            document.getElementById("name__field").innerHTML = "- Aristotle";
            /* aristotle*/
                break; 
        case 5:
            document.getElementById("quote__field").innerHTML = "There is nothing impossible to him who will try";  
            document.getElementById("img").src = "alex.png"; 
            document.getElementById("name__field").innerHTML = "- Alexander The Great";
            /* alexander the great*/ 
            break;
        case 6:
            document.getElementById("quote__field").innerHTML = "We cannot live better than in seeking to become better.";  
            document.getElementById("img").src = "seneca.png"; 
            document.getElementById("name__field").innerHTML = "- Socrates";
            /* Socrates*/ 
            break; 
        case 7:
            document.getElementById("quote__field").innerHTML = "It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable"; 
            document.getElementById("img").src = "socrates.png"; 
            document.getElementById("name__field").innerHTML = "- Socrates";
            /* Socrates*/  
                break;
        case 8:
            document.getElementById("quote__field").innerHTML = "The true man is revealed at difficult times."; 
            document.getElementById("img").src = "epictetus.png"; 
            document.getElementById("name__field").innerHTML = "- Epictetus";
            /* epictetus*/  
                break;  
        case 9:
            document.getElementById("quote__field").innerHTML = "The brave man is he who overcomes not only his his enemies but his pleasures.";   
            document.getElementById("img").src = "democritus.png"; 
            document.getElementById("name__field").innerHTML = "- Democritus";
            /* democritus*/
                    break;
        case 10:
            document.getElementById("quote__field").innerHTML = "Devote the rest of your life to making progress.";   
            document.getElementById("img").src = "epictetus.png"; 
            document.getElementById("name__field").innerHTML = "- Epictetus";
            /* epictetus*/
                    break;
                           


    }

}