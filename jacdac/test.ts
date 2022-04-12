forever(() => {
    const stop = modules.kitronikStopbitLights
    stop.setRed(!stop.red())
    pause(500)
    stop.setYellow(!stop.yellow())
    pause(500)
    stop.setGreen(!stop.green())
    pause(500)
})