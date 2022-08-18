let red = false
forever(() => {
    const stop = modules.kitronikStopbitLights
    // stop
    stop.setRed(true)
    stop.setYellow(false)
    stop.setGreen(false)
    pause(1000)
    // green
    stop.setRed(false)
    stop.setYellow(false)
    stop.setGreen(true)
    pause(1000)
    // orange
    stop.setRed(false)
    stop.setGreen(false)
    stop.setYellow(true)
    pause(500)
})