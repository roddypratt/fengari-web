export as namespace fengariWeb;

export {
  lua,
  lualib,
  lauxlib,
  to_luastring,
  to_jsstring,
  to_uristring,
  FENGARI_AUTHORS,
  FENGARI_RELEASE,
  FENGARI_VERSION,
  FENGARI_COPYRIGHT,
  FENGARI_VERSION_NUM,
  FENGARI_VERSION_MAJOR,
  FENGARI_VERSION_MINOR,
  FENGARI_VERSION_RELEASE,
} from "fengari";

export {
  push,
  pushjs,
  checkjs,
  testjs,
  tojs
} from "fengari-interop";

import { lua } from "fengari";

export let L: lua.lua_State;
export function load(code: string, chunk?: string): () => any;
