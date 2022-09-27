import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import textStats from './plugins/textStats'
import {schemaTypes} from './schemas'

export default createConfig({
  name: 'default',
  title: 'v3 Extending Input Components',

  projectId: 'twn309ie',
  dataset: 'production',

  plugins: [deskTool(), textStats()],

  schema: {
    types: schemaTypes,
  },
})
