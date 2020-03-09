

// Summing value of each array

// var sumArray = function(arr) {
//     var result = 0;

//     for (var i = 0; i < arr.length; i++) {
//       var currentNumber = arr[i];
//       result += currentNumber;
//     }

//     return result;
//   };


var countDown = 500;
var start = "START";
// pseudo code
// 1. Click start

document.getElementById("quizBtn").innerHTML = JSON.stringify(start);

//  - make event listener for onclick

var startClick = document.getElementById("quizBtn").addEventListener("click", function () {
                                                                                                    // - timer starts counting down

    var x = setInterval(function () {
        countDown--;
        document.getElementById("counter").innerHTML = countDown;

        if (countDown < 0) {
            clearInterval(x);
            document.getElementById("counter").innerHTML = "Time's Up!";

        }
    }, 1000);

})

    // - heading changes to question
    // - start button is now the answer choices
    // - progress bar grows

    // 2. timer starts
    //  - make a big block for each step to run inside
    // 3. questions start
    // 4. answering a question leads to another
    // 5. wrong answers subtract time
    // 6. all questions answers OR time = 0
    // 7. Game over shows score and lets user enter initials
    // 8. score and initials get saved in ranked list
    // 9. user is presented with start screen


    // document.getElementById("quizBlock"). = 



    // < button type = "button" class="answer1A btn btn-secondary btn-lg btn-block" > Block level button</button >
    //     <button type="button" class="answer1B btn btn-secondary btn-lg btn-block">Block level button</button>
    //     <button type="button" class="answer1C btn btn-secondary btn-lg btn-block">Block level button</button>
    //     <button type="button" class="answer1D btn btn-secondary btn-lg btn-block">Block level button</button>

    //     <button type="button" class="answer2A btn btn-secondary btn-lg btn-block">Block level button</button>
    //     <button type="button" class="answer2B btn btn-secondary btn-lg btn-block">Block level button</button>
    //     <button type="button" class="answer2C btn btn-secondary btn-lg btn-block">Block level button</button>
    //     <button type="button" class="answer2D btn btn-secondary btn-lg btn-block">Block level button</button>
