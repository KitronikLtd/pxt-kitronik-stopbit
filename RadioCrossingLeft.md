### @activities true
### @explicitHints true

# STOP:bit Radio Traffic Lights with Pedestrian Crossing

## Introduction
### Introduction @unplugged
Learn how to use two Kitronik STOP:bits with radio to control the traffic light sequence with a pedestrian crossing. This will require two BBC micro:bits and two Kitronik STOP:bits.  
The code on the left editor will be for one STOP:bit, and the code on the right editor will be for the other STOP:bit. This tutorial will take you through a step-by-step guide for both sides of the code.  
It is recommended you complete the Pedestrian Crossing tutorial (click [here](https://makecode.microbit.org/#tutorial:https://github.com/KitronikLtd/pxt-kitronik-stopbit/PedestrianCrossing)) and the Radio Traffic Light tutorial (click [here](https://makecode.microbit.org/---multi#tutorial:https://github.com/KitronikLtd/pxt-kitronik-stopbit/RadioTrafficLightLeft:|:tutorial:https://github.com/KitronikLtd/pxt-kitronik-stopbit/RadioTrafficLightRight)) as this tutorial will combine these two elements.  
![Two Stopbits](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/two-stopbit.jpg)

## Basic Radio Trigger
### Step 1
Continuing on from the radio traffic light tutorial, we have our code that has the radio group set, and will run the traffic light sequence once it receives a string called "Start Sequence" from a radio message.

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
Let's create a variable called ``||variables:Crossing_Request||``, and then ``||variable:set Crossing_Request to||`` ``||logic:false||`` at the beginning of the ``||basic:on start||`` section.

#### ~ tutorialhint
```blocks
let Start_Lights = false
radio.setGroup(1)
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
let Crossing_Request = false
```

### Step 3
As previously said in other tutorials, pedestrain crossings are activated by a button press and an provide an indication that someone is waiting to cross.  
Add an ``||input:on button A||`` block, and inside the bracket add a ``||basic:show leds||`` block. Draw a standing person on the display.  
(**Hint:** Don't forget the BBC micro:bit is turned by 90° when attached to the STOP:bit).

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
After we have our stick person showing, we need the program to know that a crossing has been requested.  
Add ``||variable:set Crossing_Request to||`` ``||logic:true||`` after the ``||basic:show leds||`` block.

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
Now our STOP:bit knows a crossing is required, however, the other STOP:bit does not. We can send this via the radio messages.  
Add a ``||radio:send string||``block with the message "Crossing Requested" in the block.

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
We have got the indication that someone wants to cross and sent a message out via radio. The code at the moment does not check if it receives that message.  
Within the ``||radio:on radio receivedString||`` block, add another ``||logic:if||`` statement to check for the string "Crossing Requested".

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
Once "Crossing Requested" is received via radio, the picture of a standing person needs to be drawn using ``||basic:show leds||`` and then ``||variable:set Crossing_Request to||`` ``||logic:true||``.

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
Connect your BBC micro:bit and click ``|Download|``. Once programmed, press ``||input:button A||`` to see if the stick person appears.

### Transmitter Code Done @unplugged
Click the OK button on the right editor and start work on the receiver code. This will be adding in the same code as this tutorial so far.  
![Right Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/right-arrow.jpg)

## Deal with crossing request
### Step 9
When we have our token variable ``||variables:Start_Lights|`` set to ``||logic:true||``, it is our turn to decide if it is the traffic light sequence to run or whether to deal with a crossing request.  
Add in an ``||logic:if else||`` block at the start of the traffic light sequence. Make the ``||logic:if||`` check for ``||variables:Crossing_Request||`` ``||logic:= true||``.

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
If ``||variables:Crossing_Request||`` is **not** ``||logic:true||``, we want to run the the traffic light sequence.  
Move the traffic light sequence blocks into the ``||logic:else||`` bracket.

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
If ``||variables:Crossing_Request||`` **is** ``||logic:true||``, we want to run the the crossing sequence. This sequence will be to send a message out to run the crossing sequence, then display the walking person, pause to give time to cross, then clear the screen.  
Add a ``||radio:send string||`` block with the message "Cross" inside the ``||logic:if||`` bracket.

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
After the "Cross" message has been sent, let's display the walking person, pause and then clear the screen.  
Add a ``||basic:show leds||`` block with a walking person picture, followed by a ``||basic:pause||`` for 2 seconds (2000 milliseconds) and then ``||basic:clear screen||``.

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
To make sure that we have completed the task, ``||variable:set Crossing_Request to||`` ``||logic:false||``.

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
Now let's deal with the situation if the message is coming from the other token user.  
Add another ``||logic:if||`` block to the ``||radio:on radio receivedString||`` and check whether ``||radio:receivedString||`` ``||logic:= "Cross"||``.

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
The same crossing sequence needs to run inside this ``||logic:if||`` bracket.  
Add a ``||basic:show leds||`` block with a walking person picture, followed by a ``||basic:pause||`` for 2 seconds (2000 milliseconds), then ``||basic:clear screen||`` and o make sure that we have completed the task, ``||variable:set Crossing_Request to||`` ``||logic:false||``.

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
Click the OK button on the right editor and continue working on the other STOP:bit.  
![Right Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/right-arrow.jpg)

## Getting the start right
### Step 17
Looking at all the steps and the code we have got, there is no point at which we say which STOP:bit should go first. If we can impliment a start up check, where each STOP:bit picks a random number, waits for a period of time, then checks if it has not received a message from the other STOP:bit telling it to start, then that will solve our problem.  
Let's create a variable called ``||variables:start_delay||``.

### Step 18
At the end of the ``||basic:on start||`` section, add ``||variables:set start_delay to||`` ``||math:pick random||``. Set the range of the number to between '0' and '5'.

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
This random number will be used to set the length of time this STOP:bit has to wait before checking if it has received a message to start or not. So whichever STOP:bit checks first will tell the other to have the right of way and to go first.  
Next in ``||basic:on start||``, add a ``||loops:repeat||`` loop and insert the variable ``||variables:start_delay||`` in the repeat number slot. Inside the loop, place a ``||basic:pause||`` and set the time to 100 milliseconds.

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
Now the time delay has passed, let's check to see if a message has been received.  
Insert an ``||logic:if||`` block to check whether ``||variables:Start_Lights||`` ``||logic:= false||``.

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
If ``||variables:Start_Lights||`` ``||logic:= false||``, then we want to send a radio message to "Start Sequence".  
Inside the ``||logic:if||`` bracket, add a ``||radio:send string||`` block with the message "Start Sequence".

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

### Step 22
Connect your BBC micro:bit and click ``|Download|``.

### Transmitter Code Done @unplugged
Click the OK button on the right editor and continue working on the other STOP:bit.  
![Right Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/right-arrow.jpg)
