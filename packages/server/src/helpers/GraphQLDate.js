import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import { GraphQLError } from 'graphql/error'

const GraphQLDate = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',

    parseValue(value) {
        if (value instanceof Date) {
            return value
        }

        // If the value represents stringified timestamp, parse it as such
        return new Date(Number(value) || value)
    },

    serialize(value) {
        if (value instanceof Date) {
            return value.toJSON()
        }

        return value
    },

    parseLiteral(ast) {
        // AST value is always in string format.
        if (ast.kind === Kind.INT) {
            return new Date(parseInt(ast.value, 10))
        }

        if (ast.kind !== Kind.STRING) {
            return new GraphQLError(
                'Query error: Invalid type to parse into date: ' + ast.kind
            )
        }

        return new Date(ast.value)
    },
})

export default GraphQLDate
