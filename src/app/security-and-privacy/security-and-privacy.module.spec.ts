import { SecurityAndPrivacyModule } from './security-and-privacy.module';

describe('SecurityAndPrivacyModule', () => {
  let securityAndPrivacyModule: SecurityAndPrivacyModule;

  beforeEach(() => {
    securityAndPrivacyModule = new SecurityAndPrivacyModule();
  });

  it('should create an instance', () => {
    expect(securityAndPrivacyModule).toBeTruthy();
  });
});
