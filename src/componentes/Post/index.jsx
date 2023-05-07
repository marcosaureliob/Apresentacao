import React from 'react'
import styles from './Post.module.css'

function Post( {post}) {
  return (
    <div className={styles.post}>
        <img src={`/assets/posts/${post.id}/capa.png`} className={styles.capa} alt='Imagem do post'/>
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <button className={styles.botaoLer}>Ler</button>
    </div>
  )
}

export default Post