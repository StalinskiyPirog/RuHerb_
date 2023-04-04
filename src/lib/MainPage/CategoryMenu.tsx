import { Badge, Button, Table } from "flowbite-react";

export default function CategoryMenu() {
  return (
    <Table className="w-[90vw]">
      <Table.Head>
        <Table.HeadCell>Категории</Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Пищевые добавки
          </Table.Cell>
          <Table.Cell>
            <Badge color="success" size="sm">
              Витамины, микроэлементы, сон ...
            </Badge>
          </Table.Cell>
          <Table.Cell >
            <Button color="success">
            <a href={`/search?category1=Пищевые добавки`} className="text-green-300">
                Перейти
            </a>
            </Button>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Активный образ жизни
          </Table.Cell>
          <Table.Cell>
            <Badge color="success" size="sm">
              Протеин, добавки для физической активности, спорт товары ...
            </Badge>
          </Table.Cell>
          <Table.Cell >
            <Button color="success">
            <a href={`/search?category1=Активный образ жизни`} className="text-green-300">
                Перейти
            </a>
            </Button>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Средства для душа и ухода
          </Table.Cell>
          <Table.Cell>
            <Badge color="success" size="sm">
              Уход за телом, уход за волосами, личная гигиена ...
            </Badge>
          </Table.Cell>
          <Table.Cell >
            <Button color="success">
            <a href={`/search?category1=Средства для душа и ухода`} className="text-green-300">
                Перейти
            </a>
            </Button>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Красота
          </Table.Cell>
          <Table.Cell>
            <Badge color="success" size="sm">
              Макияж, корейская косметика товары для красоты ...
            </Badge>
          </Table.Cell>
          <Table.Cell >
            <Button color="success">
            <a href={`/search?category1=Красота`} className="text-green-300">
                Перейти
            </a>
            </Button>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Бакалея
          </Table.Cell>
          <Table.Cell>
            <Badge color="success" size="sm">
              Чай, закуски, кофе, шоколад и сладости ...
            </Badge>
          </Table.Cell>
          <Table.Cell >
            <Button color="success">
            <a href={`/search?category1=Бакалея`} className="text-green-300">
                Перейти
            </a>
            </Button>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Товары для детей
          </Table.Cell>
          <Table.Cell>
            <Badge color="success" size="sm">
              Здоровье детей, детское питание и питание для младенцев ...
            </Badge>
          </Table.Cell>
          <Table.Cell >
            <Button color="success">
            <a href={`/search?category1=Товары для детей`} className="text-green-300">
                Перейти
            </a>
            </Button>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Зоотовары
          </Table.Cell>
          <Table.Cell>
            <Badge color="success" size="sm">
              Добавки для питомцев, уход за животными ...
            </Badge>
          </Table.Cell>
          <Table.Cell >
            <Button color="success">
            <a href={`/search?category1=Зоотовары`} className="text-green-300">
                Перейти
            </a>
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
