/* TypeScript file generated from index.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as indexJS from './index.res.js';

import type {Jsx_element as PervasivesU_Jsx_element} from '../src/shims/PervasivesU.shim';

import type {props as NotWorking_props} from './NotWorking.gen';

import type {props as Working_props} from './Working.gen';

export type workaroundProps = NotWorking_props;

export const NotWorking: React.ComponentType<{ readonly children: React.ReactNode; readonly not_imported: not_imported }> = indexJS.NotWorking as any;

export const Working: (_1:Working_props) => PervasivesU_Jsx_element = indexJS.Working as any;

export const Workaround: (_1:workaroundProps) => JSX.Element = indexJS.Workaround as any;
