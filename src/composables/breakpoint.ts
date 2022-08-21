import { breakpointsTailwind, createSharedComposable, useBreakpoints as setUpBreakpoints } from '@vueuse/core'

const breakpoints = () => setUpBreakpoints(breakpointsTailwind)

export const useBreakpoints = createSharedComposable(breakpoints)
