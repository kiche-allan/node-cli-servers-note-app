import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
    .command('new <name>', 'Create a new project', yargs => {
      return yargs.positional('name', {
        type: 'string',
        description: 'The content of the note toooo create',

      })
    }, (argv) => {
      console.log(argv.note)
    })
  .demandCommand(1)
  .parse()