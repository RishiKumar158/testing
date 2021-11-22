import { pipe } from "rxjs";
import { DefaultPipe } from "./default.pipe";

describe('DefaultPipe', () => {
  let pipe: DefaultPipe;

  beforeEach(() => {
    pipe = new DefaultPipe();
  });

  it('create an instance an DefeultPipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('when providing no value returns fallback', () => {
    expect(pipe.transform('', 'http://place-hold.it/300')).toBe('http://place-hold.it/300');
  });

  it('when providing a value returns the value', () => {
    expect(pipe.transform('http://place-hold.it/300', 'fallback')).toBe('http://place-hold.it/300');
  });

  it('when asking for http gives https', () => {
    expect(pipe.transform('', 'http://place-hold.it/300', true)).toBe('https://place-hold.it/300')
  });
})