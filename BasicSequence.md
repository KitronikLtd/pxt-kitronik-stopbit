### @activities true
### @explicitHints true

# STOP:bit Traffic Light Sequence

## Introduction
### Introduction @unplugged
Learn how to use the Kitronik STOP:bit and code a basic traffic light sequence with a BBC micro:bit. 

![Stop-Bit-Red-Light-On](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/Stop-Bit-Red-Light-On.jpg)

## Assembly
### Step 1 @unplugged
If not already done, attach the BBC micro:bit onto STOP:bit.  Click ![Here] (https://resources.kitronik.co.uk/pdf/5642-stop-bit-bbc-microbit-pedestrian-crossing-traffic-light-datasheet.pdf) is a link to the datasheet to guide you. 


### Step 2
To make sure the STOP:bit and BBC micro:bit are working.  The first part of code creating will turn all the lights on and off on buttons presses.  Add ``||input:onButtonA||``

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
	
})
```

### Step 3
From the STOP:bit blocks, add into the ``||input:onButtonA||`` bracket three ``||Kitronik_STOPbit.trafficLightLED||``.
#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
})
```

### Step 4
Notice all of the blocks have the colour "Red" selected.  Change one block to "Yellow" and another to "Green".
#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
})
```

### Step 5
All the LED's will turn on with the button press.  See if you can create the similar code to turn them the LED's off when ``||input:onButtonB||`` is pressed.
#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
})
```

### Step 6
Connect your BBC micro:bit and click ``|Download|``.  Once programmed, power the BBC micro:bit and press button A and B to see if the lights turn on and off.


### Lights are working @unplugged
Our lights and assembly are working. Great! Lets start the next step to coding the light sequence.  For this get a pen and paper see if you can write down the traffic light sequence. Think about which lights are on and off as well.
Once you are done, come back and click OK to get to the next stage.
![Note-Green](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/Note-Green.jpg)

## Traffic light Sequence

### Step 7
To get the traffic light sequence to continuosly repeat.  Our code will be using the ``||basic:forever||`` bracket.  The previously used code in the ``||input:onButtonA||`` and ``||input:onButtonB||`` can be removed.
#### ~ tutorialhint
```blocks
basic.forever(function () {

})
```

### Step 8
Hopefully from your written down traffic light sequence, there should be four stages. "Stop", "Get ready", "Go", "Prepare to stop".  Let's code the first of these.  
Add three ``||Kitronik_STOPbit.trafficLightLED||``. Make sure each block has a different colour selected.  In this stage only the "Red" light is turned on, the others are turned "off"
#### ~ tutorialhint
```blocks
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
})
```

### Step 9
Between each stage of the traffic light sequence there is a pause.  This pause needs to be added in.  Add a ``||basic:pause||`` to the end of the code.  Set the time for 1 second (1000 milliseconds).
#### ~ tutorialhint
```blocks
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
})
```

### Step 10
Next stage of the sequence is "Get ready" which has "Red" and "Yellow" turned on and "Green" off. Add three ``||Kitronik_STOPbit.trafficLightLED||`` below the current code. Don't forget the pause at the end.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
})
```

### Step 11
Time to Go!.  Add another three ``||Kitronik_STOPbit.trafficLightLED||`` and set only the "Green" LED on and a pause before the next stage.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(1000)
})
```

### Step 12
Now we need to place the final traffic light sequence in to prepare the traffic to stop. Add another three ``||Kitronik_STOPbit.trafficLightLED||`` and set only the "Yellow" LED on and a pause before the next stage.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
})
```

### Step 13
Connect your BBC micro:bit and click ``|Download|``.  Once programmed, power the BBC micro:bit and see if there is traffic light sequence is correct.

### Optimis Your Code @unplugged
If you have got your traffic light sequence Well Done! We have worked out how to step along a sequence and code each of those steps.
When looking at the code, it does look very long.  There is a way we can improve the code and get short with the same functionality. Let's see what we can do.

### Step 14
Looking at the code, we instruct each light every time whether it should be on or off.  We only need to add the block of when the LED changes state. First lets have a look at the second stage of the sequnce.
The only change from the first stage to the second is the "Yellow" LED turning on.  Lets remove the "Red" and "Green" blocks in this stage.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
})
```

### Step 15
From the third stage, all the lights change state so no changes can be made there.  The forth stage, the "Red" LED does not change so that can be removed from the code.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
})
```

### Step 16
See if you can see which blocks in the first stage can be removed. Only remove the blocks where the LED stays the same from the previous traffic light sequence.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
})
```

### Step 17
Connect your BBC micro:bit and click ``|Download|``.  Once programmed, power the BBC micro:bit and see if there is traffic light sequence remains the same.

### Traffic Light Tutorial Complete @unplugged
Did the traffic light sequence remain the same? We have been successful in optimising our code and making it more streamline. We have completed the tutorial.  If you wish to try more tutorials visit the Kitronik STOP:bit page
http://www.kitronik.co.uk/5642