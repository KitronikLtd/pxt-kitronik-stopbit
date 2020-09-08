### @activities true
### @explicitHints true

# STOP:bit Traffic Light and Pedestrian Crossing

## Introduction
### Introduction @unplugged
Learn how to use the Kitronik STOP:bit and code a traffic light sequence that has a pedestrian crossing. 

![StopBit on red](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/stop-bit-red-light-on.jpg)

## Assembly
### Step 1
Following on from the Basic Traffic Light Sequence tutorial (if you have not done that, it is recommended to complete it first), let's create the traffic light sequence in the ``||basic:forever||`` loop.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(500)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
})
```

### Step 2
Connect your BBC micro:bit and click ``|Download|``.  Make sure your traffic light sequence is correct.

### Step 3
We can use the buttons on the BBC micro:bit to start our crossing. Add an ``||input:on button A||`` block into the code.

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
	
})
```

### Step 4
Next we need to create a variable called ``||variables:Crossing_Request||``. Place a ``||variables:set Crossing_Request||`` block into the ``||input:on button A||`` bracket and set it to be ``||logic:true||``.

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    Crossing_Request = true
})
```

### Step 5
At a normal crossing, once the button has been pressed to indicate a person wishes to cross, there is an indication that the button has been pressed.  
We can use the BBC micro:bit display for this. Add a ``||basic:show leds||`` block after ``||variables:set Crossing_Request||``.

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    Crossing_Request = true
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
```

### Step 6
Traditionally, pedestrian crossings have a "Red person" and a "Green person" to show when to stop and wait and when to walk.  
In the ``||basic:show leds||`` block, click on the square to chose which LED on the display turns on and create a stick person standing.  
HINT: Don't forget the BBC micro:bit is turned by 90 degrees when attached to the STOP:bit.

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    Crossing_Request = true
    basic.showLeds(`
        . . . . .
        . # . # #
        # # # . .
        . # . # #
        . . . . .
        `)
})
```

### Step 7
Connect your BBC micro:bit and click ``|Download|``.  Let's see if your stick person appears when ``||input:button A||`` is pressed.

### Predestrian Crossing Indication @unplugged
Now we have the indication that someone wants to cross.  
The traffic light sequence needs to check if there is a crossing request. Have a think if you know what stage the traffic lights are at before crossing?

### Step 8
Traditionally, pedestrians will cross when the "Red" light is on for the traffic. Insert an ``||logic:if||`` block at the end of this stage. The ``||logic:if||``-statement needs to check if the variable ``||variables:Crossing_Request||`` is ``||logic:true||``.  
Into the ``||logic:if||`` block, insert ``||variables:Crossing_Request||`` ``||logic:= true||``.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    if (Crossing_Request == true) {
    	
    }
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(500)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
})
```

### Step 9
Once ``||input:button A||`` is pressed, any code within the ``||logic:if||`` bracket will be used. Next, we need to indicate that it is time to cross.  
Insert a ``||basic:show leds||`` into the ``||logic:if||`` block and draw a walking person.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    if (Crossing_Request == true) {
        basic.showLeds(`
            # . . . .
            . # . # #
            # # # # .
            . # . . #
            . . # . .
            `)
    }
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(500)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
})
```

### Step 10
Let's connect the BBC micro:bit and click ``|Download|`` and test our code. Press ``||input:button A||`` and see if you get a walking person when the traffic light is Red.

### Walking man on screen @unplugged
So, we got the walking person appearing, but there seems to be a couple of issues with our code (these are also known as bugs):    
* Once the walking person appeared, the traffic light sequence continued.   
* The walking person always stays on screen.  
  
Certainly we cannot have people walking out onto oncoming traffic. It seems like we need to add some more code to fix this.  
  
![Bug in code](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/bug-green.jpg)

### Step 11
To halt the traffic light sequence, we need to add a ``||basic:pause||`` inside the ``||logic:if||`` section and set this to 2 seconds (2000 milliseconds).  
This should give people time to cross.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    if (Crossing_Request == true) {
        basic.showLeds(`
            # . . . .
            . # . # #
            # # # # .
            . # . . #
            . . # . .
            `)
        basic.pause(2000)
    }
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(500)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
})
```

### Step 12
Now we have finished crossing, let's ``||basic:clear screen||`` after our ``||basic:pause||``.  Our crossing request is complete, so it is best to ``||variables:set Crossing_Request||`` to ``||logic:false||``.  
This will stop running the code within the ``||logic:if||`` statement until ``||input:button A||`` is pressed again.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    if (Crossing_Request == true) {
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
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(500)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
})
```

### Step 13
Connect your BBC micro:bit and click ``|Download|``. Let's see if all of our bugs have been fixed.

### Traffic Light and Pedestrian Crossing Tutorial Complete @unplugged
The traffic lights and crossing are all working correctly, well done! In this tutorial we have covered button interfaces, screen display and fixing errors in the code.  
We have completed the tutorial. If you wish to try more tutorials, visit the Kitronik STOP:bit page: http://www.kitronik.co.uk/5642
