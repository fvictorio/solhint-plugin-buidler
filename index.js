class NoConsoleChecker {
  constructor(reporter) {
    this.ruleId = "no-console";
    this.reporter = reporter;
  }

  FunctionCall(node) {
    if (node.expression.type !== "MemberAccess") {
      return;
    }

    const memberAccess = node.expression;

    const isConsole = memberAccess.expression.type === "Identifier" && memberAccess.expression.name === "console";

    if (isConsole) {
      const { line, column } = node.loc.start;
      this.reporter.errorAt(line, column, this.ruleId, "Don't use console");
    }
  }

  ImportDirective(node) {
    if (node.path.trim() === "@nomiclabs/buidler/console.sol") {
      const { line, column } = node.loc.start;
      this.reporter.errorAt(line, column, this.ruleId, "Don't import console");
    }
  }
}

module.exports = [NoConsoleChecker];
