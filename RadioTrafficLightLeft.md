### @activities true
### @explicitHints true

# STOP:bit Radio Traffic Lights

## Introduction
### Introduction @unplugged
Learn how to use two Kitronik STOP:bits with radio controls to alternate traffic light sequences. This will require two BBC micro:bits and two Kitronik STOP:bits.  
The code on the left editor will be for one STOP:bit, and the code on the right editor will be for the other STOP:bit.  
This form of radio control will be using a 'passing a token method' of control system.  
This tutorial will take you through a step-by-step guide for both sides of the code.  
  
![Two Stopbits](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/two-stopbit.jpg)

## Basic radio trigger
### Step 1
micro:bit radios talk in groups. We need to set a radio group for the two micro:bits so that they will communicate with each other. The group can be any number from 1-255 - in this example we will use 1. If there are several micro:bit radio pairs then each pair should use a different number.  
From the ``||radio:Radio||`` cateogry, place the ``||radio:set group||`` block into the ``||basic: on start||`` section and set the group to 1.

#### ~ tutorialhint
```blocks
radio.setGroup(1)
```

### Step 2
We want to send a radio message to the other STOP:bit to do something, such as start the traffic light sequence on a button press. When sending any radio messages we will send a string. The name acts as a 'token', so the reciever knows when to start the traffic light sequence.  
Add an ``||input:on button A||`` block. To send the message, from the ``||radio:Radio||`` category add a ``||radio:send string||`` block. This will let us send some text to the receiving STOP:bit. The string will be an instruction to "Start Sequence".

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString("Start Sequence")
})
```

### Step 3
Now we have a basic controller to send a message to the receiving STOP:bit to start the traffic light sequence.  
Connect your BBC micro:bit and click ``|Download|``.

### Transmitter Code Done @unplugged
Click the OK button on the right editor and start work on the receiver code.  
Once that tutorial is complete, come back and click OK to get to the next stage.  
![Right Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/right-arrow.jpg)

## Traffic Light sequence
### Step 5
Now let's add in the same code we have just been doing so that they can both do the traffic light sequence.  
Add a ``||Kitronik_STOPbit.Make Traffic Light state||`` block after ``||radio:set group||`` and set it to ``||Kitronik_STOPbit.Stop||``.

#### ~ tutorialhint
```blocks
radio.setGroup(1)
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
```

### Step 6
We now need to be able to write the code to receive our 'token'. From the ``||radio:Radio||`` category, drag in the ``||radio:on radio receivedString||`` block - this will have a text input within the block.

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {

})
```

### Step 7
Within the ``||radio:on radio receivedString||`` block, we need to check the received message is what we are expecting. If the message is something we know about we can handle it - we call the code that does something a handler.  
Add an ``||logic:if||`` block inside the block and check the received message is "Start Sequence". Place an ``||logic:" " = " "||`` compare block into the ``||logic:if||`` statement. From the ``||radio:on radio receivedString||``, drag ``||variables:receivedString||`` into the first text section, and then type "Start Sequence" into the comparison text box. (**Note:** Make sure the spelling and letter cases are identical to the sent message).

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Start Sequence") {
    	
    }
})
```

### Step 8
Next, create a variable called ``||variables:Start_Lights||``, and inside the ``||logic:if||`` section, ``||variables:set Start_Lights to||`` ``||logic:true||``.  
Once we have our 'token', we can set the variable ready to start.

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Start Sequence") {
        Start_Lights = true
    }
})
```

### Step 9
Now in the ``||basic:forever||`` loop, add an ``||logic:if||`` block which will be checking whether ``||variables:Start_Lights||`` ``||logic:= true||``.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Start_Lights == true) {
    	
    }
})
```

### Step 10
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

### Step 11
After we have finished our light sequence, we need to make sure the code does not run again until a new message has been received.  
Insert ``||variables:set Start_Lights to||`` ``||logic:false||``.

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
    }
})
```

### Step 12
Currently we have two STOP:bits with the traffic light sequence which will run when they receive a message. Normally when one traffic light is finished it will trigger the next one to start.  
We can do this by adding a ``||radio:send string||`` block at the end of the traffic light code, with the message "Start Sequence".

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

### Step 13
Connect your transmitter BBC micro:bit and click ``|Download|``.

### Transmitter Code Pause @unplugged
We now have added additional code for this STOP:bit to automatically send a message to the other STOP:bit.  
However, we did not add this in the right-hand side editor. Let's switch over and add the final blocks.  
![Right Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/right-arrow.jpg)
