import createCache from '@emotion/cache'

// TODO remove prepend: true once JSS is out
export const MuiCache = createCache({ key: 'mui', prepend: true })