---
toc: True
comments: True
layout: post
title: Fried Rice
description: Fried Rice Recipe
courses: {'compsci': {'week': 6}}
type: hacks
---
<!DOCTYPE html>
<html>
<head>
    <title>1.5 Minute Timer</title>
    <style>
        /* CSS for the timer and circle */
        #timer-container {
            text-align: center;
            margin-top: 20px;
        }
        
        #timer {
            font-size: 24px;
            font-weight: bold;
            position: relative;
            display: inline-block;
        }
        
        .circle {
            width: 200px;
            height: 200px;
            background-color: #3498db;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: countdown 90s linear infinite;
        }
        
        @keyframes countdown {
            0% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <h1>1.5 Minute Timer</h1>
    <div id="timer-container">
        <div id="timer">01:30</div>
        <div class="circle"></div>
    </div>
    
    <script>
        // Set the initial time in seconds
        var timeLeft = 90; // 1.5 minutes
        
        // Function to update the timer
        function updateTimer() {
            var minutes = Math.floor(timeLeft / 60);
            var seconds = timeLeft % 60;
            
            // Add leading zeros to single-digit minutes and seconds
            var formattedTime = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
            
            // Display the formatted time in the "timer" element
            document.getElementById("timer").innerHTML = formattedTime;
            
            // Check if the timer has reached 0
            if (timeLeft === 0) {
                alert("Time's up!");
                clearInterval(timerInterval);
            } else {
                // Decrement the time left
                timeLeft--;
            }
        }
        
        // Call the updateTimer function every second
        var timerInterval = setInterval(updateTimer, 1000);
    </script>
</body>
</html>