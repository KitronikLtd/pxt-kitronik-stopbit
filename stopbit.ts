/**
 * Kitronik Stopbit Package
 * Version 1.0
 * Release Date:
 */
//% weight=100 color=#00A654 icon="\uf1b9" block="Kitronik STOP:bit"
namespace Kitronik_STOPbit {

    /**
     * Different states the traffic light can enter
     */
    export enum LightStates {
        //% block="Stop"
        Stop,
        //% block="Get Ready"
        GetReady,
        //% block="Go"
        Go,
        //% block="Ready To Stop"
        ReadyToStop
    }

    /**
     * Traffic light colour options
     */
    export enum LightColours {
        //% block="Red"
        Red,
        //% block="Yellow"
        Yellow,
        //% block="Green"
        Green
    }

    /**
     * Traffic light on/off states
     */
    export enum DisplayLights {
        //% block="On"
        On = 1,
        //% block="Off"
        Off = 0
    }

    /**
     * Select a traffic light state
     * @param lightState 
     */
    //% blockId="set_traffic_light_state" block="Make Traffic Light state to %lightState|"
    //% weight=80 blockGap=8
    export function trafficLightState(lightState: LightStates): void {

        if (lightState == LightStates.Stop) {
            //write pin 0 to high and pin 1,2 to low
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
        else if (lightState == LightStates.GetReady) {
            //write pin 0,1 to high and pin 2 to low
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
        else if (lightState == LightStates.Go) {
            //write pin 2  to hight and pin 0,1 to low
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
        }
        else if (lightState == LightStates.ReadyToStop) {
            //write pin 1 to high and pin0,2 to low
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    }

    /**
     * Select a light and turn it on or off
     * @param ledColour
     * @param illumination
     */
    //% blockId="set_traffic_light_led" block="Turn %ledColour|Traffic Light %illumination|"
    //% weight=70 blockGap=8
    export function trafficLightLED(ledColour: LightColours, illumination: DisplayLights): void {

        if (ledColour == LightColours.Red) {
            //write pin 0 with eDisplayLights
            pins.digitalWritePin(DigitalPin.P0, illumination)
        }
        else if (ledColour == LightColours.Yellow) {
            //write pin 1 with eDisplayLights
            pins.digitalWritePin(DigitalPin.P1, illumination)
        }
        else if (ledColour == LightColours.Green) {
            //write pin 2 with eDisplayLights
            pins.digitalWritePin(DigitalPin.P2, illumination)
        }
    }

}