# pxt-kitronik-stopbit

# Kitronik blocks for micro:bit

Blocks that support [Kitronik STOP:bit board for the micro:bit]

## STOP:bit

* set traffic light state to Stop or other required state

```blocks
input.onButtonPressed(Button.A, () => {
	Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
})
```

* turn on and off individual colour LEDs

```blocks
input.onButtonPressed(Button.B, () => {
	Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
})
```

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)


```package
pxt-kitronik-stopbit=github:KitronikLtd/pxt-kitronik-stopbit
```
