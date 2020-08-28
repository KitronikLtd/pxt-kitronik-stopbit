### @activities true
### @explicitHints true

# STOP:bit Radio Traffic Lights

## Introduction
### Introduction @unplugged
Please read the introduction on the left editor and follow the instructions.  When the tutorial indicates to start on this tutorial, then click the OK button to start. 

![Left Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/left-arrow.jpg)

## Basic Radio Receiver

### Step 1
Now we need to setup the receiving STOP:bit, lets start on the receiver code.  We wil need to program this into the second micro:bit.
Like at the start of the previous code we need to indicate which BBC micro:bit this is and set the radio group.
Add the ``||radio:set Group||`` and set its group to match the previous code in the left editor (we used 1 in our example)to the ``||basic.onStart||``.  .

#### ~ tutorialhint
```blocks
radio.setGroup(1)
```

### Step 2
When the code starts we want our STOP:bit to be on Red.  Add ``||Kitronik_STOPbit.LightState||`` after the ``||radio:set Group||`` and set it to "Stop"
#### ~ tutorialhint
```blocks
radio.setGroup(1)
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
```

### Step 3
Now our code is ready to receive messages.  From the radio section drag in the ``||radio:on Receive String||``, this will have a text input within the block.

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {

})
```

### Step 4
Within the ``||radio:on Receive String||``, we need to check the received message is what we are expecting. If the message is something we know about we can handle it - we call the code that does something a handler. 
Add ``||logic:if||`` into the function, and compare the name equals "Forward".
Place an ``||logic:"" equals ""||`` compare block into the ``||logic:if||``. From the ``||radio:on Received String||``, click and drag the "Received String" variable into the start of the ``||logic:equals||`` block.  Now type into the other matching text box "Start Sequence".
The phrase "Start Sequence" needs to be spelt the same as the transmitter code and is case sensitive.
#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Start Sequence") {
    	
    }
})
```

### Step 5
Next, create a variable called "Start Lights".  Inside the if statement place ``||variables:set Start Lights||`` and set it to ``||logic:true||``
#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Start Sequence") {
        Start_Lights = true
    }
})
```

### Step 6
Now coding in the ``||basic:forever loop||``, add an ``||logic:if||`` and will be checking for ``||variables:Start Lights||`` ``||logic:equals||`` ``||logic:true||``.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Start_Lights == true) {
    	
    }
})
```

### Step 7
Inside this "if" bracket, place the traffic sequence.  At the start of our code we set the light to be at "stop" already, so will not need to do that again.
Our sequence will be shifted by one and goes "Get ready" -> "Go" -> "Ready to stop" -> "Stop".  Add this sequence along with the required pauses at the start and inbetween each step.
#### ~ tutorialhint
```blocks
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
    }
})
```

### Step 8
Let's try the code. Connect your secondary BBC micro:bit and click ``|Download|`` to transfer your code. When you have both STOP:bit's powered up press button A and see if the traffic lights start on the other STOP:bit.

### Basic Radio Receive message @unplugged
We now have two micro:bit's coded, but only one of them doing the traffic light sequence. Let's go back to the other STOP:bit and code it with the traffic light sequence.
When you are ready, lets go back to the Transmitter tutorial for the next stage.
![Left Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/left-arrow.jpg)

## Changing Directions

### Changing Directions @unplugged
We are going to receive some new radio messages to deal with from the changing of directions and stopping. Click the OK button and let's get started.

### Step 9
We added (on the other STOP:bit) two blocks for changing the variable "Start Lights" so it does not run the traffic light code again and to trigger the other to start.
Insert ``||variables:set Start Lights||`` to ``||logic:false||`` after the light sequence. Add a ``||radio:send String||``with "Start Sequence" after aswell.
#### ~ tutorialhint
```blocks
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

### Step 8
Let's code this with the secondary STOP:bit. Connect your secondary BBC micro:bit and click ``|Download|`` to transfer your code.
Once programmed, press button A on the other STOP:bit and see if they alternate traffic light sequence.

### Radio Traffic Light Tutorial Complete @unplugged
This tutorial is complete, we have managed to code two alternating STOP:bit's working via radio messages.  If you wish to try more tutorials visit the Kitronik STOP:bit page
http://www.kitronik.co.uk/5642