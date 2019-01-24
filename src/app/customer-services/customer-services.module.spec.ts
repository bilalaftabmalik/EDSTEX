import { CustomerServicesModule } from './customer-services.module';

describe('CustomerServicesModule', () => {
  let customerServicesModule: CustomerServicesModule;

  beforeEach(() => {
    customerServicesModule = new CustomerServicesModule();
  });

  it('should create an instance', () => {
    expect(customerServicesModule).toBeTruthy();
  });
});
