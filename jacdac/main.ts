// % deprecated
namespace Kitronik_STOPbit {
}

namespace modules {
    /**
     * Traffic light controller for the Kitronik Stopbit lights
     */
    //% fixedInstance whenUsed block="kitronik stopbit"
    export const kitronikStopbitLights = new TrafficLightClient("kitronik stopbit?dev=self")
}

namespace servers {
    function toDisplayLights(b: boolean): Kitronik_STOPbit.DisplayLights {
        return b ? Kitronik_STOPbit.DisplayLights.On : Kitronik_STOPbit.DisplayLights.Off
    }
    class TrafficLightServer extends jacdac.Server {
        private red: boolean
        private green: boolean
        private yellow: boolean

        constructor() {
            super(jacdac.SRV_TRAFFIC_LIGHT)
        }

        handlePacket(pkt: jacdac.JDPacket) {
            this.red = this.handleRegBool(pkt, jacdac.TrafficLightReg.Red, this.red)
            this.green = this.handleRegBool(pkt, jacdac.TrafficLightReg.Green, this.green)
            this.yellow = this.handleRegBool(pkt, jacdac.TrafficLightReg.Yellow, this.yellow)

            Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, toDisplayLights(this.red))
            Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, toDisplayLights(this.green))
            Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, toDisplayLights(this.yellow))
        }
    }

    jacdac.productIdentifier = 0x3f1efe95
    function start() {
        jacdac.startSelfServers(() => [new TrafficLightServer()])
    }
    start()
}
