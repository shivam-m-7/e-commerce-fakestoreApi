import {    
  ClipboardListIcon,
  HeartIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'

const NAVIGATION = [  
  {
    id: 4,
    name: "Cart",
    link: "/cart",
    icon: (
      <ShoppingCartIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />
    ),
    loggedIn: "public",
    underlined: false,
  },
  {
    id: 5,
    name: "Orders",
    link: "/orders",
    icon: (
      <ClipboardListIcon
        className="mr-2 my-auto h-5 w-5"
        aria-hidden="true"
      />
    ),
    loggedIn: true,
    underlined: false,
  },
  {
    id: 6,
    name: "Favorites",
    link: "/favorites",
    icon: <HeartIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />,
    loggedIn: "public",
    underlined: true,
  },
]

export default NAVIGATION