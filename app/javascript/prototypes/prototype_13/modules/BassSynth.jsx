import React, { Component } from 'react'
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet'
import SC_Slider from '../components/SC_Slider'

export default class ToneSynth extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props

    const options = ['sine', 'square', 'sawtooth', 'triangle']

    return (
      <div className="SC_Button">
      <div className="synth_type">
      <SC_ToggleButtonSet
        name=""
        options={options}
        value={settings.synth.oscillator.type}
        property="synthType"
        handleChange={handleValueChange}
      />
      </div>

        <SC_Slider
          name="Synth Volume"
          min={-70}
          max={30}
          step={0.1}
          value={settings.synth.volume}
          property="synthVolume"
          handleChange={handleValueChange}
        />

        <SC_Slider
          name="Synth Envelope Attack"
          min={0}
          max={1}
          step={0.01}
          value={settings.synth.envelope.attack}
          property="synthEnvelopeAttack"
          handleChange={handleValueChange}
        />
        <SC_Slider
          name="Synth Envelope Decay"
          min={0}
          max={1}
          step={0.01}
          value={settings.synth.envelope.decay}
          property="synthEnvelopeDecay"
          handleChange={handleValueChange}
        />
        <SC_Slider
          name="Synth Envelope Release"
          min={0}
          max={1}
          step={0.01}
          value={settings.synth.envelope.release}
          property="synthEnvelopeRelease"
          handleChange={handleValueChange}
        />
        <SC_Slider
          name="Synth Vibrato Wet"
          min={0}
          max={1}
          step={0.01}
          value={settings.vibrato.wet}
          property="synthVibratoWet"
          handleChange={handleValueChange}
        />
        <SC_Slider
          name="Synth PingPongDelay Wet"
          min={0}
          max={1}
          step={0.01}
          value={settings.pingPongDelay.wet}
          property="pingPongDelayWet"
          handleChange={handleValueChange}
        />
      </div>
    )
  }
}
