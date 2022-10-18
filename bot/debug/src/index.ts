import { Logger } from '@atls/logger'

export const log = (...messages) => new Logger('app:log').info(messages.join(' '))
export const error = (...messages) => new Logger('app:error').error(messages.join(' '))
export const warn = (...messages) => new Logger('app:warn').warn(messages.join(' '))
