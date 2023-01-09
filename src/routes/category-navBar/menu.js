const menu = [
  {
    id: 1,
    title: "hats",
    path: "/hats",
  },
  {
    id: 2,
    title: "contact",
    path: "/contact",
  },
  {
    id: 3,
    title: "sign In",
    path: "/auth",
  },
  {
    id: 4,
    title: "basket",
    path: "/basket",
  },
  {
    id: 5,
    title: "shop",
    path: "/shop",
  }
]
export default menu;


// {
//   menu.map((nav) => (
//     <NavLink
//       key={nav.id}
//       path={nav.path}
//       text={nav.title}
//     />
//   ))
// }


// <Link
//   className={'link_Container'}
//   to={'/shop'}
// >
//   shop
// </Link>
// <Link
//   className={'link_Container'}
//   to={'/authentication'}
// >
//   sign In
// </Link>