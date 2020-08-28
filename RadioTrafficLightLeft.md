### @activities true
### @explicitHints true

# STOP:bit Radio Traffic Lights

## Introduction
### Introduction @unplugged
Learn how to use two Kitronik STOP:bit's with radio control's to alternate traffic light sequences. This will require two BBC micro:bit's and two Kitronik STOP:bit's.
The code on the left editor will be for one STOP:bit, the code on the right editor will be for the other STOP:bit.
This form of radio control will be working on a passing a token method of a control system. 
This tutorial will take a step-by-step guide of both sides of the code.

![Two Stopbits](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/two-stopbits.jpg)

## Basic radio trigger
### Step 1
micro:bit radio's talk in groups. We need to set the radio group the two micro:bit's are in, so that they wil communicate with each other. The group can be any number 1-255, in this example we will use 1. If there are several micro:bit radio pairs then each pair should use a different number.     
From the radio section, place the ``||radio:set Group||`` into the ``||basic.onStart||`` block and set the group to 1.

#### ~ tutorialhint
```blocks
radio.setGroup(1)
```

### Step 2
We want to send a radio message to the other STOP:bit to do something, such as start the traffic light sequence on a button press. 
When sending any radio messages we will send a string. The name acts as a 'token', so the reciever knows when it has received to start the traffic light sequence.
Add ``||input:onButtonA||``. To send the message, from the radio section add ``||radio:send String||`` this will let us send a name and value to the receiving STOP:bit.  
The string will be an instruction to "Start Sequence"
#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString("Start Sequence")
})
```

### Step 3
Now we have a basic controller to send a message to the receiving STOP:bit to start the traffic light sequence.  Connect your BBC micro:bit and click ``|Download|``.


### Transmitter Code Done @unplugged
Click the OK button on the right editor and start work on the receiver code.  Once that tutorial is complete, come back and click OK to get to the next stage.
![Right Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/right-arrow.jpg)

## Traffic Light sequence
### Step 5
Now lets add in the same code we have just been doing so that they both can do the traffic light sequence. 
Add ``||Kitronik_STOPbit.LightState||`` after the ``||radio:set Group||`` and set it to "Stop".
#### ~ tutorialhint
```blocks
radio.setGroup(1)
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
```

### Step 6
We now need to be able to write the code to receive our 'token'. From the radio section drag in the ``||radio:on Receive String||``, this will have a text input within the block.

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {

})
```

### Step 7
Within the ``||radio:on Receive String||``, we need to check the received message is what we are expecting. If the message is something we know about we can handle it - we call the code that does something a handler. 
Place an ``||logic:"" equals ""||`` compare block into the ``||logic:if||``. From the ``||radio:on Received String||``, click and drag the "Received String" variable into the start of the ``||logic:equals||`` block.  Now type into the other matching text box "Start Sequence".
The phrase "Start Sequence" needs to be spelt the same as the transmitter code and is case sensitive.
#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Start Sequence") {
    	
    }
})
```

### Step 8
Next, create a variable called "Start Lights".  Inside the if statement place ``||variables:set Start Lights||`` and set it to ``||logic:true||``. Once we have our 'token' we can set the variable ready to start.
#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Start Sequence") {
        Start_Lights = true
    }
})
```

### Step 9
Now coding in the ``||basic:forever loop||``, add an ``||logic:if||`` and will be checking for ``||variables:Start Lights||`` ``||logic:equals||`` ``||logic:true||``.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Start_Lights == true) {
    	
    }
})
```

### Step 10
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

### Step 11
After we have finished out light sequence and to make sure the code does not run again until a new message has been received. Insert ``||variables:set Start Lights||`` to ``||logic:false||``
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
Currently we have two STOP:bit's with the traffic light sequence that will run when it receives a message. Normally when one traffic light is finished it will trigger to start the next.  
We can do this by adding a ``||radio:send String||``with "Start Sequence" at the end of the traffic light code
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
Connect your transmitter BBC micro:bit and click ``|Download|``. Let's try the code and see how it controls the speed on the :MOVE Motor.

### Transmitter Code Pause @unplugged
We now have added additional code for this STOP:bit to automatically send a message to the other STOP:bit.  However, we did not add this in the right-handside editor.  Let's switch over and add two blocks.
![Right Arrow](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/right-arrow.jpg)
