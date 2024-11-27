import {greeting as greetingChild} from '/workspaces/OS-1-2024b/projects/child-processes.js'
import {greeting as greetingIpc} from '/workspaces/OS-1-2024b/projects/ipc.js'
import {greeting as greetingProcessesState} from '/workspaces/OS-1-2024b/projects/processes-state.js'

console.log("🌟Programa de procesosos🌟")
let option= process.argv[2];
switch (option) {
    case 1:
        greetingChild();
        break;
    case 2:
        greetingIpc();
        break;
    case 3:
        greetingProcessesState();
        break;
}