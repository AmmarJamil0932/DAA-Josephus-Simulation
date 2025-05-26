Josephus Problem Simulation (k = 2)
This project is a simple web-based simulation of the Josephus Problem. In this problem, a group of people are arranged in a circle, and every 2nd person is eliminated one by one until only one person is left. The simulation shows this process visually, allowing the user to understand how the elimination proceeds and who the final survivor is.

Objective
The main objective of this project is to help users understand the logic behind the Josephus Problem using animation and interaction. Instead of solving it mathematically, users can visually observe each step of the elimination and see how the survivor is determined.

Features
This simulation allows users to enter the number of people (from 1 to 50) who will be arranged in a circular layout. The program then starts eliminating every second person and logs the elimination order. The last remaining person is declared as the survivor and is visually highlighted. There are three main buttons: Start to begin the simulation, Stop to pause it, and Resume to continue from where it stopped. Sound effects are also included to make the simulation more engaging.

Files Included
This project contains the following files:

index.html — The main HTML file that sets up the structure of the web page.

style.css — The stylesheet that controls the layout, appearance of the circle, buttons, and log entries.

script.js — The JavaScript file that contains the core logic of the simulation, including animation, elimination process, and sound handling.

pop.mp3 — A short sound effect that plays whenever a person is eliminated.

success.mp3 — A sound that plays when the final survivor is determined.

How to Use
To use this simulation, open the index.html file in a web browser. In the input field, enter the number of people you want to include (maximum 50), then click the Start button to begin. You will see people placed in a circle, and one by one, every second person will be eliminated. You can pause the simulation using the Stop button and resume it later with the Resume button. The log section below the circle shows the elimination history.

About the Josephus Problem
The Josephus Problem is a well-known theoretical problem in computer science and mathematics. It involves a group of people standing in a circle. Starting from a given point, every k-th person is removed from the circle, and the process continues until only one person is left. This simulation uses a fixed value of k = 2, meaning every second person is eliminated in each cycle.

Notes
This simulation is best viewed on a modern web browser. The number of people is limited to 50 to keep the circle clear and readable. The audio sounds will only play if your browser allows autoplay of media. If audio is not working, try clicking anywhere on the page to enable sound playback.
