import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { HeartIcon } from "@heroicons/react/outline"
import { useFavorite } from '../../../Context/FavoriteContext'

const WishListButton = () => {
  const {favoriteItems} = useFavorite()

  return (
    <div className="justify-content-center mx-auto text-center">
      <div className={styles.cartMenu}>
        <Link to="/favorites" className={styles.cartButton}>
          <HeartIcon className={styles.cartIcon} aria-hidden="true"  />
          <div className="flex flex-col self-center"> 
              {favoriteItems.length > 0 && (
               <span className={styles.cartCount}>
                 {favoriteItems.length}
               </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default WishListButton