#!/usr/bin/env node

import { Command } from "commander"
import { add } from "./commands/add"

const program = new Command()

program
  .name("nativecn")
  .description("React Native component CLI")

program
  .command("add <component>")
  .description("add component to project")
  .action(add)

program.parse()
