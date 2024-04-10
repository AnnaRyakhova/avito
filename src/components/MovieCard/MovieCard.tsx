import { Link } from 'react-router-dom'
import { Typography } from 'antd'

import styles from './MovieCard.module.css'
import { Movie } from '../../types'
import { FC } from 'react'

const { Title, Text } = Typography

interface MovieCardProps {
  movie: Movie
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const { name, alternativeName, year, movieLength, genres, countries, poster, rating, id } = movie || {}

  const [genreObj] = genres
  const genre = genreObj?.name ? `${genreObj.name}, ` : ''

  const [country] = countries
  const countryName = country?.name ? `${country.name}` : ''

  const anotherName = alternativeName ? `${alternativeName}, ` : ''

  const length = movieLength ? `${movieLength} мин, ` : ''

  const info = `${anotherName}${year}, ${length} ${genre} ${countryName}`

  const movieRating = rating.kp.toFixed(1)

  return (
    <>
      <Link to={`/movie/${id}`} className={styles.link}>
        <div className={styles.wrapper}>
          <div className={styles.img} style={{ backgroundImage: `url(${poster.previewUrl})` }} />

          <div className={styles.description}>
            <div className={styles.text}>
              <Title level={4}>{name}</Title>
              <Text type="secondary">{info}</Text>
            </div>

            <Title level={2} className={styles.rating}>
              {movieRating}
            </Title>
          </div>
        </div>
      </Link>
    </>
  )
}