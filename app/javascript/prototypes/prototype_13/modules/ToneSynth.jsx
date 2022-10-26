import React, { Component } from 'react'
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet'
import SC_Slider from '../components/SC_Slider'
import SC_Knob from '../components/SC_Knob'

import * as bassSettings from '../tunes/bass.js'
import * as melodySettings from '../tunes/melody.js'
import * as drumsSettings from '../tunes/drums.js'

export default class ToneSynth extends Component {
  constructor(props) {
    super(props)
    this.state = {
     isUIShown: false,
     bassSettings,
     melodySettings,
     drumsSettings
   }
  }

    handleToggleUIShow = () => {
     const { isUIShown } = this.state

     this.setState({
       isUIShown: !isUIShown
     })
   }

   renderShowHideButton = () => {
    return (
      <div className="toggleUIButton" onClick={this.handleToggleUIShow}>
        Show/Hide UI
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
 }



  render() {
    const { isUIShown, isStarted } = this.state
    const { settings, handleValueChange } = this.props

    const options = ['sine', 'square', 'sawtooth', 'triangle']

    return (
      <div className="Settings_synth">
      {isStarted ? this.renderShowHideButton() : ''}
        <div className="synth_settings">


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
        </div>

        <div className="synth_type">
        <SC_ToggleButtonSet
          name=""
          options={options}
          value={settings.synth.oscillator.type}
          property="synthType"
          handleChange={handleValueChange}
        />
        </div>
        <div className="synth_knobs">
        <SC_Knob
           name="Chorus Spread"
           min={0}
           max={360}
           value={180}
           property="synthChorusSpread"
           handleChange={handleValueChange}
        />
        <SC_Knob
           name="PingPongDelay Wet"
           min={0}
           max={1}
           value={0.5}
           property="synthPingPongDelayWet"
           handleChange={handleValueChange}
        />
        <SC_Knob
           name="Distortion"
           min={0}
           max={0.5}
           value={0.2}
           property="synthDistortion"
           handleChange={handleValueChange}
        />
        </div>
      </div>
    )
  }
}
