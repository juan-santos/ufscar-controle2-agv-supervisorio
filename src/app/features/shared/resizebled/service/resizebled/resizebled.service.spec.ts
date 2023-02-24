import { TestBed } from '@angular/core/testing';

import { ResizebledService } from './resizebled.service';

describe('ResizebledService', () => {
    let service: ResizebledService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ResizebledService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
