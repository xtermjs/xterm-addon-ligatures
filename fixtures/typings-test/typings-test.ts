/// <reference path="../../typings/xterm-addon-ligatures.d.ts" />

import { Terminal } from 'xterm';
import * as ligatures from 'xterm-addon-ligatures';

Terminal.applyAddon(ligatures);
ligatures.apply(Terminal);

const terminal = new Terminal();
ligatures.enableLigatures(terminal);
