import { Injectable } from '@nestjs/common';
import { ClientAttributes, FeaturesFlagState, FlagList } from './types';

import { createFlag, staticsFlag } from './utils';
import { initialflagsState } from './initialflagsState';

@Injectable()
export class AppService {
  private flagsState = { ...initialflagsState };

  flagState(): FeaturesFlagState {
    return this.flagsState;
  }

  getClientConfig(clientAttributes: ClientAttributes): FlagList {
    return Object.entries(this.flagsState).reduce((acc, [flag, flagConfig]) => {
      const { globally, attributes } = flagConfig;

      if (globally) {
        return { ...acc, [flag]: true };
      }

      if (staticsFlag(clientAttributes, attributes))
        return { ...acc, [flag]: true };

      return { ...acc, [flag]: false };
    }, {});
  }

  changeAttribute(
    id: string,
    attribute: string,
    toggle: string,
  ): FeaturesFlagState {
    const boolean = toggle === 'true';

    if (attribute === 'globally') {
      this.flagsState = {
        ...this.flagsState,
        [id]: { ...this.flagsState[id], globally: boolean },
      };

      console.log(`${id} changed globally to ${boolean}`);
    }

    if (attribute.includes('static')) {
      const [_, staticName, staticMember] = attribute.split('.');
      this.flagsState[id].attributes.statics[staticName][staticMember] =
        boolean;

      console.log(
        `${id} changed static ${staticName}.${staticMember} to ${boolean}`,
      );
    }

    return this.flagsState;
  }

  createNewFlag(id: string): FeaturesFlagState {
    this.flagsState = { ...this.flagsState, [id]: createFlag() };

    console.log(`${id} created`);

    return this.flagsState;
  }

  deleteFlag(id: string): FeaturesFlagState {
    delete this.flagsState[id];
    return this.flagsState;
  }
}
