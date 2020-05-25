import React from 'react'
import '../styles/card.css'
import { Container } from 'react-bootstrap'

export default ({data}) => {
  console.log('Card.render data', data)
  const {title, image_position, link, image, content} = data
  return(
    <Container>
      <p>
        Amet earum pariatur similique sed perferendis. Culpa sunt vel cupiditate sapiente nam. Necessitatibus recusandae consectetur nostrum hic vero Tempore labore natus corrupti quo cum. Possimus ab dignissimos veniam modi quidem eveniet. Perspiciatis rerum assumenda adipisci fugiat maxime repellendus ad id? Nulla quod exercitationem unde debitis aliquam eligendi. Voluptas obcaecati fugit fugit tenetur laudantium Natus necessitatibus veritatis blanditiis assumenda quae Deserunt officia modi deserunt beatae at Officia sit molestias ipsam dolorem quisquam, odio quos natus Alias sint totam asperiores ducimus aliquid, vel, asperiores Aliquam a eligendi quam pariatur incidunt Sequi aut ex ut non fugit Odio corporis asperiores ut sed distinctio? Expedita eaque inventore voluptatum soluta illo! Eius vitae qui nobis provident veniam at Alias sunt fugit repudiandae unde sequi repellat Deleniti pariatur nemo soluta sunt possimus libero? Dolor at at sit expedita voluptatum. At ipsam consequuntur ducimus quaerat nesciunt! Recusandae sunt ducimus eum iure vel? Consectetur iste molestiae ratione in architecto Soluta placeat iure ducimus consectetur excepturi recusandae! Optio nam accusantium praesentium similique assumenda molestias! Nulla nobis illum repellendus deleniti at? Quaerat magni dignissimos dolor eveniet culpa Nihil assumenda fugiat fuga voluptas quia Aliquam provident iste aspernatur in rem. Aliquam odit commodi distinctio rem eos! Itaque dicta pariatur voluptatum error nobis. Ipsam nihil rerum exercitationem aliquam vero nostrum? Placeat voluptate aliquam debitis impedit ea. Deleniti sunt sunt ea quia earum voluptatibus, accusamus Laborum quidem alias accusamus itaque perferendis distinctio, id. Quaerat voluptas nihil ullam eos aliquam. Dignissimos quae laborum nam asperiores necessitatibus itaque, sint! Accusamus ad accusantium quae provident praesentium perferendis itaque magnam Eligendi quam earum molestias iusto in Consectetur architecto quia atque incidunt consectetur magni. Alias nobis rem non doloremque praesentium saepe Accusantium obcaecati libero nihil officiis veritatis? Explicabo et veritatis culpa fugiat nobis Cupiditate ipsam nulla nostrum adipisci fugit Architecto voluptatibus necessitatibus nostrum molestiae nostrum Quod assumenda maxime
      </p>
    </Container>
  )
}
