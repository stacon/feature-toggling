import getClientConfig from '../getClientConfig';

const mockFlagsState = {
  'new.feature': {
    globally: false,
    attributes: {
      statics: {
        environment: {
          DEVELOPMENT: true,
          STAGING: false,
          PRODUCTION: false,
        },
      },
    },
  },
};

describe('getClientConfig', () => {
  it('should return the expected output', () => {
    const attributes = {
      statics: {
        environment: 'DEVELOPMENT',
      },
    };

    const expectedOutput = {
      'new.feature': true,
    };

    expect(getClientConfig(mockFlagsState, attributes)).toEqual(expectedOutput);
  });

  it('should return the expected output', () => {
    const attributes = {
      statics: {
        environment: 'PRODUCTION',
      },
    };

    const expectedOutput = {
      'new.feature': false,
    };

    expect(getClientConfig(mockFlagsState, attributes)).toEqual(expectedOutput);
  });
});
