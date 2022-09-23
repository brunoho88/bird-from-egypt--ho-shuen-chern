let strip: neopixel.Strip = null
let range: neopixel.Strip = null
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 128) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        strip = neopixel.create(DigitalPin.P2, 7, NeoPixelMode.RGB)
        range = strip.range(0, 1)
        range.showRainbow(0, 30)
    } else if (pins.analogReadPin(AnalogPin.P1) < 256) {
        music.playTone(294, music.beat(BeatFraction.Whole))
        strip = neopixel.create(DigitalPin.P0, 7, NeoPixelMode.RGB)
        range = strip.range(0, 2)
        range.showRainbow(30, 60)
    } else if (pins.analogReadPin(AnalogPin.P1) < 384) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        strip = neopixel.create(DigitalPin.P2, 7, NeoPixelMode.RGB)
        range = strip.range(0, 3)
        range.showRainbow(60, 90)
    } else if (pins.analogReadPin(AnalogPin.P1) < 512) {
        music.playTone(349, music.beat(BeatFraction.Whole))
        strip = neopixel.create(DigitalPin.P2, 7, NeoPixelMode.RGB)
        range = strip.range(0, 4)
        range.showRainbow(90, 120)
    } else if (pins.analogReadPin(AnalogPin.P1) < 640) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        strip = neopixel.create(DigitalPin.P2, 7, NeoPixelMode.RGB)
        range = strip.range(0, 5)
        strip.showRainbow(120, 150)
    } else if (pins.analogReadPin(AnalogPin.P1) < 768) {
        music.playTone(440, music.beat(BeatFraction.Whole))
        strip = neopixel.create(DigitalPin.P2, 7, NeoPixelMode.RGB)
        range = strip.range(0, 6)
        range.showRainbow(150, 180)
    } else if (pins.analogReadPin(AnalogPin.P1) < 996) {
        music.playTone(494, music.beat(BeatFraction.Whole))
        strip = neopixel.create(DigitalPin.P2, 7, NeoPixelMode.RGB)
        range = strip.range(0, 7)
        strip.showRainbow(180, 210)
    } else {
        music.playTone(523, music.beat(BeatFraction.Whole))
        strip = neopixel.create(DigitalPin.P2, 7, NeoPixelMode.RGB)
        range = strip.range(0, 7)
        strip.showRainbow(0, 30)
    }
})
