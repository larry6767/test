import * as t from 'io-ts'

export const JSONObjectCodec = new t.Type<Object, string, unknown>(
  'JSONObjectCodec',
  (input: unknown): input is Object => typeof input === 'object',
  (input, context) => {
    if (typeof input === 'string') {
      let json

      try {
        json = JSON.parse(input)
      } catch (e) {
        return t.failure(
          input,
          context,
          e instanceof Error ? e.message : 'Failded to parse JSON',
        )
      }

      if (typeof json === 'object') {
        return t.success(json)
      } else {
        return t.failure(json, context, 'The parsed JSON is not an object')
      }
    } else if (typeof input === 'object') {
      return t.success(input)
    } else {
      return t.failure(
        input,
        context,
        'The value must be either string of JSON or parsed JSON object',
      )
    }
  },
  (a: Object): string => JSON.stringify(a),
)
