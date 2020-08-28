### @activities true
### @explicitHints true

# STOP:bit Radio Traffic Lights

## Introduction
### Introduction @unplugged
Learn how to use two Kitronik STOP:bit's with radio control's to traffic light sequence with a predestrian crossing. This will require two BBC micro:bit's and two Kitronik STOP:bit's.
The code on the left editor will be for one STOP:bit, the code on the right editor will be for the other STOP:bit.  This tutorial will take a step-by-step guide of both sides of the code.
It is recommended to complete the Predestrian Crossing tutorial click [here] (https://makecode.microbit.org/#tutorial:https://github.com/KitronikLtd/pxt-kitronik-stopbit/PredestrianCrossing) and the Radio Traffic light tutorial click [Here] (https://makecode.microbit.org/---multi#tutorial:https://github.com/KitronikLtd/pxt-kitronik-stopbit/RadioTrafficLightLeft:|:tutorial:https://github.com/KitronikLtd/pxt-kitronik-stopbit/RadioTrafficLightRight)
as this tutorial will combine these two elements together.
![Two Stopbits](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/two-stopbits.jpg)

## Basic radio trigger
### Step 1
Continuing on from the radio traffic light tutorial, we have our code that has the radio group set, and will run the traffic light sequence once it receives a string called " Start Sequence" from a radio message.
```template
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Start Sequence") {
        Start_Lights = true
    }
})
let Start_Lights = false
radio.setGroup(1)
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
basic.forever(function () {
    if (Start_Lights == true) {
        basic.pause(2000)
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.GetReady)
        basic.pause(500)
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
        basic.pause(2000)
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.ReadyToStop)
        basic.pause(1000)
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
        Start_Lights = false
        radio.sendString("Start Sequence")
    }
})
```

### Step 2
Let's create a variable called "Crossing Reqested" and ``||variable:set Crossing Requested||`` to ``||logic:false||``.
#### ~ tutorialhint
```blocks
let Start_Lights = false
radio.setGroup(1)
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
let Crossing_Request = false
```

### Step 3
As previously send me other tutorials, predestrain crossings are activated by a button press and an indication waiting to cross.
°Add ``||input:onButtonA||``. Inside the bracket add ``||basic:show leds||`` and draw a standing person on the display.  NOTE: the BBC micro:bit will be rotated 90° 
#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # #
        # # # . .
        . # . # #
        . . . . .
        `)
})
```

### Step 4
After we have our stick person showing, we need the code to know that a crossing has been requested.  Add ``||variable:set Crossing Requested||`` to ``||logic:true||`` after the ``||basic:show leds||``
#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # #
        # # # . .
        . # . # #
        . . . . .
        `)
    Crossing_Request = true
})
```

### Step 5
Now our STOP:bit knows a crossing is required.  However, the other STOP:bit does not.  We can send this via the radio messages. Add ``||radio:send string||`` with the string "Crossing Requested" in the block.
#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # #
        # # # . .
        . # . # #
        . . . . .
        `)
    Crossing_Request = true
    radio.sendString("Crossing Requested")
})
```

### Step 6
We have got the indication someone wants to cross and sent a message out via radio.  The code at the moment does not check if it receives that message.  Within the ``||radio:receive string||`` add a similar ``||logic:if||`` to check for the string "Crossing Requested".
#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Start Sequence") {
        Start_Lights = true
    }
    if (receivedString == "Crossing Requested") {

    }
})
```

### Step 7
Once "Crossing Requested" is received via radio, the same ``||basic:show leds||`` and ``||variable:set Crossing Requested||`` to ``||logic:true||``
#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Start Sequence") {
        Start_Lights = true
    }
    if (receivedString == "Crossing Requested") {
        basic.showLeds(`
            . . . . .
            . # . # #
            # # # . .
            . # . # #
            . . . . .
            `)
        Crossing_Request = true
    }
})
```

### Step 8
Connect your BBC micro:bit and click ``|Download|``. Once programmed, press button A to see if the stick person appears.


### Transmitter Code Done @unplugged
Click the OK button on the right editor and start work on the receiver code.  This will be adding in the same previous .
![Right Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/right-arrow.jpg)

## Deal with crossing request
### Step 9
When we have our token variable "Start Lights" set to true, it is our turn to decide if it is the traffic light sequence to run or deal with a crossing request.
Add in a ``||logic:if else||`` block at the start of the traffic light sequence. Make the ``||logic:if||`` check for ``||variable:set Crossing Requested||`` ``||logic:equal||`` ``||logic:true||``.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Start_Lights == true) {
        if (Crossing_Request == true) {
        	
        } else {
        	
        }
        basic.pause(2000)
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.GetReady)
        basic.pause(500)
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
        basic.pause(2000)
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.ReadyToStop)
        basic.pause(1000)
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
        Start_Lights = false
        radio.sendString("Start Sequence")
    }
})
```

### Step 10
If the "Crossing Request" is not true, we want to run the the traffic light sequence.  Move the required ``||basic:pause||`` and ``||Kitronik_STOPbit.trafficLightStatus||`` into the else bracket.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Start_Lights == true) {
        if (Crossing_Request == true) {
        	
        } else {
            basic.pause(2000)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.GetReady)
            basic.pause(500)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
            basic.pause(2000)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.ReadyToStop)
            basic.pause(1000)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
        }
        Start_Lights = false
        radio.sendString("Start Sequence")
    }
})
```

### Step 11
If the "Crossing Request" is equal to true, we want to run the the crossing sequence.  This sequence will be to send a message out to run the crossing sequence, then display the walking person, pause to give time to cross, then clear the screen.
Add a ``||radio:send string||`` saying "Cross" inside the ``||logic:if||`` bracket.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Start_Lights == true) {
        if (Crossing_Request == true) {
        	radio.sendString("Cross")
        } else {
            basic.pause(2000)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.GetReady)
            basic.pause(500)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
            basic.pause(2000)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.ReadyToStop)
            basic.pause(1000)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
        }
        Start_Lights = false
        radio.sendString("Start Sequence")
    }
})
```

### Step 12
After the "Cross" message has been sent lets display the walking person, pause and clear screen.
If the "Crossing Request" is equal to true, we want to run the the crossing sequence.  This sequence will be to send a message out to run the crossing sequence, then display the walking person, pause to give time to cross, then clear the screen.
Add a ``||basic:show leds||`` with a walking person picture, ``||basic:pause||`` for 2 seconds (2000 milliseconds) then ``||basic:clear screen||``.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Start_Lights == true) {
        if (Crossing_Request == true) {
            radio.sendString("Cross")
            basic.showLeds(`
                # . . . .
                . # . # #
                # # # # .
                . # . . #
                . . # . .
                `)
            basic.pause(2000)
            basic.clearScreen()
        } else {
            basic.pause(2000)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.GetReady)
            basic.pause(500)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
            basic.pause(2000)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.ReadyToStop)
            basic.pause(1000)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
        }
        Start_Lights = false
        radio.sendString("Start Sequence")
    }
})
```

### Step 13
To make sure that we have completed the task, lets ``||variable:Crossing Request||`` to ``||logic:false||``.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Start_Lights == true) {
        if (Crossing_Request == true) {
            radio.sendString("Cross")
            basic.showLeds(`
                # . . . .
                . # . # #
                # # # # .
                . # . . #
                . . # . .
                `)
            basic.pause(2000)
            basic.clearScreen()
            Crossing_Request = false
        } else {
            basic.pause(2000)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.GetReady)
            basic.pause(500)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
            basic.pause(2000)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.ReadyToStop)
            basic.pause(1000)
            Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
        }
        Start_Lights = false
        radio.sendString("Start Sequence")
    }
})
```

### Step 14
Now lets deal with the situation if the message is coming from the other token user. Add another ``||logic:if||`` and check `||radio:on Receive String||`` ``||logic:equals||`` "Cross"
#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Start Sequence") {
        Start_Lights = true
    }
    if (receivedString == "Crossing Requested") {
        basic.showLeds(`
            . . . . .
            . # . # #
            # # # . .
            . # . # #
            . . . . .
            `)
        Crossing_Request = true
    }
    if (receivedString == "Cross") {

    }
})
```

### Step 15
Inside this if statement needs to run the same crossing sequence. Add a ``||basic:show leds||`` with a walking person picture, ``||basic:pause||`` for 2 seconds (2000 milliseconds) then ``||basic:clear screen||``.#### ~ tutorialhint
#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Start Sequence") {
        Start_Lights = true
    }
    if (receivedString == "Crossing Requested") {
        basic.showLeds(`
            . . . . .
            . # . # #
            # # # . .
            . # . # #
            . . . . .
            `)
        Crossing_Request = true
    }
    if (receivedString == "Cross") {
        basic.showLeds(`
            # . . . .
            . # . # #
            # # # # .
            . # . . #
            . . # . .
            `)
        basic.pause(2000)
        basic.clearScreen()
        Crossing_Request = false
    }
})
```

### Step 16
Connect your BBC micro:bit and click ``|Download|``.

### Transmitter Code Done @unplugged
Click the OK button on the right editor and start work on the other STOP:bit.  This will be adding in the same previous .
![Right Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/right-arrow.jpg)

### Step 17
Looking at all the steps and the code we have got, there is not a point where we say which STOP:bit goes first.  
If can impliment a start up check, where each STOP:bit picks a random number, waits for a period of time, then checks if it has not received a message to then tell the other STOP:bit to start.
Let's create a variable called ``||variable:start delay||``.

### Step 18
In the end of the ``||basic:on start||``. Add ``||variable:set start delay||`` to ``||math:pick random||``.  We will set the range of the number to between '0' and '5'.
#### ~ tutorialhint
```blocks
let Crossing_Request = false
let Start_Lights = false
Start_Lights = false
Crossing_Request = false
radio.setGroup(1)
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
let start_delay = randint(0, 5)
```

### Step 19
This random number generated will set the length of time this STOP:bit has to wait before checking if it has received a message to start or not.  So whichever STOP:bit checks first will tell the other to have right of way and to go first.
Next add a ``||loops:repeat||`` and insert the variable ``||variable:start delay||``.  Inside the loop wil insert a ``||basic:pause||`` and will keep the time set to 100 milliseconds.
#### ~ tutorialhint
```blocks
let Crossing_Request = false
let Start_Lights = false
Start_Lights = false
Crossing_Request = false
radio.setGroup(1)
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
let start_delay = randint(0, 5)
for (let index = 0; index < start_delay; index++) {
    basic.pause(100)
}
```

### Step 20
Now the time delay has passed, lets check to see if a message has been received.  
Insert a ``||logic:if||`` to check for ``||variable:Start Lights||````||logic:equals||````||logic:false||``.
#### ~ tutorialhint
```blocks
let Crossing_Request = false
let Start_Lights = false
Start_Lights = false
Crossing_Request = false
radio.setGroup(1)
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
let start_delay = randint(0, 5)
for (let index = 0; index < start_delay; index++) {
    basic.pause(100)
}
if (Start_Lights == false) {

}
```

### Step 21
If ``||variable:Start Lights||`` ``||logic:equals||`` ``||logic:false||``, then we want to send a radio message to "Start Sequence". Inside the "if" bracket add ``||radio:send string||`` "Start Sequence".
#### ~ tutorialhint
```blocks
let Crossing_Request = false
let Start_Lights = false
Start_Lights = false
Crossing_Request = false
radio.setGroup(1)
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
let start_delay = randint(0, 5)
for (let index = 0; index < start_delay; index++) {
    basic.pause(100)
}
if (Start_Lights == false) {
    radio.sendString("Start Sequence")
}
```

### Step 16
Connect your BBC micro:bit and click ``|Download|``.

### Transmitter Code Done @unplugged
Click the OK button on the right editor and start work on the other STOP:bit.  This will be adding in the same previous .
![Right Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/right-arrow.jpg)
