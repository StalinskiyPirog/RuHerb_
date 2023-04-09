import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.product.create({
    data: {
      category1: "Киолик",
      category2: "Пищевые добавки",
      category3: "Поддержка пищеварения",
      category4: "Пробиотики",
      articul: "WAK-61042",
      title:
        "Kyolic,Kyo-Dophilus,Multi 9, пробиотик,6 миллиардов КОЕ, 180 капсул",
      price: "3456",
      count: "В наличии",
      descr: `<ul>

          <li>
              &#x421;&#x440;&#x43E;&#x43A; &#x433;&#x43E;&#x434;&#x43D;&#x43E;&#x441;&#x442;&#x438;: 1 &#x438;&#x44E;&#x43B;&#x44F; 2025
                            
          </li>

          <li>
              &#x414;&#x43E;&#x441;&#x442;&#x443;&#x43F;&#x43D;&#x43E;, &#x43D;&#x430;&#x447;&#x438;&#x43D;&#x430;&#x44F; &#x441;: <span> 14 &#x430;&#x432;&#x433;&#x443;&#x441;&#x442;&#x430; 2013 </span>
          </li>
      <li>
          &#x412;&#x435;&#x441; &#x432; &#x443;&#x43F;&#x430;&#x43A;&#x43E;&#x432;&#x43A;&#x435;:&nbsp;
          <div>
              <span>
                  0.54 &#x444;&#x443;&#x43D;&#x442;&#x43E;&#x432;
              </span>
              <div>&#x41F;&#x435;&#x440;&#x435;&#x43A;&#x43B;&#x44E;&#x447;&#x438;&#x442;&#x44C;&#x441;&#x44F; &#x43D;&#x430; &#x43C;&#x435;&#x442;&#x440;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x435;&#x434;&#x438;&#x43D;&#x438;&#x446;&#x44B;</div>
          </div>
          
      </li>
      <li>&#x41A;&#x43E;&#x434; &#x442;&#x43E;&#x432;&#x430;&#x440;&#x430;:   <span>WAK-61042</span></li>
      <li>UPC &#x41A;&#x43E;&#x434;:   <span>023542610421</span></li>
          <li>&#x41A;&#x43E;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x442;&#x432;&#x43E; &#x432; &#x443;&#x43F;&#x430;&#x43A;&#x43E;&#x432;&#x43A;&#x435;:   180</li>
                  <li>
              &#x420;&#x430;&#x437;&#x43C;&#x435;&#x440;&#x44B;:
              <div>
                  <span>
                          <span>2.55 x 2.6 x 4.65 in</span>, 
                          <span>0.535 &#x444;&#x443;&#x43D;&#x442;&#x43E;&#x432;</span>
                  </span>
                  <div>&#x41F;&#x435;&#x440;&#x435;&#x43A;&#x43B;&#x44E;&#x447;&#x438;&#x442;&#x44C;&#x441;&#x44F; &#x43D;&#x430; &#x43C;&#x435;&#x442;&#x440;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x435;&#x434;&#x438;&#x43D;&#x438;&#x446;&#x44B;</div>
              </div>
          </li>



                  </ul>
<div><ul><li>Probiotics for You™</li><li>Прочный баланс и поддержка здоровья кишечника</li><li>Сертификат DNA Sequence Verified††</li><li>Гарантировано 6&nbsp;млрд живых КОЕ до истечения срока годности</li><li>Не содержит ГМО</li><li>Не содержит глютена</li><li>Без молочных продуктов</li><li>Добавка содержит 9&nbsp;пробиотических штаммов</li><li>Содержит клинически изученные штаммы The Friendly Trio®</li><li>Вы можете положиться на пробиотики Kyo-Dophilus</li><li>Соответствует стандарту качества GMP</li></ul><strong>Пробиотик, на который можно положиться</strong><br><br>Пробиотики Kyo-Dophilus® разработаны для поддержки здоровья пищеварительной и иммунной систем. Наши пробиотики обеспечивают эффективность, качество и повышенную жизнеспособность живых клеток без охлаждения. The Friendly Trio®&nbsp;— это ядро наших формул.<p>The Friendly Trio&nbsp;— это клинически изученная запатентованная смесь человеческих штаммов Lactobacillus gasseri KS-13, Bifidobacterium bifidum G9-1 и Bifidobacterium longum MM-2.</p>Было доказано, что L.&nbsp;gasseri поддерживает функцию желудочно-кишечного тракта и иммунное здоровье вашего организма.<br><br>B.&nbsp;bifidum может регулировать здоровую флору кишечника и повышать иммунитет за счет уменьшения воспаления.<br><br>B.&nbsp;longum, как известно, нормализует дефекацию.<br><br>Выбор подходящего пробиотика означает нечто большее, чем просто количество КОЕ†††. Выберите пробиотик с разнообразными, совместимыми и способными выдерживать кислоту желудочного сока штаммами, чтобы стимулировать имплантацию и быструю репликацию в кишечнике.<br><br>Мы предлагаем разнообразные формулы и варианты эффективности, приготовленные из клинически проверенных штаммов, чтобы помочь удовлетворить ваши конкретные потребности в вопросе здоровья.<br><br><strong>Микробиом кишечника так же уникален, как и вы.</strong><br><br>Пробиотик Kyo-Dophilus® Multi&nbsp;9 содержит комплекс из девяти разных полезных бактерий, включая The Friendly Trio®, L.&nbsp;gasseri KS-13, B.&nbsp;bifidum G9-1 и B.&nbsp;longum MM-2, а также B.&nbsp;infantis, B.&nbsp;breve и L.&nbsp;rhamnosus и другие совместимые виды. Эта комбинация из нескольких штаммов может помочь заселить ваш микробиом полезными бактериями, чтобы укрепить здоровье желудочно-кишечного тракта и помочь вам поддерживать сбалансированную пищеварительную и иммунную систему.<br><br><strong>Пробиотик Multi&nbsp;9 для вас</strong><ul><li>Поддержка здоровья кишечника</li><li>Устраняют эпизодический дискомфорт в пищеварительном тракте</li><li>Способствуют укреплению иммунитета</li></ul>Принимайте две капсулы пробиотика Kyo-Dophilus Multi&nbsp;9 во время еды каждый день, чтобы сбалансировать микробиом кишечника, поддерживать здоровое пищеварение и иммунную реакцию для вашего общего здоровья.<br><br>††&nbsp;Штаммы пробиотиков в этом продукте были подтверждены с помощью секвенирования ДНК.<br>†††&nbsp;Колониеобразующие единицы</div>
<div>
                                          <table><tbody><tr><td colspan=""3""><strong>Пищевая ценность</strong></td></tr><tr><td colspan=""3""><strong>Размер порции:</strong> 2&nbsp;капсулы</td></tr><tr><td><strong>Порций в упаковке: </strong>90</td><td><br></td><td><br></td></tr><tr><td></td><td><strong>Количество в 1 капсуле</strong></td><td><strong>% от суточной нормы</strong></td></tr><tr><td><strong>Запатентованная смесь</strong><br>Lactobacillus gasseri KS-13 Bifidobacterium bifidum G9-1 и Bifidobacterium longum MM-2, Bifidobacterium lactis, Bifidobacterium longum BB536, Bifidobacterium breve M-16V, Bifidobacterium infantis M-63, Lactobacillus gasseri LAC-343, Lactobacillus rhamnosus LCS-742</td><td>6&nbsp;млрд живых клеток†</td><td>**</td></tr><tr><td colspan=""3"">†&nbsp;До истечения срока годности<br>**&nbsp;Суточная норма не определена.</td></tr></tbody></table>
                                      </div>`,
      images: [
        "https://cloudinary.images-iherb.com/image/upload/f_auto%2Cq_auto:eco/images/wak/wak61042/l/33.jpg",
        "https://kz.iherb.com/pr/kyolic-kyo-dophilus-multi-9-probiotic-6-billion-cfu-180-capsules/51892",
      ],
      id: 2098926744,
    },
  });
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
