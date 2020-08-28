### @activities true
### @explicitHints true

# STOP:bit Radio Traffic Lights

## Introduction
### Introduction @unplugged
Please read the introduction on the left editor and follow the instructions.  When the tutorial indicates to start on this tutorial, then click the OK button to start. 

![Left Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/left-arrow.jpg)

## Basic Radio Receiver

### Step 1
Like we have previously did, we will start off with the same code and add the same blocks to request a crossing and be able to receive the message.
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

### Step 8 @unplugged
Connect your BBC micro:bit and click ``|Download|``. Once programmed, press button A to see if the stick person appears on both STOP:bits. 
You can press the reset button on the back of the BBC micro:bit to reset the code, then you can take turns pressing button A in each STOP:bit


### Token Managing @unplugged
Let's now return back to the other STOP:bit and code for crossing indicator.
![Left Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/left-arrow.jpg)

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

### Test the code @unplugged
Power both the STOP:bit and see if the system works .  Try the pressing button A and see if the crossing works.

### Bug the code @unplugged
Did neither of the traffic light sequences start? Did only the standing person show on the display? We seem to have a bug in our code.
Lets go to the other editor and see if we can work this out.
![Left Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/left-arrow.jpg)


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

### Code Done @unplugged
Power up both STOP:bit's see if the traffic light sequence starts by itself.  Try the crossing feature, let's see if the walking person appears when both STOP:bit's are on Red.


### Radio Traffic Light Tutorial Complete @unplugged
This tutorial is complete, we have learnt about token managed to code two alternating STOP:bit's working via radio messages and introduced a predestrian crossing.  
If you wish to try more tutorials visit the Kitronik STOP:bit page
http://www.kitronik.co.uk/5642