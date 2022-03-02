import { TestBed } from '@angular/core/testing';

import { AnswerHighlightService } from './answer-highlight.service';

describe('AnswerHighlightService', () => {
  let service: AnswerHighlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerHighlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
