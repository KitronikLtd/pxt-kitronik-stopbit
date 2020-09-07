### @activities true
### @explicitHints true

# STOP:bit Traffic Light and Pedestrian Crossing

## Introduction
### Introduction @unplugged
Learn how to use the Kitronik STOP:bit and code a traffic light sequence that has an pedestrian crossing. 

![StopBit on red](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/stop-bit-red-light-on.jpg)

## Assembly
### Step 1
Following on from the basic traffic link sequence tutorial (if you have not done that recommended to do first), let create the traffic light sequence in the ``||basic:forever||`` bracket.
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
We can use the buttons on the BBC micro:bit to start our crossing. Add ``||input:onButtonA||`` block into the code.
#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
	
})
```

### Step 4
Next we need to create a ``||variables||`` called "Crossing Request". Place a ``||variables:set Crossing Request||`` block into the ``||input:onButtonA||`` bracket and its going to be set to ``||logic:true||``.
#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    Crossing_Request = true
})
```

### Step 5
At a normal crossing, once the button has been pressed to indicated a person wishes to cross, there is an indication that the button has been pressed. 
We can use the BBC micro:bit display for this same indication. Add a ``||basic:showLeds||`` after ``||variables:set Crossing Request||``
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
Traditionally for predestrians crossing have a "Red person" and a "Green person" to show when to stop and wait and when to walk.  
In the ``||basic:showLeds||`` block, click on the square to chose which LED on the display turns on and create a stick person standing.
HINT: Dont forget the BBC micro:bit is turned by 90 degrees
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
Connect your BBC micro:bit and click ``|Download|``.  Let's see if your stick person appears when button A is pressed.

### Predestrian Crossing Indication @unplugged
Now we have the indication that someone wants to cross.  
The traffic light sequence needs to check at if there is a crossing requested. Have a think if you know what stage the traffic lights are before crossing?

### Step 8
Traditionally for predestrians crossing occours when the "Red" light is on. Insert a ``||logic:if||``. The if-statement needs to check if the variable "Crossing Request" is equal to "true".
Insert into the if block ``||variables:Crossing Request||`` ``||logic:equals||`` ``||logic:true||``.
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
Once button A is pressed, any code within the if bracket will be used. Next we need to indicate that it is time to cross. Insert a ``||basic:showLeds||`` and draw a walking person.

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
Let's connect the BBC micro:bit and click ``|Download|``and test our code.  Press button A, see if you get a walking person when the traffic light is on Red.


### Walking man on screen @unplugged
So we got the walking person appearing.  But there seems to be a couple of issues with our code (these are also known as bugs).  
> Once the walking person appeared, the traffic light sequence continued. 
> The walking person always stays on screen.

Certainly can not have people walking out onto on coming traffic. Seem like we need to add some more code to fix this.
![Bug in code](https://KitronikLtd.github.io/pxt-kitronik-stopbit/assets/bug-green.jpg)

### Step 11
To halt the traffic light sequence we need to add a ``||basic:pause||`` and set this to 2 seconds (2000 milliseconds).  This should give people time to cross.
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
Now we have finished crossing, lets ``||basic:clear screen||`` after our ``||basic:pause||``.  Our crossing request is complete, it is best to ``||variables:set Crossing Request||`` to ``||logic:false||``.  This will stop running the code within the if statement until button A is pressed again.
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
Connect your BBC micro:bit and click ``|Download|``.  Let's see if all of our bugs have been fixed.

### Traffic Light and Predestrian Crossing Tutorial Complete @unplugged
The work is all working correctly, well done! In this tutorial we have covered button interfaces, screen display and fixing errors in the code. We have completed the tutorial.  If you wish to try more tutorials visit the Kitronik STOP:bit page
http://www.kitronik.co.uk/5642
