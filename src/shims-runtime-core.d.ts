// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as runtimeCore from '@vue/runtime-core'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $refs: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: HTMLElement | any
    }
    // ... more stuff
  }
}
