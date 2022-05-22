# HereCard
This is the FRONTEND repository for HereCard.

## Website: [Click](https://HereCard.akze.repl.co)
## BACKEND Repository: [ayy-akshat/HereCardBackend](https://github.com/ayy-akshat/HereCardBackend)

---

# HereCard

## HereCard- A faster way for attendance for students AND teachers!

## Inspiration
For centuries, people have been taking attendance the long way.
We wanted to make a system that allowed attendance to be taken easily and fast for both students AND teachers!

## What it does
First, a student scans their RFID *(Radio-Frequency Identification, the ID card they have)* on the scanner on the wall when they come to class.
The scanner sends the backend a request, updating them as present or late in the database, depending on the time.
The teacher can view attendance on the website to see who was absent, late, or present for the day in their class.
Teachers can also update attendance for their class. They can set a student as absent/late/present, through the website's simple user interface.

## How we built it
We used an Arduino connected to a Raspberry Pi for the hardware part, with an RFID module on the Arduino.
The Raspberry Pi code was made with Node-Red. For the backend, we used the Flask module (a web framework) in Python.
For the frontend, we made a website using HTML, CSS, and JS.

## Challenges
We didn’t have a wifi module for the Arduino, so we had to find a way around this, using something else to make web requests.
We decided to use a Raspberry Pi connected to the Arduino to make the web requests to the backend server.
We didn't know how to use node-red, which was what was used to run code in the Raspberry Pi when it got an event from the Arduino, but we learned how to use it and got past the challenge.

## Accomplishments
One great accomplishment we made was making our first hardware hack in a hackathon.
We haven't done hardware hacks in hackathons before, so it was a great learning experience.
Another achievement was making three different components of our product that all work seamlessly together without problems.


## What's next?
If this were to be used in the real world, this would be on the wall of all classrooms and all students would have their own RFIDs.
On the website, there is a section to make an order request. This includes a PayPal button, as well as saying "Your request has been sent!".
In a practical application of this product, there would be a maintenance team that approves the product requests, also managing the payments.
To be more practical for the payment, we could have it implemented into the actual website rather than having a PayPal.
The best idea for a practically made website for this product would have the process of the order request being automated, with the product ID coming with the physical product, that the user can link to their account.
