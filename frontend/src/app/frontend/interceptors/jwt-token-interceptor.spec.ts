import {TestBed} from '@angular/core/testing';

import {JwtTokenInterceptor} from './jwt-token-interceptor.service';

describe('JwtTokenInterceptor', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: JwtTokenInterceptor = TestBed.get(JwtTokenInterceptor);
		expect(service).toBeTruthy();
	});
});
