@prototypes_data = [
  {
    name: 'First module / First prototype'
  },
  {
    name: 'First module / Second prototype'
  },
  {
    name: 'First module / Third prototype'
  },
  {
    name: 'Effects'
  },
  {
    name: 'Firts Melody, Tone.js'
  },
  {
    name: 'Different types of synth'
  },
  {
    name: 'Interface // Tone.js'
  },
  {
    name: 'Synth 3rd melody // Tone.js'
  },
  {
    name: 'Tone.js wuth UI and Two Synths'
  },
  {
    name: 'Tone.js with UI // Composition'
  },
  {
    name: 'Tone.js with UI // Compos 2.0'
  },
  {
    name: 'Tone.js with UI // Samples'
  },
  {
    name: 'Tone.js // Final Synth'
  }
]

def seed
  reset_db
  create_prototypes
end

def reset_db
  Rake::Task['db:drop'].invoke
  Rake::Task['db:create'].invoke
  Rake::Task['db:migrate'].invoke
end

def create_prototypes
  @prototypes_data.each do |prototype_data|
    prototype = Prototype.create!(prototype_data)
    puts "#{prototype.name} prototype just created"
  end
end

seed
