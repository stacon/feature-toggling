import { ClientAttributes, StateAttributes } from "../types";

const staticsFlag = (
  clientAttributes: ClientAttributes,
  stateAttributes: StateAttributes
): boolean => {
  const { statics: clientStatics } = clientAttributes;
  const { statics } = stateAttributes;

  return Object.entries(clientStatics).reduce(
    (result: boolean, [attrkey, attrValue]) =>
      result || !!statics[attrkey][attrValue],
    false
  );
};

export default staticsFlag;
