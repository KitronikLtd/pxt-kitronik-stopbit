//Forever loop with set traffic light state to stop, wait 1sec, then turn the Red light off.
//Resulting in the red light flashing on for 1sec and then off for 1sec
basic.forever(() => {
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    basic.pause(1000)
})