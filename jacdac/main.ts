namespace modules {
    /**
     * Traffic light controller for the Kitronik Stopbit lights
     */
    //% fixedInstance whenUsed block="kitronik stopbit"
    export const kitronikStopbitLights = new TrafficLightClient("kitronik stopbit?dev=self")
}

namespace servers {
    class TrafficLightServer extends jacdac.Server {
        private red: boolean = false
        private green: boolean = false
        private yellow: boolean = false

        constructor() {
            super(jacdac.SRV_TRAFFIC_LIGHT)

            this.show()
        }

        handlePacket(pkt: jacdac.JDPacket) {
            this.red = this.handleRegBool(pkt, jacdac.TrafficLightReg.Red, this.red)
            this.yellow = this.handleRegBool(pkt, jacdac.TrafficLightReg.Yellow, this.yellow)
            this.green = this.handleRegBool(pkt, jacdac.TrafficLightReg.Green, this.green)
            this.show()
        }

        show() {
            pins.digitalWritePin(DigitalPin.P0, this.red ? 1 : 0)
            pins.digitalWritePin(DigitalPin.P1, this.yellow ? 1 : 0)
            pins.digitalWritePin(DigitalPin.P2, this.green ? 1 : 0)
        }
    }

    function start() {
        jacdac.productIdentifier = 0x3f1efe95
        jacdac.startSelfServers(() => [new TrafficLightServer()])
    }
    start()
}
