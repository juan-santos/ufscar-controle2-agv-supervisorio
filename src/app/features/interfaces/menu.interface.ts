export interface MenuItensInterface {
  title: string;
  listItens : Array<Item>
}

export interface Item {
  name: string;
  link: string;
  icon: string;
}
