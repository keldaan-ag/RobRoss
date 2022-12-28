import { Expression } from "../expressions/expression"
import { Value } from "../expressions/value"
import { Memory } from "../types/token-type"
import { Statement } from "./statement"

export class AssignStatement implements Statement {
  name: Memory
  expression: Expression
  variables: Map<String, Value<any>>

  constructor(
    name: Memory,
    expression: Expression,
    variables: Map<String, Value<any>>
  ) {
    this.name = name
    this.expression = expression
    this.variables = variables
  }

  execute(): void {
    this.variables.set(this.name, this.expression.evaluate())
  }
}
