import createFlag from '../createFlag';

describe('createFlag', () => {
  it('should create the expected FeatureFlag', () => {
    expect(createFlag()).toEqual({
      globally: false,
      attributes: {
        statics: {
          environment: {
            DEVELOPMENT: false,
            STAGING: false,
            PRODUCTION: false,
          },
        },
      },
    });
  });
});
