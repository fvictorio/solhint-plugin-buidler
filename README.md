# solhint-plugin-buidler

This [Solhint](https://github.com/protofire/solhint/) plugin has rules for the [buidler](https://buidler.dev/)
ecosystem. Right now the only rule is `no-console` to remember to remove your [console calls](https://buidler.dev/buidler-evm/#console-log) before committing.

## Setup

First install the necessary packages:

```
npm install --save-dev solhint solhint-plugin-buidler
```

Then add a `.solhint.json` configuration file:

```json
{
  "plugins": ["buidler"],
  "rules": {
    "buidler/no-console": "warn"
  }
}
```
