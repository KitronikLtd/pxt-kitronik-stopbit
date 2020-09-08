### @activities true
### @explicitHints true

# STOP:bit Radio Traffic Lights

## Introduction
### Introduction @unplugged
Please read the introduction on the left editor and follow the instructions.  
When the tutorial indicates to start on this tutorial, then click the OK button to start.  
![Left Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/left-arrow.jpg)

## Basic Radio Receiver
### Step 1
Now we need to set up the receiving STOP:bit. We will need to program this into the second micro:bit.  
Like at the start of the previous code, we need to indicate which BBC micro:bit this is and set the radio group. Add the ``||radio:set group||`` block to the ``||basic.onStart||`` section and set its group to match the one in the left editor (we used 1 in our example). 

#### ~ tutorialhint
```blocks
radio.setGroup(1)
```

### Step 2
When the code starts, we want our STOP:bit to be on "Red".  Add a ``||Kitronik_STOPbit.Make Traffic Light state||`` block after ``||radio:set group||`` and set it to ``||Kitronik_STOPbit.Stop||``.

#### ~ tutorialhint
```blocks
radio.setGroup(1)
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
```

### Step 3
Now our code is ready to receive messages.  
From the ``||radio:Radio||`` category, drag in the ``||radio:on radio receivedString||`` block - this will have a text input within the block.

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {

})
```

### Step 4
Within the ``||radio:on radio receivedString||`` block, we need to check the received message is what we are expecting. If the message is something we know about we can handle it - we call the code that does something a handler.  
Add an ``||logic:if||`` block inside the block and check the received message is "Start Sequence". Place an ``||logic:" " = " "||`` compare block into the ``||logic:if||`` statement. From the ``||radio:on radio receivedString||``, drag ``||variables:receivedString||`` into the first text section, and then type "Start Sequence" into the comparison text box. (**Note:** Make sure the spelling and letter cases are identical to the sent message).

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Start Sequence") {
    	
    }
})
```

### Step 5
Next, create a variable called ``||variables:Start_Lights||``, and inside the ``||logic:if||`` section, ``||variables:set Start_Lights to||`` ``||logic:true||``.

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Start Sequence") {
        Start_Lights = true
    }
})
```

### Step 6
Now in the ``||basic:forever||`` loop, add an ``||logic:if||`` block which will be checking whether ``||variables:Start_Lights||`` ``||logic:= true||``.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Start_Lights == true) {
    	
    }
})
```

### Step 7
Inside this ``||logic:if||`` bracket, create the traffic light sequence. At the start of our code, we set the light to be at "Stop" already, so do not include that again.  
Our sequence will be shifted by one and goes "Get ready" **->** "Go" **->** "Ready to stop" **->** "Stop". Add this sequence, along with the required ``||basic:pauses||`` at the start and inbetween each step.

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
Let's try the code. Connect your second BBC micro:bit and click ``|Download|`` to transfer your code.  
When you have both STOP:bits powered up, press ``||input:button A||`` on the first one and see if the traffic lights start on the other STOP:bit.

### Basic Radio Receive message @unplugged
We now have two micro:bits coded, but only one of them doing the traffic light sequence. Let's go back to the other STOP:bit and code it with the traffic light sequence.  
When you are ready, let's go back to the Transmitter tutorial for the next stage.  
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
