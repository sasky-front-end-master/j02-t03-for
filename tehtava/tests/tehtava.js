import { Selector } from 'testcafe';

fixture `for-silmukka`
    .page `../tehtava.html`;

test('Tulostetaan vaadittu teksti', async t => {
   const teksti = Selector("#teksti");

   await t
     .expect(teksti.textContent).match(/1\s*\*\s*6\s*=\s*6/,'')
     .expect(teksti.textContent).match(/2\s*\*\s*6\s*=\s*12/,'')
     .expect(teksti.textContent).match(/3\s*\*\s*6\s*=\s*18/,'')
     .expect(teksti.textContent).match(/4\s*\*\s*6\s*=\s*24/,'')
     .expect(teksti.textContent).match(/5\s*\*\s*6\s*=\s*30/,'')
     .expect(teksti.textContent).match(/6\s*\*\s*6\s*=\s*36/,'')
     .expect(teksti.textContent).match(/7\s*\*\s*6\s*=\s*42/,'')
     .expect(teksti.textContent).match(/8\s*\*\s*6\s*=\s*48/,'')
     .expect(teksti.textContent).match(/9\s*\*\s*6\s*=\s*54/,'')
     .expect(teksti.textContent).match(/10\s*\*\s*6\s*=\s*60/,'');
});
