import { BreadCrumb } from "@/lib/ProductPage/BreadCrumb";
import { PhotoBlock } from "@/lib/ProductPage/ProductPhoto";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

function createMarkup() {
  return {
    __html:
      `<div class="descr text-2xl">` +
      `<ul>

  <li>
      &#x421;&#x440;&#x43E;&#x43A; &#x433;&#x43E;&#x434;&#x43D;&#x43E;&#x441;&#x442;&#x438;: 1 &#x444;&#x435;&#x432;&#x440;&#x430;&#x43B;&#x44F; 2025
                    
  </li>

  <li>
      &#x414;&#x43E;&#x441;&#x442;&#x443;&#x43F;&#x43D;&#x43E;, &#x43D;&#x430;&#x447;&#x438;&#x43D;&#x430;&#x44F; &#x441;: <span> 9 &#x43D;&#x43E;&#x44F;&#x431;&#x440;&#x44F; 2010 </span>
  </li>
<li>
  &#x412;&#x435;&#x441; &#x432; &#x443;&#x43F;&#x430;&#x43A;&#x43E;&#x432;&#x43A;&#x435;:&nbsp;
  <div>
      <span>
          0.18 &#x444;&#x443;&#x43D;&#x442;&#x43E;&#x432;
      </span>
      <div>&#x41F;&#x435;&#x440;&#x435;&#x43A;&#x43B;&#x44E;&#x447;&#x438;&#x442;&#x44C;&#x441;&#x44F; &#x43D;&#x430; &#x43C;&#x435;&#x442;&#x440;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x435;&#x434;&#x438;&#x43D;&#x438;&#x446;&#x44B;</div>
  </div>
  
</li>
<li>&#x41A;&#x43E;&#x434; &#x442;&#x43E;&#x432;&#x430;&#x440;&#x430;:   <span>CDL-10900</span></li>
<li>UPC &#x41A;&#x43E;&#x434;:   <span>608274109001</span></li>
  <li>&#x41A;&#x43E;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x442;&#x432;&#x43E; &#x432; &#x443;&#x43F;&#x430;&#x43A;&#x43E;&#x432;&#x43A;&#x435;:   1</li>
          <li>
      &#x420;&#x430;&#x437;&#x43C;&#x435;&#x440;&#x44B;:
      <div>
          <span>
                  <span>1.2 x 1.25 x 4 in</span>, 
                  <span>0.18 &#x444;&#x443;&#x43D;&#x442;&#x43E;&#x432;</span>
          </span>
          <div>&#x41F;&#x435;&#x440;&#x435;&#x43A;&#x43B;&#x44E;&#x447;&#x438;&#x442;&#x44C;&#x441;&#x44F; &#x43D;&#x430; &#x43C;&#x435;&#x442;&#x440;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x435;&#x434;&#x438;&#x43D;&#x438;&#x446;&#x44B;</div>
      </div>
  </li>



          </ul>
<div><ul>  <li>Незаменимые питательные вещества</li>  <li>Nutrition&nbsp;for&nbsp;Kids!</li>  <li>Замечательный вкус</li>  <li>Пищевая добавка</li>  <li>Сертификат кошерности Kosher&nbsp;Parve</li>  <li>Без глютена, спирта, и казеина</li></ul><p>Витамин&nbsp;D3 от ChildLife разработан специально для младенцев и детей. Не содержит спирта, из натуральных ингредиентов, хорошо усваивается и имеет превосходный вкус натуральных ягод.</p><p><strong>Полезный совет. </strong>Недавно Американская академия педиатрии рекомендовала удвоить количество витамина&nbsp;D в ежедневном рационе детей. Эти рекомендации последовали после новых исследований, продемонстрировавших многие полезные свойства витамина&nbsp;D, среди которых поддержка здоровья костей и иммунной системы.</p></div>
<div>
                                  <table>  <tbody><tr>    <td colspan="3"><strong>Пищевая ценность</strong></td>  </tr>  <tr>    <td colspan="3"><strong>Размер порции:</strong> 8&nbsp;капель</td>  </tr>  <tr>    <td colspan="3"><strong>Порций в упаковке:</strong> 115</td>  </tr>  <tr>    <td> </td>    <td><strong>Количество в 1&nbsp;порции</strong></td>    <td><strong>% от суточной нормы</strong></td>  </tr>  <tr>    <td>Витамин&nbsp;D3 (в виде холекальциферола)</td>    <td>500&nbsp;МЕ</td>    <td>125%</td>  </tr></tbody></table>
                              </div>`,
  };
}

export default function ProductPage() {
  const [data, setData] = useState(JSON);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/index-data")
      .then(async (res) => {
        setData(await res.json());
        setLoading(false);
      });
  }, []);



  let category1: string = "Чайлдлайф";
  let category2: string = "Товары для детей";
  let category3: string = "Здоровье детей";
  let category4: string = "Витамин D для детей";
  let articul: string = "CDL-10900";
  let title: string =
    "ChildLife, витамин D3, со вкусом натуральных ягод, 30 мл (1 жидк. унция)";
  let price: number = +"616,046".replace(",", ".");
  let count: string = "В наличии";
  let images: Array<string> = [
    "https://cloudinary.images-iherb.com/image/upload/f_auto%2Cq_auto:eco/images/drb/drb00183/l/99.jpg",
  ];
  let id: string = (1555662418).toString();
  return (
    <div className="p-4 m-4">
      <div className="flex flex-row justify-between pb-2">
        <h1 className="text-lg">{title}</h1>
        <h2 className="text-md">Артикул: {articul}</h2>
      </div>
      <BreadCrumb
        category1={category1}
        category2={category2}
        category3={category3}
        category4={category4}
      />
      <div className="flex flex-row justify-between pb-2 p-4">
        <PhotoBlock images={images} />
        <div className="flex flex-col justify-items-end">
        <h2 className="text-6xl">Цена: {Math.ceil(price)} ₽</h2>
        <h2 className="text-3xl">{count}</h2>
        </div>
      </div>
      <h1 className="text-4xl">
        Описание
      </h1>
      <div dangerouslySetInnerHTML={createMarkup()} />
      
    </div>
  );
}
