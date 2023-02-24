import { TestBed } from '@angular/core/testing';

import { ProjectCustomizationService } from './project-customization.service';

describe('ProjectCustomizationService', () => {
    let service: ProjectCustomizationService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ProjectCustomizationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
