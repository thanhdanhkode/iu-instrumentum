import { storage as wxtStorage } from "#imports"
import type { ZodSchema } from "zod"

/**
 * Get item value from local storage with schema validation
 * @param key
 * @param fallback
 * @param schema
 * @returns fallback
 */
const get = async <T>(key: string, fallback: T, schema: ZodSchema<T>): Promise<T> => {
  const data = await wxtStorage.getItem<T>(`local:${key}`)

  if (data) {
    const parsedData = schema.safeParse(data)
    if (parsedData.success) return parsedData.data
  }

  return fallback
}

/**
 * Set item value to local storage with schema validation
 * @param key
 * @param value
 * @param schema
 */
const set = async <T>(key: string, value: T, schema: ZodSchema<T>): Promise<void> => {
  const parseData = schema.safeParse(value)

  if (parseData.success) await wxtStorage.setItem(`local:${key}`, parseData.data)
  else throw new Error(parseData.error.message)
}

/**
 * Watch item value from local storage
 * @param key
 * @param callback
 * @returns watch
 */
const watch = <T>(key: string, callback: (newValue: T) => void) => {
  const unwatch = wxtStorage.watch<T>(`local:${key}`, (newValue) => {
    if (newValue !== null) callback(newValue)
  })

  return unwatch
}

export const storage = { get, set, watch }
