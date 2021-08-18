import NameSpace from "../NameSpace";

const NAME_SPACE = NameSpace.CACHE_MEMORY;

export const getCache = (state) => {
  return state[NAME_SPACE];
};

