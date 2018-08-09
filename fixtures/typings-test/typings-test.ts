/// <reference path="../../typings/xterm-ligature-support.d.ts" />

import { Terminal } from 'xterm';
import * as ligatures from 'xterm-ligature-support';

Terminal.applyAddon(ligatures);
ligatures.apply(Terminal);

const terminal = new Terminal();
ligatures.enableLigatures(terminal);
