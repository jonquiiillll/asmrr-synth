import * as Tone from 'tone'
import React, { Component } from 'react'

import * as bassSettings from './tunes/bass.js'
import * as melodySettings from './tunes/melody.js'
import * as drumsSettings from './tunes/drums.js'

import ToneSynth from './modules/ToneSynth.jsx'

import Channel from './modules/Channel.jsx'

import SC_ToggleButtonSet from './components/SC_ToggleButtonSet'
import SC_Button from './components/SC_Button'
import SC_Slider from './components/SC_Slider'
import SC_Knob from './components/SC_Knob'

let bassSynth
let bassChorus
let bassVibrato
let bassAutoWah
let bassDistorion
let bassPingPongDelay

let melodySynth
let melodyChorus
let melodyVibrato
let melodyAutoWah
let melodyDistorion
let melodyPingPongDelay

let samplerChannel
let samplerChorus

let samplerChannelTwo
let samplerChannelThird
let samplerChannelForth
let samplerChannelFifth
let samplerChannelSix
let samplerChannelSeven
let samplerChannelEight

let samplerChannelFifthPingPongDelay


export default class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isStarted: false,
      isUIShown: false,
      bassSettings,
      melodySettings,
      drumsSettings
    }
  }

  handleStart = () => {
    const { bassSettings, melodySettings, drumsSettings } = this.state
    //
    //
    bassSynth = new Tone.Synth(bassSettings.synth)
    bassSynth = new Tone.Synth(bassSettings.synth)
    bassAutoWah = new Tone.AutoWah(bassSettings.autoWah)
    bassDistorion = new Tone.Distortion(bassSettings.distortion)
    bassChorus = new Tone.Chorus(bassSettings.chorus).start()
    bassVibrato = new Tone.Vibrato(bassSettings.vibrato)

    bassPingPongDelay = new Tone.PingPongDelay(
      bassSettings.pingPongDelay
    ).toDestination()

    samplerChorus = new Tone.Chorus(drumsSettings.chorus).start()

    bassPingPongDelay = new Tone.PingPongDelay(
      bassSettings.pingPongDelay
    ).toDestination()

    bassSynth.chain(bassChorus, bassDistorion, bassPingPongDelay, bassVibrato, bassAutoWah )

    const bassPart = new Tone.Part((time, note) => {
      bassSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, bassSettings.sequence.steps).start(0)

    bassPart.loopEnd = bassSettings.sequence.duration
    bassPart.loop = bassSettings.sequence.loop
    //
    //
    melodySynth = new Tone.Synth(melodySettings.synth)
    melodyAutoWah = new Tone.AutoWah(melodySettings.autoWah)
    melodyDistorion = new Tone.Distortion(melodySettings.distortion)
    melodyChorus = new Tone.Chorus(melodySettings.chorus).start()
    melodyVibrato = new Tone.Vibrato(melodySettings.vibrato)

    melodyPingPongDelay = new Tone.PingPongDelay(
      melodySettings.pingPongDelay
    ).toDestination()

    melodySynth.chain(melodyChorus, melodyDistorion, melodyPingPongDelay, melodyVibrato, melodyAutoWah )

    const melodyPart = new Tone.Part((time, note) => {
      melodySynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, melodySettings.sequence.steps).start(0)

    melodyPart.loopEnd = melodySettings.sequence.duration
    melodyPart.loop = melodySettings.sequence.loop
    //
    //
    const sampler = new Tone.Sampler({
      urls: {
        A1: 'crunchA1.mp3',
        A2: 'crunchA2.mp3'
      },
      baseUrl: 'http://localhost:3000/samples/'
    })

    samplerChannel = new Tone.Channel(drumsSettings.channel).toDestination()
    sampler.chain( samplerChorus, samplerChannel)

    const drumsPart = new Tone.Part((time, note) => {
      sampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, drumsSettings.sequence.steps).start(0)

    drumsPart.loopEnd = drumsSettings.sequence.duration
    drumsPart.loop = drumsSettings.sequence.loop

    const samplerTwo = new Tone.Sampler({
      urls: {
        A1: 'knockingA1.mp3',
        A2: 'knockingA2.mp3'
      },
      baseUrl: 'http://localhost:3000/samples/'
    })

    samplerChannelTwo = new Tone.Channel(drumsSettings.channelTwo).toDestination()
    samplerTwo.chain( samplerChannelTwo )

    const drumsPartTwo = new Tone.Part((time, note) => {
      samplerTwo.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, drumsSettings.sequenceTwo.steps).start(0)

    drumsPartTwo.loopEnd = drumsSettings.sequenceTwo.duration
    drumsPartTwo.loop = drumsSettings.sequenceTwo.loop

    const samplerThird = new Tone.Sampler({
      urls: {
        A1: 'sizzleA1.mp3',
        A2: 'sizzleA3.mp3'
      },
      baseUrl: 'http://localhost:3000/samples/'
    })

    samplerChannelThird = new Tone.Channel(drumsSettings.channelThird).toDestination()
    samplerThird.chain( samplerChannelThird )

    const drumsPartThird = new Tone.Part((time, note) => {
      samplerThird.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, drumsSettings.sequenceThird.steps).start(0)

    drumsPartThird.loopEnd = drumsSettings.sequenceThird.duration
    drumsPartThird.loop = drumsSettings.sequenceThird.loop

    const samplerForth = new Tone.Sampler({
      urls: {
        A1: 'drumA2.mp3',
        A2: 'drumA3.mp3'
      },
      baseUrl: 'http://localhost:3000/samples/'
    })

    samplerChannelForth = new Tone.Channel(drumsSettings.channelForth).toDestination()
    samplerForth.chain( samplerChannelForth )

    const drumsPartForth = new Tone.Part((time, note) => {
      samplerForth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, drumsSettings.sequenceForth.steps).start(0)

    drumsPartForth.loopEnd = drumsSettings.sequenceForth.duration
    drumsPartForth.loop = drumsSettings.sequenceForth.loop

    const samplerFifth = new Tone.Sampler({
      urls: {
        A1: 'melodyA1.mp3',
        A2: 'melodyA2.mp3',
        A3: 'melodyA3.mp3',
      },
      baseUrl: 'http://localhost:3000/samples/'
    })

    samplerChannelFifthPingPongDelay = new Tone.PingPongDelay(
      drumsSettings.pingPongDelay
    ).toDestination()

    samplerChannelFifth = new Tone.Channel(drumsSettings.channelFifth).toDestination()
    samplerFifth.chain( samplerChannelFifth, samplerChannelFifthPingPongDelay  )

    const drumsPartFifth = new Tone.Part((time, note) => {
      samplerFifth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, drumsSettings.sequenceFifth.steps).start(0)

    drumsPartFifth.loopEnd = drumsSettings.sequenceFifth.duration
    drumsPartFifth.loop = drumsSettings.sequenceFifth.loop

    const samplerSix = new Tone.Sampler({
      urls: {
        A2: 'nice.mp3',
      },
      baseUrl: 'http://localhost:3000/samples/'
    })

    samplerChannelSix = new Tone.Channel(drumsSettings.channelSix).toDestination()
    samplerSix.chain( samplerChannelSix  )

    const drumsPartSix = new Tone.Part((time, note) => {
      samplerSix.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, drumsSettings.sequenceSix.steps).start(0)

    drumsPartSix.loopEnd = drumsSettings.sequenceSix.duration
    drumsPartSix.loop = drumsSettings.sequenceSix.loop

    this.setState({
        isStarted: true
    })

    const samplerSeven = new Tone.Sampler({
      urls: {
        A2: 'tresk.mp3',
      },
      baseUrl: 'http://localhost:3000/samples/'
    })

    samplerChannelSeven = new Tone.Channel(drumsSettings.channelSeven).toDestination()
    samplerSeven.chain( samplerChannelSeven  )

    const drumsPartSeven = new Tone.Part((time, note) => {
      samplerSeven.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, drumsSettings.sequenceSeven.steps).start(0)

    drumsPartSeven.loopEnd = drumsSettings.sequenceSeven.duration
    drumsPartSeven.loop = drumsSettings.sequenceSeven.loop

    this.setState({
        isStarted: true
    })

    const samplerEight = new Tone.Sampler({
      urls: {
        A1: 'drumA1.mp3',
        A2: 'drumA4.mp3'
      },
      baseUrl: 'http://localhost:3000/samples/'
    })

    samplerChannelEight = new Tone.Channel(drumsSettings.channelEight).toDestination()
    samplerEight.chain( samplerChannelEight  )

    const drumsPartEight = new Tone.Part((time, note) => {
      samplerEight.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, drumsSettings.sequenceEight.steps).start(0)

    drumsPartEight.loopEnd = drumsSettings.sequenceEight.duration
    drumsPartEight.loop = drumsSettings.sequenceEight.loop

    this.setState({
        isStarted: true
    })

    Tone.Transport.start()
  }
  //
  //

  handleBassValueChange = (property, value) => {
    const { bassSettings } = this.state

    if (property === 'synthType') {
      bassSynth.oscillator.type = value
      bassSettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      bassSynth.envelope.attack = value
      bassSettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      bassSynth.envelope.decay = value
      bassSettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      bassSynth.envelope.sustain = value
      bassSettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      bassSynth.envelope.release = value
      bassSettings.synth.envelope.release = value
    } else if (property === 'pingPongDelayWet') {
      bassPingPongDelay.wet.value = value
      bassSettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      bassChorus.wet.value = value
      bassSettings.chorus.wet = value
    } else if (property === 'synthVolume') {
      bassSynth.volume.value = value
      bassSettings.synth.volume = value
    } else if (property === 'synthVibratoWet') {
      bassVibrato.wet.value = value
      bassSettings.vibrato.wet = value
    } else if (property === 'AutoWahWet') {
      bassAutoWah.wet.value = value
      bassSettings.autoWah.wet = value
    } else if (property === 'distortionWet') {
      bassDistorion.wet.value = value
      bassSettings.distortion.wet = value
    } else if (property === 'distortionDistortion') {
      bassDistorion.distortion = value
      bassSettings.distortion.distortion = value
    } else if (property === 'pingPongDelayDelay') {
      bassPingPongDelay.delayTime.value = value
      bassSettings.pingPongDelay.delayTime = value
    } else if (property === 'synthChorusSpread') {
      bassChorus.spread = value
      bassSettings.chorus.spread = value
    } else if (property === 'synthPingPongDelayWet') {
      bassPingPongDelay.wet.value = value
      bassSettings.pingPongDelay.wet = value
    }  else if (property === 'synthDistortion') {
      bassDistorion.distortion = value
      bassSettings.distortion.distortion = value
    }

    this.setState({
      bassSettings
    })
  }

  handleMelodyValueChange = (property, value) => {
    const { melodySettings } = this.state

    if (property === 'synthType') {
      melodySynth.oscillator.type = value
      melodySettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      melodySynth.envelope.attack = value
      melodySettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      melodySynth.envelope.decay = value
      melodySettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      melodySynth.envelope.sustain = value
      melodySettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      melodySynth.envelope.release = value
      melodySettings.synth.envelope.release = value
    } else if (property === 'pingPongDelayWet') {
      melodyPingPongDelay.wet.value = value
      melodySettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      melodyChorus.wet.value = value
      melodySettings.chorus.wet = value
    } else if (property === 'synthVolume') {
      melodySynth.volume.value = value
      melodySettings.synth.volume = value
    } else if (property === 'synthVibratoWet') {
      melodyVibrato.wet.value = value
      melodySettings.vibrato.wet = value
    } else if (property === 'AutoWahWet') {
      melodyAutoWah.wet.value = value
      melodySettings.autoWah.wet = value
    } else if (property === 'distortionWet') {
      melodyDistorion.wet.value = value
      melodySettings.distortion.wet = value
    } else if (property === 'distortionDistortion') {
      melodyDistorion.distortion = value
      melodySettings.distortion.distortion = value
    } else if (property === 'pingPongDelayDelay') {
      melodyPingPongDelay.delayTime.value = value
      melodySettings.pingPongDelay.delayTime = value
    } else if (property === 'synthChorusSpread') {
      melodyChorus.spread = value
      melodySettings.chorus.spread = value
    } else if (property === 'synthPingPongDelayWet') {
      melodyPingPongDelay.wet.value = value
      melodySettings.pingPongDelay.wet = value
    }  else if (property === 'synthDistortion') {
      melodyDistorion.distortion = value
      melodySettings.distortion.distortion = value
    }


    this.setState({
      melodySettings
    })
  }

  handleDrumsValueChange = (property, value) => {
    const { drumsSettings } = this.state

    if (property === 'channelVolume') {
      samplerChannel.volume.value = value
      drumsSettings.channel.volume = value
    } else if (property === 'channelMute') {
      samplerChannel.mute = value
      drumsSettings.channel.mute = value
    } else if (property === 'channelChorus') {
      samplerChorus.wet.value = value
      drumsSettings.chorus.wet = value
    } else if (property === 'channelVolumeTwo') {
      samplerChannelTwo.volume.value = value
      drumsSettings.channelTwo.volume = value
    } else if (property === 'channelTwoMute') {
      samplerChannelTwo.mute = value
      samplerChannelTwo.text = "ON"
      drumsSettings.channelTwo.mute = value
    } else if (property === 'channelSevenMute') {
      samplerChannelSeven.mute = value
      samplerChannelSeven.text = "ON"
      drumsSettings.channelSeven.mute = value
    } else if (property === 'channelVolumeFifth') {
      samplerChannelFifth.volume.value = value
      drumsSettings.channelFifth.volume = value
    } else if (property === 'channelFifthMute') {
      samplerChannelFifth.mute = value
      drumsSettings.channelFifth.mute = value
    } else if (property === 'pingPongDelayWet') {
      samplerChannelFifthPingPongDelay.wet.value = value
      drumsSettings.pingPongDelay.wet = value
    } else if (property === 'channelVolumeThird') {
      samplerChannelThird.volume.value = value
      drumsSettings.channelThird.volume = value
    } else if (property === 'channelThirdMute') {
      samplerChannelThird.mute = value
      drumsSettings.channelThird.mute = value
    } else if (property === 'channelVolumeForth') {
      samplerChannelForth.volume.value = value
      drumsSettings.channelForth.volume = value
    } else if (property === 'channelForthMute') {
      samplerChannelForth.mute = value
      drumsSettings.channelForth.mute = value
    } else if (property === 'channelSixMute') {
      samplerChannelSix.mute = value
      drumsSettings.channelSix.mute = value
    } else if (property === 'channelEightMute') {
      samplerChannelEight.mute = value
      drumsSettings.channelEight.mute = value
    }

    this.setState({
      drumsSettings
    })
  }

  renderStartButton = () => {
  return (
    <div className="left_container">
      <div className="StartWindow">
        <div className="ButtonStart">
          <SC_Button
            text="Start"
            handleClick={this.handleStart}
          />
        </div>
      </div>
    </div>
  )
}

renderUI = () => {
  const {
    isUIShown,
    bassSettings,
    melodySettings,
    drumsSettings
  } = this.state


  return (
    <div className="rendered_container">
    <div className ="instruments">
    <div className="text_container">
      <div className="description"> <div className="name_column"> I. BASS </div> <div className="line"></div></div>
      <div className="description margin-left"><div className="name_column"> II. MELODY</div> <div className="line2"></div> </div>
      <div className="description margin-lefts"> <div className="name_column"> III. SAMPLES</div> <div className="line2"></div></div>
    </div>
    <div className="voices">
      <div className="settings">
          <ToneSynth
            settings={melodySettings}
            handleValueChange={this.handleMelodyValueChange}
          />
          <ToneSynth
            settings={bassSettings}
            handleValueChange={this.handleBassValueChange}
          />
        </div>
      <div className="container_voices">
             <Channel
               settings={drumsSettings}
               handleValueChange={this.handleDrumsValueChange}
             />
          </div>
        </div>
      </div>
    </div>
  )}


  render() {
    const {isStarted, isUIShown} = this.state
    const { bassSettings, melodySettings, drumsSettings } = this.state

    return (
      <div className="Container">
      {isStarted ? this.renderUI() : this.renderStartButton()}
      </div>
    )
  }
}
