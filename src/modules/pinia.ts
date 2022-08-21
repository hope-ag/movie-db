import { createPinia } from 'pinia'

const _pinia = createPinia()

_pinia.use(({ store }) => {
  store.$onAction(({ name, args, onError }) => {
    onError((error) => {
      // probably forward to API for error handling
      // eslint-disable-next-line no-console
      console.log(name, args, error)
    })
  })
})

export const pinia = _pinia
